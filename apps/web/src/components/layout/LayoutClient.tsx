"use client";

import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import styles from "./LayoutClient.module.scss";
import SplashScreen from "@/components/overlay/SplashScreen";

export default function LayoutClient({
    children,
}: {
    children: React.ReactNode;
}) {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (!loaded) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "hidden";
        }
    }, [loaded]);

    return (
        <>
            {!loaded && <SplashScreen onFinish={() => setLoaded(true)} />}

            <div id="app" className={`${styles.app} ${loaded ? styles.loaded : styles.hidden}`}>
                <Header />
                <main>{children}</main>
                <Footer />
            </div>
        </>
    );
}