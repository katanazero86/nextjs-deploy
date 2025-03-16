// src/app/api/products/[id]/route.js

interface Context {
    params: Promise<{ id: string }>
}

export async function GET(request: Request, context: Context) {
    const {id} = await context.params;
    if (id) {
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'GET',
        });
        const data = await res.json();

        return Response.json(data, {
            status: 200,
        });
    } else {
        return Response.json(
            {
                message: 'The id value is incorrect.'
            },
            {
                status: 400
            }
        )
    }
}