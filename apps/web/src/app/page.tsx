export default async function HomePage() {
    const test_json = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/test`, {
        cache: 'no-store',
    })

    const test = await test_json.json()

    return (
        <main>
            <h1>메인 페이지</h1>
            <p>서버상태 : {test.status}</p>
        </main>
    )
}
