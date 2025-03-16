// src/app/products/[id]/page.tsx

interface TodoItem {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

async function getTodo(id: string): Promise<TodoItem | null> {
    console.log(id, `/api/products/${id}`);
    try {
        // 서버에서 작동하므로, 절대적인 URL 경로 필요
        const res = await fetch(`http://localhost:3000/api/products/${id}`, {
            // Next.js의 확장 기능 사용 (서버 컴포넌트에서는 가능)
            next: {
                revalidate: 20 // 20초마다 재검증
            }
        });

        if (!res.ok) {
            throw new Error('Failed to fetch todo item');
        }

        return res.json();
    } catch (e) {
        console.error(e);
        return null;
    }
}

export default async function ProductPage({params}: { params: Promise<{ id: string }> }) {
    const {id} = await params;
    const todo = await getTodo(id);
    if (Object.keys(todo || {}).length === 0) return <div>표시 할 내용이 없습니다.</div>

    return (
        <div className="p-6 max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Todo Item Details</h1>

            <div className="bg-white shadow rounded-lg p-6">
                <div className="mb-4">
                    <span className="text-gray-500">ID:</span>
                    <span className="ml-2 font-medium">{todo!.id}</span>
                </div>

                <div className="mb-4">
                    <span className="text-gray-500">Title:</span>
                    <p className="mt-1 text-lg">{todo!.title}</p>
                </div>

                <div className="mb-4">
                    <span className="text-gray-500">Status:</span>
                    <span className={`ml-2 px-3 py-1 rounded-full text-sm font-medium ${
                        todo!.completed ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
            {todo!.completed ? 'Completed' : 'Pending'}
          </span>
                </div>

                <div>
                    <span className="text-gray-500">User ID:</span>
                    <span className="ml-2">{todo!.userId}</span>
                </div>
            </div>
        </div>
    );
}

// export function generateMetadata({ params }: { params: { id: string } }) {
//     return {
//         title: `Todo Item ${params.id}`,
//         description: `Details for todo item ${params.id}`
//     };
// }