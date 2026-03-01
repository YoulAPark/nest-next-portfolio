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
            <section id="hero" className={`${styles.section} ${styles.hero}`}>
                <h2>Full-stack Developer</h2>
                <p>백엔드 중심으로 설계하고, 프론트엔드와 인프라까지 연결하는 개발자입니다.</p>
            </section>
            <section id="about" className={`${styles.section} ${styles.about}`}>
                <p>about</p>
            </section>
            <section id="projects" className={`${styles.section} ${styles.projects}`}>
                <p>projects</p>
            </section>
            <section id="contact" className={`${styles.section} ${styles.contact}`}>
                <p>contact</p>
            </section>
        </div>
    )
}