// src/app/api/hello/route.ts

export async function GET(req: Request) {
    console.log(req.url);
    return new Response('Hello API Routes!', {status: 200});
}