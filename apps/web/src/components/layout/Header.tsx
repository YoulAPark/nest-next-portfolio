import Link from 'next/link'
import styles from './Header.module.scss'

export default function Header() {
    return (
        <header className={styles.header}>
            <div data-role="navigation">
                <div>
                    <h1 lang="en">YoulaPark</h1>
                    <nav className={styles.nav}>
                        <ul className={styles.menu}>
                            <li>
                                <Link className={styles.link} href="/">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.link} href="/about">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.link} href="/portfolio">
                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.link} href="/blog">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.link} href="/contact">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
