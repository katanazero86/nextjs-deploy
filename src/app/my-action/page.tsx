// src/app/my-action/page.tsx
export default function MyActionPage() {

    // 인라인 서버 액션 정의
    async function handleSubmit(formData: FormData) {
        'use server';

        const name = formData.get('name');
        console.log(`서버에서 받은 이름: ${name}`);
        // 데이터베이스 업데이트 등의 서버 작업 수행
    }

    return (
        <form action={handleSubmit} className='border border-dashed border-indigo-500 p-2 flex flex-col gap-1'>
            <input type="text" name="name" placeholder='input..' className='border border-gray-200 p-2 outline-none' />
            <button type="submit" className='border border-gray-300 p-2 cursor-pointer'>제출</button>
        </form>
    );
}