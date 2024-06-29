const createFlexibilitySlice = (set) => ({
  isSmall: null,
  setIsSmall: (value) => set(() => ({ isSmall: value })),
});

export default createFlexibilitySlice;

