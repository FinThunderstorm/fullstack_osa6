import React from 'react'
import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { notify, empty } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = (props) => {
  const dispatch = useDispatch()

  const add = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(addAnecdote(newAnecdote))
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