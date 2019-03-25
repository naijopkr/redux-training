# Redux implementation for training

This is a simple implementation of the core part of Redux.

## How Redux works?
The user dispatches an action. The action is passed to your reducer along with the current state.

The reducer returns a new state according to the action's type property.

The state is updated and anyone interested is notified!

Obs.: This is a simple implementation for training purposes only. Redux is provided with many securty and perfomance features that this project doesn't have.

Source: 
- https://dev.to/selbekk/redux-in-27-lines-2i92
- https://github.com/reduxjs/redux/blob/master/src/createStore.js