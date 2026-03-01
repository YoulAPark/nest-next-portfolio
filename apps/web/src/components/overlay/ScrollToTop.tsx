'use client'

import { useEffect, useState } from 'react'
import styles from "./ScrollToTop.module.scss";
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
    const [showButton, setShowButton] = useState(false)

    /**
    * 스크롤 이벤트 핸들러
    * 현재 스크롤 위치를 기반으로 버튼을 노출시킨다.
    */
    const handleScroll = () => {
        setShowButton(window.scrollY > 300)
    }

    /**
     * 최상단 이동 함수
     * 버튼 클릭시 부드럽게 화면의 최상단으로 이동한다.
     */
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <button
            onClick={scrollToTop}
            className={`${styles.button} ${showButton ? styles.show : styles.hide}`}
            aria-label="맨 위로 이동"
        >
            <ArrowUp size={30} />
        </button>
    )
}