module.exports = {
  createStore: (initialReducer, intiialState = {}, enhancer) => {
    if (enhancer) {
      return enhancer(createStore)(initialReducer, intiialState)
    }
    let reducer = initialReducer
    let subscribers = []
    let state = reducer(intiialState, { type: '__INIT__' })
    return {
      getState: () => state,
      dispatch: action => {
        state = reducer(state, action)
        subscribers.forEach(subscriber => subscriber())
      },
      subscribe: listener => {
        subscribers.push(listener)
        return () => {
          subscribers = subscribers.filter(subscriber => subscriber !== listener)
        }
      },
      replaceReducer(newReducer) {
        reducer = newReducer
        this.dispatch({ type: '__REPLACE__' })
      }
    }
  }
}