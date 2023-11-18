'use client';
import Image from 'next/image'
import { createRef, useRef, useState } from 'react'

export default function Home() {

  const [todos, setTodos] = useState<string[]>([]);
  const inputRef = createRef<HTMLInputElement>();

  const handkeAddTodo = () => {
    const text = inputRef.current?.value
    const newItem = {completed: false, text};
    setTodos([...todos, newItem]);
    console.log(text);
    inputRef.current.value = '';
  }

  const handleItemDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  }

  const handleDeleteItem = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }
  return (
    <main className="bg-green-900 w-screen p-10 h-screen">
      
      <div className="items-center p-4 max-w-sm border-solid border-2 break-words rounded-lg">
        <h2 className='text-3xl p-3'>ToDo List</h2>
          <ul>
            
              {todos.map((item, index) => {
                // eslint-disable-next-line react/jsx-key
                return  <div className='flex justify-between'>
                          <li key={index} className={item.completed ? "text-gray-500 line-through p-1 cursor-pointer" : "p-1 cursor-pointer"} onClick={() => handleItemDone(index)}>✨{item.text}</li>
                          <span onClick={() => handleDeleteItem(index)} className="p-1 cursor-pointer">❌</span>
                        </div>
              })}
             
          </ul>
        <input ref={inputRef} placeholder='Enter ToDo' type='text' className='w-5/6 m-5 rounded-md hover:rounded-sm duration-200 text-black' />
        <button onClick={handkeAddTodo} className='bg-teal-500 rounded-md px-2 m-2'>Add</button>
      </div>

    </main>
  )
}
