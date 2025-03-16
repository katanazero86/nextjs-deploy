// src/app/page.tsx

import Header from "@/components/Header";

export default function Home() {
    console.log(process.env.HELLO);

    return (
        <div>
            <Header/>
            개발 브랜치 테스트
            {process.env.HELLO}
            <br/>
            {process.env.MSG}
        </div>
    );
}
