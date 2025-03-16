// /src/components/Header.tsx
'use client'

export default function Header() {
    return (
        <header>
            <h2 className='font-semibold text-red-400 p-2'>{process.env.NEXT_PUBLIC_SITE_NAME}</h2>
        </header>
    )
}