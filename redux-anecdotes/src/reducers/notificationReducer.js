const initialState = ''

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
  console.log('notify: ',message)
  
  return dispatch => {
    dispatch({
      type: 'NOTIFICATION',
      data: {message}
    })
    setTimeout(() => {
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