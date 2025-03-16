// src/app/todos/page.tsx
import {createTodoAction} from "@/actions/todoActions";

export default async function TodosPage() {
    const res = await fetch('http://localhost:8080/todos', {
        cache: 'force-cache',
    });
    const todos: { id: string; content: string; completed: boolean }[] = await res.json();

    return (
        <div className='p-2 border border-dashed border-indigo-500 rounded'>
            <div className='border border-dashed border-red-500 p-2 mb-4'>
                <h3>Todo 추가</h3>
                <form action={createTodoAction} className='flex flex-col gap-1'>
                    <input type='text' name='content' placeholder='input todo..'
                           className='border border-gray-500 text-gray-500 outline-none px-2 py-1'/>
                    <button type='submit' className='cursor-pointer border rounded border-gray-700 px-2 py-1'>추가
                    </button>
                </form>
            </div>
            <div className='flex flex-col gap-2'>
                {todos.map(todo => <div key={todo.id} className='not-first:border-t not-first:border-gray-400'>
                    <p>{todo.id}</p>
                    <p>{todo.content}</p>
                    <p>{todo.completed ? '완료' : '미완료'}</p>
                </div>)}
            </div>
        </div>
    )
}