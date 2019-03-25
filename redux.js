export const createStore = (initialReducer, intiialState = {}) => {
  let reducer = initialReducer
  let subscribers = []
  let state = reducer(intiialState, { type: '__INIT__' })
  return {
    getState: () => state,
    dispatch: action => {
      state = reducer(state, action)
      subscribers.forEach(subscriber => subscriber())
    },
    subscribe = listener => {
      subscribers.push(listener)
    }
  }
}