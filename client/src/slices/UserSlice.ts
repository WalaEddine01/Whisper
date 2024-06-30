const createUserSlice = (set) => ({
  user: null,
  setUser: (user) => set(() => ({ user: user })),
  userId: null,
  setUserId: (userId) => set(() => ({ userId: userId })),
});

export default createUserSlice;

