import React from 'react'
import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
  const dispatch = useDispatch()

  const add = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(addAnecdote(content))
    dispatch(setNotification(`added anecdote '${content}'`,5))
 
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

export default AnecdoteForm