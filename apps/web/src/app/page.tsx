import Link from 'next/link'
import styles from './page.module.scss'

export default async function Main() {
    // `${process.env.NEXT_PUBLIC_API_URL}/test`
    const response = await fetch(`http://localhost:3001/`, {
        cache: 'no-store',
    })
    const data = await response.json()
    
    return (
        <div className={styles.main}>
            <section data-role="left">
                <p>메인 페이지</p>
                <p>{JSON.stringify(data)}</p>
            </section>

            <section data-role="right">
                <p>오른쪽!</p>
                <p>{JSON.stringify(data)}</p>
            </section>
        </div>
    )
}