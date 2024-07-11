import { Message } from '../../../slices/Slices.types';

export interface PanelDivProps {
  isSmall: boolean | null;
}

export interface DetailsProps {
  group?: boolean;
  me?: boolean;
}

export interface ImageProps {
  me?: boolean;
}

export interface MessageButtonProps {
  me?: boolean;
}

export interface MessageDivProps {
  me?: boolean;
}

export interface TimeProps {
  me?: boolean;
}

export interface MessageProps {
  message: Message;
  selectedChatType: 'direct' | 'group' | null;
}

export interface PanelBodyProps {
  inputValue: string;
}
