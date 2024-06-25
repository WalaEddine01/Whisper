const createUserSlice = (set) => ({
  user: null,
  setUser: (user) => set(() => ({ user: user })),
});

export default createUserSlice;

