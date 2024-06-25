import { create } from 'zustand';
import createUserChatsSlice from './slices/UserChatsSlice';
import createUserSlice from './slices/UserSlice';
import createUsersSlice from './slices/UsersSlice';

const useAppStore = create((...args) => ({
  ...createUserSlice(...args),
  ...createUsersSlice(...args),
  ...createUserChatsSlice(...args),
}));

export default useAppStore;

