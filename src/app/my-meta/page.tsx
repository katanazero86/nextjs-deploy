// src/app/my-meta/page.tsx

import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'My meta',
    description: 'My meta description',
}
export default function MyMetaPage() {
    return (
        <h2>
            MyMetaPage
        </h2>
    )
}