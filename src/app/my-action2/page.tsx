// /src/app/my-action2/page.tsx
"use client";

import {myAction} from "@/actions";

export default function MyAction2Page() {
    // 실제 서버 액션 함수(별도 파일로 분리하거나, 이 파일 내부에 선언해도 됨)
    // async function handleFormData(formData: FormData) {
    //     'use server';
    //     console.log(formData.get("name"));
    //     // DB 업데이트 등 서버에서 처리할 로직
    // }

    // 클라이언트 측에서 onSubmit로 제어
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault(); // 브라우저 기본 동작 중지
        const formData = new FormData(e.currentTarget);

        // 서버 액션 함수 호출
        await myAction(formData);

        // 이후 클라이언트 쪽에서 후속 처리
        alert("서버 액션 완료!");
    }

    return (
        // <form action={myAction()} className='border border-dashed border-green-500 p-2 flex flex-col gap-1'>
        <form onSubmit={handleSubmit} className='border border-dashed border-green-500 p-2 flex flex-col gap-1'>
            <input type="text" name="name" placeholder='input..' className='border border-gray-200 p-2 outline-none' />
            <button type="submit" className='border border-gray-300 p-2 cursor-pointer'>제출</button>
        </form>
    );
}
