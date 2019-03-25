import { createStore } from './redux'

const store = createStore()
const state = store.getState()

store.subscribe(() => console.log('The state has changed!', store.getState()))