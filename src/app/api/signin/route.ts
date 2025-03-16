// src/app/api/signin/route.ts
// POST /api/signin
export async function POST(request: Request) {
    try {
        // 클라이언트에서 전송된 FormData 추출
        const formData = await request.formData();
        const userId = formData.get('userId'); // input name="userId"
        const userPassword = formData.get('userPassword'); // input name="userPassword"

        // 필수값 체크
        if (!userId || !userPassword) {
            return Response.json({ success: false, error: "Missing credentials" }, { status: 400 });
        }

        // (예제) 간단한 인증 로직 (실제로는 DB 확인 필요)
        if (userId === "admin" && userPassword === "1234") {
            return Response.json({ success: true, message: `Welcome, ${userId}!` }, { status: 200 });
        } else {
            return Response.json({ success: false, error: "Invalid credentials" }, { status: 401 });
        }
    } catch (error) {
        console.error(error);
        return Response.json({ success: false, error: "Server error" }, { status: 500 });
    }
}
