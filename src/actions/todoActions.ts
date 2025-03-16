// src/actions/todoActions.ts
'use server'

import {revalidatePath} from "next/cache";

export const createTodoAction = async (formData: FormData) => {
    const content = formData.get('content');
    if (content) {
        try {
            const res = await fetch('http://localhost:8080/todos', {
                method: 'POST',
                body: JSON.stringify({
                    content,
                    completed: false,
                }),
            });
            if (res.ok) {
                console.log('success');
                revalidatePath('/todos'); // 캐시 무효화
            }
        } catch (error) {
            console.error(error);
        }
    } else {
        console.error('createTodoAction: 내용이 전달되지 않았습니다.')
    }
}