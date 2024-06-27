const createUserSlice = (set) => ({
  userId: null,
  setUserId: (userId) => set(() => ({ userId: userId })),
});

export default createUserSlice;

