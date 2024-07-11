import {
  ChatSliceTypes,
  FlexibilitySliceTypes,
  UserSliceTypes,
} from './slices/Slices.types';

import { create } from 'zustand';
import createFlexibilitySlice from './slices/FlexibilitySlice';
import createUserChatsSlice from './slices/UserChatsSlice';
import createUserSlice from './slices/UserSlice';

type AppState = UserSliceTypes & ChatSliceTypes & FlexibilitySliceTypes;

const useAppStore = create<AppState>()((...args) => ({
  ...createUserSlice(...args),
  ...createUserChatsSlice(...args),
  ...createFlexibilitySlice(...args),
}));

export default useAppStore;

