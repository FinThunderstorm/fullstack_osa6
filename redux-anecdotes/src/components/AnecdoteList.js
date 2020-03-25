import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { notify, empty } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdotes.filter(a => a.content.toLowerCase().includes(state.filter.toLowerCase())).sort((a,b) => b.votes-a.votes))
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
    dispatch(voteAnecdote(id, anecdotes.find(a => a.id === id)))
    dispatch(notify(`you voted '${anecdotes.find(a => a.id === id).content}'`))
    setTimeout(() => dispatch(empty()), 5000)
  }

  return (
    <>
      {anecdotes
        .map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
          </div>
        )
      }
    </>
  ) 
}

export default AnecdoteList
  
