// src/app/api/movies/[movieId]/route.ts
// GET /api/movies/123?msg=hello
interface Context {
    params: Promise<{
        movieId: string;
    }>
}

export async function GET(request: Request, context: Context) {
    // 쿼리 스트링 추출
    const url = new URL(request.url);
    const searchParams = new URLSearchParams(url.search);
    console.log(searchParams);
    const msg = searchParams.get('msg') || '';

    // Path 파라미터 추출
    const {movieId} = await context.params;
    console.log(context);

    return Response.json({
        msg,
        movieId
    }, {
        status: 200,
    });
}