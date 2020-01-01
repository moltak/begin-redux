import { createAction, handleActions } from 'redux-actions'
import { List, Map, Record } from 'immutable'

const CHANGE_INPUT = 'todo/CHANGE_INPUT'
const INSERT = 'todo/INSERT'
const TOGGLE = 'todo/TOGGLE'
const REMOVE = 'todo/REMOVE'

export const changeInput = createAction(CHANGE_INPUT, value => value)
export const insert = createAction(INSERT, text => text)
export const toggle = createAction(TOGGLE, id => id)
export const remove = createAction(REMOVE, id => id)

let id = 0;

const initailState = Record({
  input: '',
  todos: List()
})()

const TodoRecord = Record({
  id: id++,
  text: 11,
  checked: false
})

export default handleActions({
  [CHANGE_INPUT]: (state, action) => state.set('input', action.payload),
  [INSERT]: (state, { payload: text }) => {
    // 위 코드는 action 객체를 비구조화 할당하고, payload 값을 text 라고 부르겠다는 의미입니다.
    const item = TodoRecord({ id: id++, text })
    return state.update('todos', todos => todos.push(item));
  },
  [TOGGLE]: (state, { payload: id }) => {
    // id 값을 가진 index 를 찾아서 checked 값을 반전시킵니다
    const index = state.get('todos').findIndex(item => item.get('id') === id);
    return state.updateIn(['todos', index, 'checked'], checked => !checked);
  },
  [REMOVE]: (state, { payload: id }) => {
    // id 값을 가진 index 를 찾아서 지웁니다.
    const index = state.get('todos').findIndex(item => item.get('id') === id);
    return state.deleteIn(['todos', index]);
  }
}, initailState)