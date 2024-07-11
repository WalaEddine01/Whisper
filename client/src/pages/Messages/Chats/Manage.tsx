import { ManageDiv } from './Chats.styles';
import useApplicationStore from '../../../Hooks/useApplicationStore';

const Manage = () => {
  const {
    setSelectedChat,
    selectedTabType,
    setSelectedDetails,
    setSelectedChatType,
    setManagementMode,
  } = useApplicationStore();

  function handleManageClick() {
    setSelectedChat(null);
    setSelectedDetails(null);
    setSelectedChatType(null);
    setManagementMode(selectedTabType);
  }

  return <ManageDiv onClick={handleManageClick}>Manage</ManageDiv>;
};

export default Manage;

