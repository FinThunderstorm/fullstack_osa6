import React from 'react'
import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { notify, empty } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
  const dispatch = useDispatch()

  const add = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(addAnecdote(content))
    dispatch(notify(`added anecdote '${content}'`))
    setTimeout(() => dispatch(empty()), 5000)
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