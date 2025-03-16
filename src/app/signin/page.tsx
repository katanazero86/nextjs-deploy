// src/app/signin/page.tsx
'use client';

export default function Signin() {
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // 기본 폼 제출 방지

        // FormData 객체 생성
        const formData = new FormData(event.currentTarget); // 인자로 이벤트가 발생한 form 요소를 주입.

        // 서버로 전송
        const response = await fetch('/api/signin', {
            method: 'POST',
            body: formData, // FormData 객체 그대로 전송
        });

        // 응답 처리
        const result = await response.json();
        console.log(result); // 콘솔에 응답 출력 (개발용)
    };

    return (
        <div className='border border-indigo-500 border-dashed p-2'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
                <input name="userId" placeholder="User ID" required/>
                <input name="userPassword" type="password" placeholder="Password" required/>
                <button type="submit" className='cursor-pointer'>Sign In</button>
            </form>
        </div>
    );
}
