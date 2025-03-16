// src/app/about/page.tsx
async function getTodo() {
    // https://jsonplaceholder.typicode.com/
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');

    if (!res.ok) {
        throw new Error('Failed to fetch products');
    }

    return res.json();
}

export default async function Page() {
    const todo = await getTodo();

    return (
        <div>
            <h1>Products</h1>
            <ul>
                <li>{todo.userId}</li>
                <li>{todo.id}</li>
                <li>{todo.title}</li>
                <li>{todo.completed}</li>
            </ul>
        </div>
    );
}