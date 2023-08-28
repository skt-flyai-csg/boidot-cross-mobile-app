import {useEffect, useState} from 'react';
import axios from 'axios';
import {BASE_URL, USER_ID} from '@env';
import {useAuth} from '../contexts/AuthContext';
import {MessageProps} from '../types';

export const useGptRequest = (
  handleMessage: ({type, isMe, message}: MessageProps) => void,
) => {
  const {token} = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [isProcessed, setIsProcessed] = useState(false);
  const [data, setData] = useState({objectId: '', createdTime: ''});
  const [requestObject, setRequestObject] = useState<string>('');

  useEffect(() => {
    if (data.objectId !== '' && isProcessed) {
      handleMessage({
        type: 'bubble',
        message: `에이닷이 ${
          requestObject === 'report'
            ? '아이의 하루를 요약했어요!'
            : '일기를 생성했어요!'
        }\n아래 버튼을 눌러 확인해주세요!`,
        isMe: false,
      });
      handleMessage({
        type: requestObject,
        data: data,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  async function getGptRequest(requestId: string) {
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
        setData({
          objectId: response.data.object_id,
          createdTime: response.data.createdTime,
        });
      }
    } catch (err) {
      handleMessage({
        type: 'bubble',
        message: `${
          requestObject === 'report' ? '하루 요약에' : '일기 작성에'
        } 실패했어요.\n다시 시도해주세요.`,
        isMe: false,
      });
      throw err;
    }
  }

  async function postGptRequest(request_object: string) {
    try {
      setRequestObject(request_object);
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
        handleMessage({
          type: 'bubble',
          message: `에이닷이 ${
            request_object === 'report'
              ? '아이의 하루를 요약 중입니다.'
              : '일기를 생성 중입니다.'
          }\n조금만 기다려주세요....`,
          isMe: false,
        });
        const timer = setTimeout(() => getGptRequest(response.data.id), 60000);
        return () => clearTimeout(timer);
      }
    } catch (err) {
      handleMessage({
        type: 'bubble',
        message: '메시지 전송에 실패했어요. 다시 물어봐주세요.',
        isMe: false,
      });
      throw err;
    }
  }

  return {
    data,
    getGptRequest,
    postGptRequest,
    isLoading,
    isProcessed,
  };
};
