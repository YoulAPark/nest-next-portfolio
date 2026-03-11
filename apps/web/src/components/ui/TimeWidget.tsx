'use client'

import { useEffect, useState } from 'react'

/**
 * TimeWidget Component
 * Asia/Seoul 기준의 현재 시간을 실시간으로 표시하는 위젯입니다.
 *
 * @returns {JSX.Element} 서울 위치 정보 및 현재 시각을 렌더링하는 JSX 요소
 */
export default function TimeWidget() {
    const [time, setTime] = useState('')

    useEffect(() => {
        /**
         * 현재 서울시간을 포맷하여 상태값에 반영합니다.
         */
        const updateTime = () => {
            const now = new Date()

            const formatter = new Intl.DateTimeFormat('ko-KR', {
                timeZone: 'Asia/Seoul',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false,
            })

            setTime(formatter.format(now))
        }

        updateTime()
        const interval = setInterval(updateTime, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <>
            <p>Seoul, South Korea</p>
            <p>UTC+9 · {time}</p>
        </>
    )
}
