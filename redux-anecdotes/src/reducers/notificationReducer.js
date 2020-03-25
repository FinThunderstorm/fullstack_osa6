const initialState = ''
var timeoutID

const notificationReducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action: ', action)

  switch(action.type) {
    case 'NOTIFICATION':
      state = action.data.message
      return state

    case 'EMPTY':
      state = ''
      return state

    default:
      return state
  }
}

export const setNotification = (message, time) => {
  return dispatch => {
    clearTimeout(timeoutID)
    dispatch({
      type: 'NOTIFICATION',
      data: {message}
    })
    timeoutID = setTimeout(() => {
      dispatch({
        type: 'NOTIFICATION',
        data: {
          message: ''
        }
      })
    }, time * 1000)
  }
}

export default notificationReducer