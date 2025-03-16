// src/app/my-meta/layout.tsx

import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'My meta layout',
    description: 'My meta layout description',
    authors: [{name: "Next.js Team", url: "https://nextjs.org"}]
}
export default function MyMetaLayout({children}: { children: React.ReactNode }) {
    return (
        <>
            <h2>
                MyMetaLayout
            </h2>
            <div className='mt-2 border border-dashed border-gray-500 p-2 text-center'>
                {children}
            </div>
        </>
    )
}