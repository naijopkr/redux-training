export const createStore = (initialReducer, intiialState = {}) => {
  let reducer = initialReducer
  let state = reducer(intiialState, { type: '__INIT__' })
  return {
    getState: () => state
  }
}