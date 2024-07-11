import { UserTypingLoadingDiv, UserTypingLoadingSpan } from './Loaders.styles';

const TypingLoader = () => {
  return (
    <UserTypingLoadingDiv>
      <UserTypingLoadingSpan></UserTypingLoadingSpan>
      <UserTypingLoadingSpan></UserTypingLoadingSpan>
      <UserTypingLoadingSpan></UserTypingLoadingSpan>
    </UserTypingLoadingDiv>
  );
};

export default TypingLoader;

