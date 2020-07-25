import { createReducer, on, Action } from '@ngrx/store'
import { SetModalVisible, SetModalType } from '../actions/Member.action'

export enum ModalType {
    Register = "register",
    LoginByPhone = "loginByPhone",
    Share = 'share',
    Like = 'like',
    Default = 'default'
}

//初始化State类型
export interface MemberState {
    modalVisible: boolean;
    modalType: ModalType
}

//初始化State的值
export const initialState: MemberState = {
    modalVisible: false,
    modalType: ModalType.Default
}
//注册到Reducer

const reducer = createReducer(
    initialState,
    on(SetModalVisible, (state, { modalVisible }) => ({ ...state, modalVisible })),
    on(SetModalType, (state, { modalType }) => ({ ...state, modalType })),
)

export function memberReducer(state: MemberState, action: Action) {
    return reducer(state, action);
}