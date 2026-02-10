import type { Metadata } from 'next'
import './globals.scss'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Font from 'next/font/local'

export const metadata: Metadata = {
    title: {
        default: 'About | ParkYoula',
        template: '%s | ParkYoula',
    },
    description: 'Full-stack Developer Portfolio & Tech Blog Website of ParkYoula',
}
const Future = Font({
    src: [
        {
            path: '../../public/fonts/Future-Edge/Future Edge.ttf',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Future-Edge/Future Edge Italic.ttf',
            style: 'italic',
        },
    ],
    variable: '--font-future',
    display: 'swap',
})

const Nanum = Font({
    src: [
        {
            path: '../../public/fonts/NanumSquare/NanumSquare_acL.ttf',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../../public/fonts/NanumSquare/NanumSquareR.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/NanumSquare/NanumSquare_acR.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../public/fonts/NanumSquare/NanumSquareB.ttf',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../../public/fonts/NanumSquare/NanumSquare_acB.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../public/fonts/NanumSquare/NanumSquareEB.ttf',
            weight: '800',
            style: 'normal',
        },
    ],
    variable: '--font-nanum',
    display: 'swap',
})

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="ko">
            <body className={`${Nanum.variable} ${Future.variable}`}>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}
