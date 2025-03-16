// src/app/test/page.tsx
// 이 경우, 페이지 전체의 기본 revalidate 값은 20초로 설정되어 있지만, 해당 fetch 호출에 대해서는 10초의 캐싱 주기가 적용됩니다. 따라서 fetch 옵션에 지정한 값이 우선 적용됩니다.
export const revalidate = 10; // 페이지 전체의 기본 ISR 주기: 10초

export default async function Page() {
    // 이 fetch 호출은 별도로 5초의 캐싱 주기를 적용
    const res = await fetch('https://randomuser.me/api/', {
        // next: {
        //     revalidate: 5
        // },
        cache: 'force-cache',
    });
    const data = await res.json();

    return (
        <div>
            <p>서버에서 가져온 데이터: {data.results[0].name.first} {data.results[0].name.last}</p>
        </div>
    )
}