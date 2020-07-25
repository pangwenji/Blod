import { MemberState } from '../reducers/member.reducer';
import { createReducer } from '@ngrx/store';

const selectMemberStates = (state: MemberState) => state;
export const getModalVisible = createReducer(selectMemberStates, (state: MemberState) => state.modalVisible);
export const getModalType = createReducer(selectMemberStates, (state: MemberState) => state.modalType)