// app/api/user/route.ts
export async function GET(request: Request) {
    return new Response(JSON.stringify({ user: "John Doe" }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
    });
}

export async function POST(request: Request) {
    const data = await request.json();
    return new Response(JSON.stringify({ created: data }), {
        status: 201,
        headers: { "Content-Type": "application/json" }
    });
}

export async function PUT(request: Request) {
    try {
        const data = await request.json(); // JSON 데이터 받기

        return new Response(JSON.stringify({ updated: data }), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        });
    } catch (error) {
        console.error(error);
        // static 메서드 형식 사용
        return Response.json({ error: "Invalid JSON format" }, {
            status: 400,
        });
    }
}

export async function DELETE(request: Request) {
    try {
        const data = await request.json(); // JSON 데이터 받기

        return new Response(JSON.stringify({ deleted: data }), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        });
    } catch (error) {
        console.error(error);
        // static 메서드 형식 사용
        return Response.json({ error: "Invalid JSON format" }, {
            status: 400,
        });
    }
}