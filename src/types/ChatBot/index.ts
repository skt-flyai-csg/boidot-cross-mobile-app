import {Dispatch, RefObject, SetStateAction} from 'react';
import {TextInput} from 'react-native';

export interface BubbleProps {
  isMe: boolean;
  message: string;
}

export interface DiaryButtonProps {
  diary: {
    createdTime: string;
    objectId: string;
  };
}

export interface ReportButtonProps {
  report: {
    createdTime: string;
    objectId: string;
  };
}

export interface ChatButtonProps {
  diary: {
    createdTime: string;
    objectId: string;
  };
  report: {
    createdTime: string;
    objectId: string;
  };
}

export interface MessageProps {
  type: string;
  isMe?: boolean;
  message?: string;
  data?: {
    objectId: string;
    createdTime: string;
  };
}

export interface InputProps {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
  inputRef: RefObject<TextInput>;
  handleSubmit: () => void;
}

export interface ListFooterProps {
  isLoading: boolean;
  isProcessed: boolean;
}
