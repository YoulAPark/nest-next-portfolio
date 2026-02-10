import Link from 'next/link'
import styles from './Footer.module.scss'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <nav>© {new Date().getFullYear()} parkyoula. All rights reserved.</nav>
        </footer>
    )
}
