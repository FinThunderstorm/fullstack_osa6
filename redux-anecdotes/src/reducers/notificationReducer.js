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

export const notify = (message) => {
  console.log('notify: ',message)
  return {
    type: 'NOTIFICATION',
    data: { message }
  }
}

export const empty = () => {
  return {
    type: 'EMPTY',
    data: {
      message: ''
    }
  }
}

export default notificationReducer