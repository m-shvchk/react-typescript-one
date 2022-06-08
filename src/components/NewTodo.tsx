import React from 'react'
import { useRef } from 'react'

const NewTodo: React.FC<{onAddTodo: (text: string) => void}> = (props) => {
  
    const inputRef = useRef<HTMLInputElement>(null) // every html has its type, null - default value in case this ref was already assigned tp different element 
    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();

        // const enteredText = inputRef.current?.value // '?' - if value exists, otherwise 'null'
        const enteredText = inputRef.current!.value // '!' - you are sure, value will exist 

        if (enteredText.trim().length === 0) return

        props.onAddTodo(enteredText)
    }
  return (
    <form onSubmit={submitHandler}>
        <label htmlFor="text">Todo</label>
        <input type="text" id='text' ref={inputRef}/>
        <button>Add Todo</button>
    </form>
  )
}

export default NewTodo