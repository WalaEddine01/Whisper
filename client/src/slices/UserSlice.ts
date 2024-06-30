const createUserSlice = (set) => ({
  user: null,
  setUser: (user) => set(() => ({ user: user })),
  userId: null,
  setUserId: (userId) => set(() => ({ userId: userId })),
  users: [],
  setUsers: (users) => set((state) => ({ users: users })),
});

export default createUserSlice;

