import {
  Details,
  MessageButton,
  MessageDiv,
  MessageImage,
  MessageRow,
  Time,
  User,
} from './Panel.styles';
import { FC, useState } from 'react';

import { MessageProps } from './Panel.types';
import { formatDate } from '../../../utils/utils';
import useApplicationStore from '../../../Hooks/useApplicationStore';

const Message: FC<MessageProps> = ({ message, selectedChatType }) => {
  const { userId } = useApplicationStore();

  const [isDetailed, setIsDetailed] = useState(false);

  function toggleDetails() {
    setIsDetailed((oldDetailed) => !oldDetailed);
  }

  const readableDate = formatDate(message.createdAt);

  return (
    <li>
      <MessageDiv me={message.sender.id === userId}>
        <MessageRow>
          {selectedChatType === 'group' && userId !== message.sender.id && (
            <MessageImage me={message.sender.id === userId}>
              <img src={`http://localhost:5000/${message.sender.imgPath}`} />
            </MessageImage>
          )}
          <MessageButton
            me={message.sender.id === userId}
            onClick={toggleDetails}>
            {message.content}
          </MessageButton>
        </MessageRow>
        {isDetailed && (
          <Details
            me={message.sender.id === userId}
            group={selectedChatType === 'group'}>
            {selectedChatType === 'group' && userId !== message.sender.id && (
              <>
                <User>@{message.sender.username}</User>
                <span>-</span>
              </>
            )}
            <Time me={message.sender.id === userId}>{readableDate}</Time>
          </Details>
        )}
      </MessageDiv>
    </li>
  );
};

export default Message;

