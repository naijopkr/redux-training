const { createStore } = require('./redux')
const reducer = require('./reducer')

const store = createStore(reducer)
const state = store.getState()

store.subscribe(() => console.log('The state has changed!', store.getState()))