import { FlexibilitySliceTypes } from './Slices.types';
import { StateCreator } from 'zustand';

const createFlexibilitySlice: StateCreator<FlexibilitySliceTypes> = (set) => ({
  isSmall: null,
  setIsSmall: (value) => set(() => ({ isSmall: value })),
});

export default createFlexibilitySlice;

