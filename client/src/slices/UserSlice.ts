import { StateCreator } from 'zustand';
import { UserSliceTypes } from './Slices.types';

const createUserSlice: StateCreator<UserSliceTypes> = (set) => ({
  user: null,
  userId: null,
  users: [],
  setUser: (user) => set(() => ({ user: user })),
  setUserId: (userId) => set(() => ({ userId: userId })),
  setUsers: (users) => set(() => ({ users: users })),
});

export default createUserSlice;

