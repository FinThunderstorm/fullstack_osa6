const initialState = ''

const filterReducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action: ', action)

  switch(action.type){
    case 'CHANGE':
      state = action.data.filter
      return state

    default:
      return state
  }
}

export const change = (filter) => {
  return {
    type: 'CHANGE',
    data: { filter }
  }
}

export default filterReducer