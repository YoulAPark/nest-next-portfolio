"use client";

import { useEffect } from "react";
import styles from "./SplashScreen.module.scss";

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
    const text = "Youla-Park";

    useEffect(() => {
        const timer = setTimeout(() => {
            onFinish();
        }, 2300);

        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <div className={styles.overlay}>
            <div className={styles.logo}>
                {text.split("").map((char, index) => (
                    <span
                        key={index}
                        className={`${styles.char} ${char === "Youl" ? styles.accent : ""
                            }`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        {char}
                    </span>
                ))}
            </div>
        </div>
    );
}