import { ModalType } from '../reducers/member.reducer';
import { createAction, props } from '@ngrx/store';

export const SetModalVisible = createAction('[member] Set modal visible', props<{ modalVisible: boolean }>());
export const SetModalType = createAction('[member] Set moddal visible', props<{ modalType: ModalType }>());
