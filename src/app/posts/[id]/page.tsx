// src/app/posts/[id]/page.tsx

import {Metadata} from "next";

export async function generateMetadata({params, searchParams}: {
    params: Promise<{ id: string }>;
    searchParams: Promise<{ title: string }>
}): Promise<Metadata> {
    const {id} = await params;
    const {title} = await searchParams;

    const res = await fetch('https://randomuser.me/api')
    const user = await res.json();

    return {
        title: title,
        description: `description-${id}`,
        authors: [
            {
                name: `${user.results[0].name.title} ${user.results[0].name.first}`
            }
        ]
    };
}

export default function PostPage() {

    return <h2>PostPage</h2>;
}