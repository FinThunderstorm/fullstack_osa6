import React from 'react'
//import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const AnecdoteForm = (props) => {
  //const dispatch = useDispatch()

  const add = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    props.addAnecdote(content)
    props.setNotification(`added anecdote '${content}'`,5)
 
  }

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={add}>
          <div><input name='anecdote'/></div>
          <button>create</button>
      </form>
    </>
  )
}

export default connect(null,{ addAnecdote, setNotification })(AnecdoteForm)