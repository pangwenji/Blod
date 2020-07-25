import { createReducer, on } from '@ngrx/store';
import { goforward, stoping, gobacking } from './counter.action';

export type status={
    goforward:number;
    stoping:number;
    gobacking:number;
}

const initalState = 0;
//     goforward:0,
//     stoping:0,
//     gobacking:0
// }
const _counterReducer  = createReducer(initalState,
     on(goforward,state=>state+1),
     on(stoping,state=>state+0),
     on(gobacking,state=>state-1)
    )

export function counterReducer (state,action){
   return _counterReducer(state,action);
}