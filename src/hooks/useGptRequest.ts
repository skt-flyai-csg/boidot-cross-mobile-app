import {useState} from 'react';
import axios from 'axios';
import {BASE_URL, USER_ID} from '@env';
import {useAuth} from '../contexts/AuthContext';

export const useGptRequest = (
  handleMessage: (message: string, isMe: boolean) => void,
) => {
  const {token} = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [isProcessed, setIsProcessed] = useState(false);
  const [report, setReport] = useState({objectId: '', createdTime: ''});

  async function getGptRequest(requestId: string) {
    console.log('리포트 받아오는 중', requestId);
    try {
      const response = await axios.get(
        `${BASE_URL}/gpt-requests/${requestId}/`,
        {
          headers: {
            Authorization: `Token ${token}`,
            'Content-Type': 'application/json',
          },
        },
      );
      if (response.status === 200) {
        setIsProcessed(response.data.is_processed);
        if (!response.data.is_processed) {
          const timer = setTimeout(() => getGptRequest(requestId), 1000);
          return () => clearTimeout(timer);
        }
        setIsLoading(false);
        setReport({
          objectId: response.data.object_id,
          createdTime: response.data.createdTime,
        });
        handleMessage(
          '에이닷이 리포트를 생성했어요! 아래 버튼을 눌러 확인해주세요!',
          false,
        );
      }
    } catch (err) {
      handleMessage('보고서 작성에 실패했어요. 다시 시도해주세요.', false);
      throw err;
    }
  }

  async function postGptRequest(request_object: string) {
    try {
      const response = await axios.post(
        `${BASE_URL}/gpt-requests/`,
        {user_id: USER_ID, request_object: request_object},
        {
          headers: {
            Authorization: `Token ${token}`,
            'Content-Type': 'application/json',
          },
        },
      );
      if (response.status === 201) {
        setIsProcessed(response.data.is_processed);
        setIsLoading(true);
        handleMessage(
          '에이닷이 보고서를 생성 중입니다. 조금만 기다려주세요....',
          false,
        );
        const timer = setTimeout(() => getGptRequest(response.data.id), 60000);
        return () => clearTimeout(timer);
      }
    } catch (err) {
      handleMessage('메시지 전송에 실패했어요. 다시 물어봐주세요.', false);
      throw err;
    }
  }

  return {
    report,
    getGptRequest,
    postGptRequest,
    isLoading,
    isProcessed,
  };
};
