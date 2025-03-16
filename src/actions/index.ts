// src/actions/index.ts
'use server'

export const myAction = async (formData:FormData) => {
    console.log('myAction', formData.get("name"));
};