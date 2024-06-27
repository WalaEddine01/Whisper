import BackButton from '../../components/Buttons/BackButton';
import React from 'react';
import styled from 'styled-components';
import useAppStore from '../../Store';

const Image = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: green;
  flex-shrink: 0;
`;

const UserRow = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const IconsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;

const HeadRow = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  justify-content: space-between;
  background-color: #222222;
  padding: 16px 16px;
  color: var(--mainTextColor);
  height: 64px;
`;

const BackAndUser = styled.div`
  display: flex;
  gap: 12px;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Type = styled.p`
  color: var(--mainTextColorLight);
  font-size: 12px;
  text-align: left;
`;

const PanelHead = () => {
  const selectedChat = useAppStore((state) => state.selectedChat);
  const setSelectedChat = useAppStore((state) => state.setSelectedChat);
  const setSelectedDetails = useAppStore((state) => state.setSelectedDetails);
  const selectedDetails = useAppStore((state) => state.selectedDetails);
  const selectedChatType = useAppStore((state) => state.selectedChatType);

  function handleHeadClick() {
    let newSelectedDetails = null;
    if (selectedDetails === null) {
      newSelectedDetails = selectedChat;
    }
    setSelectedDetails(newSelectedDetails);
  }

  function handleBackClick() {
    setSelectedChat(null);
    setSelectedDetails(null);
  }

  if (selectedChat) {
    return (
      <HeadRow>
        <BackAndUser>
          <BackButton color={'var(--mainTextColor'} onClick={handleBackClick} />
          <UserRow onClick={() => handleHeadClick()}>
            <Image />
            <Text>
              <h1>{selectedChat.user?.name || selectedChat.name}</h1>
              <Type>
                {selectedChatType === 'direct'
                  ? 'Direct Messages'
                  : 'Group Chat'}
              </Type>
            </Text>
          </UserRow>
        </BackAndUser>
        <IconsRow>
          <button>
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M23 7.5L16 12.5L23 17.5V7.5Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14 5.5H3C1.89543 5.5 1 6.39543 1 7.5V17.5C1 18.6046 1.89543 19.5 3 19.5H14C15.1046 19.5 16 18.6046 16 17.5V7.5C16 6.39543 15.1046 5.5 14 5.5Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button>
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M21.9999 17.42V20.42C22.0011 20.6985 21.944 20.9741 21.8324 21.2293C21.7209 21.4845 21.5572 21.7136 21.352 21.9018C21.1468 22.0901 20.9045 22.2335 20.6407 22.3227C20.3769 22.4119 20.0973 22.445 19.8199 22.42C16.7428 22.0856 13.7869 21.0341 11.1899 19.35C8.77376 17.8146 6.72527 15.7661 5.18993 13.35C3.49991 10.7412 2.44818 7.77097 2.11993 4.67997C2.09494 4.40344 2.12781 4.12474 2.21643 3.8616C2.30506 3.59846 2.4475 3.35666 2.6347 3.1516C2.82189 2.94653 3.04974 2.78268 3.30372 2.6705C3.55771 2.55831 3.83227 2.50024 4.10993 2.49997H7.10993C7.59524 2.4952 8.06572 2.66705 8.43369 2.98351C8.80166 3.29996 9.04201 3.73942 9.10993 4.21997C9.23656 5.18004 9.47138 6.1227 9.80993 7.02997C9.94448 7.3879 9.9736 7.77689 9.89384 8.15086C9.81408 8.52482 9.6288 8.86809 9.35993 9.13998L8.08993 10.41C9.51349 12.9135 11.5864 14.9864 14.0899 16.41L15.3599 15.14C15.6318 14.8711 15.9751 14.6858 16.3491 14.6061C16.723 14.5263 17.112 14.5554 17.4699 14.69C18.3772 15.0285 19.3199 15.2634 20.2799 15.39C20.7657 15.4585 21.2093 15.7032 21.5265 16.0775C21.8436 16.4518 22.0121 16.9296 21.9999 17.42Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </IconsRow>
      </HeadRow>
    );
  }

  return <div></div>;
};

export default PanelHead;

