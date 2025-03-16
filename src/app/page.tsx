// src/app/page.tsx

import Header from "@/components/Header";

export default function Home() {
    console.log(process.env.HELLO);

    return (
        <div>
            <Header/>
            {process.env.HELLO}
            <br/>
            {process.env.MSG}
        </div>
    );
}
