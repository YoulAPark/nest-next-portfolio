"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Header.module.scss";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const hero = document.getElementById("hero");

        const observer = new IntersectionObserver(
            ([entry]) => {
                setScrolled(!entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (hero) observer.observe(hero);

        return () => {
            if (hero) observer.unobserve(hero);
        };
    }, []);

    return (
        <header
            className={`${styles.header} ${scrolled ? styles.solid : styles.transparent}`}
        >
            <div data-role="navigation">
                <div>
                    <h1 lang="en">Youla-Park</h1>

                    <nav className={styles.nav}>
                        <ul className={styles.menu}>
                            {!scrolled ? (
                                <>
                                    <li><Link className={styles.link} href="/">Home</Link></li>
                                    <li><Link className={styles.link} href="/about">About</Link></li>
                                    <li><Link className={styles.link} href="/portfolio">Portfolio</Link></li>
                                    <li><Link className={styles.link} href="/blog">Blog</Link></li>
                                    <li><Link className={styles.link} href="/contact">Contact</Link></li>
                                </>
                            ) : (
                                <>
                                    <li><a className={styles.link} href="https://github.com/youlAPark" target="_blank">GitHub</a></li>
                                    <li><a className={styles.link} href="https://velog.io/@ouneno" target="_blank">Blog</a></li>
                                    <li><a className={styles.link} href="mailto:urdepone@gmail.com">Email</a></li>
                                </>
                            )}
                        </ul>
                    </nav>

                </div>
            </div>
        </header>
    );
}