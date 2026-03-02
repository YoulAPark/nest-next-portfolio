import Link from 'next/link'
import styles from './page.module.scss'
import { ArrowRight } from 'lucide-react'
import TimeWidget from "@/components/ui/TimeWidget"

export default async function Main() {
    // `${process.env.NEXT_PUBLIC_API_URL}/test`
    const response = await fetch(`http://localhost:3001/`, {
        cache: 'no-store',
    })
    const data = await response.json()

    return (
        <div className={styles.main}>
            <section id="hero" className={`${styles.section} ${styles.hero}`}>
                <div className={styles.top}>
                    <div className={styles.topLeft}>
                        <p>YoulA Park</p>
                        <span>Full-Stack Developer · Junior Developer</span>
                    </div>
                    <div className={styles.topRight}>
                        <a href="mailto:urdepone@gmail.com" className={`${styles.link} ${styles.active}`}
                            aria-label="Email" >Email</a>
                        <a href="https://github.com/YoulAPark" className={`${styles.link} ${styles.active}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub">GitHub</a>
                        <a href="https://velog.io/@ouneno" className={`${styles.link} ${styles.active}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Velog">Velog</a>
                        <a
                            href="https://linkedin.com/in/youlapark" className={`${styles.link} ${styles.inactive}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>

                <div className={styles.middle}>
                    <div className={styles.center}>
                        <h2>Full-stack Developer</h2>
                        <p>백엔드 중심으로 설계하고, 프론트엔드와 인프라까지 연결하는 개발자입니다.</p>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <div className={styles.bottomLeft}>
                        <p className={styles.hoverLang}>
                            <span className={styles.en}>
                                I’m a developer who collaborates from planning to operations.<br />
                                I strive to write code that anyone can understand and continue building on,<br />
                                and I believe in designing better solutions through code reviews and thoughtful discussions.
                            </span>

                            <span className={styles.ko}>
                                기획부터 운영까지 함께 고민하는 개발자입니다.<br />
                                누구나 이해하고 이어갈 수 있는 코드를 만들며,
                                코드 리뷰와 깊은 대화를 통해 더 나은 방향을 함께 설계합니다.
                            </span>
                        </p>
                    </div>
                    <div className={styles.bottomRight}><TimeWidget /></div>
                </div>
            </section >

            <section id="career" className={`${styles.section} ${styles.career}`}>
                <div className={styles.container}>
                    <h3>Career</h3>
                    <div className={styles.careerContent}>
                        <div className={styles.companyInfo}>
                            <div className={styles.meta}>
                                <h3 className={styles.company}>UBION</h3>
                                <p className={styles.role}>Full-Stack Developer</p>
                                <p className={styles.period}>2023.07 - 2024.11</p>
                            </div>
                            <p className={styles.description}>
                                B2B 제품 개발 전반을 담당하며,
                                기능 고도화·데이터 정합성 강화·운영 자동화를 통해 서비스 품질 향상에 기여했습니다.
                            </p>
                        </div>

                        <div className={styles.teamExperience}>
                            <div className={styles.teamBlock}>
                                <h5>사내 계약 정산 통합 관리 플랫폼 구축 및 개발/운영</h5>
                                <span className={styles.teamPeriod}>2025.01 - 2025.07</span>
                                <div className={styles.tags}>
                                    <span>#PHP</span>
                                    <span>#TypeScript</span>
                                    <span>#MySQL</span>
                                    <span>#SCSS</span>
                                </div>
                                <ul>
                                    <li><ArrowRight size={16} strokeWidth={2} />세일즈포스 계약 모듈을 대체하는 자체 계약·수금·정산 시스템 설계 및 개발</li>
                                    <li><ArrowRight size={16} strokeWidth={2} />계약–수금–회계 배분 흐름을 반영한 정산 로직 및 데이터 모델 설계</li>
                                    <li><ArrowRight size={16} strokeWidth={2} />수금 금액 기반 회계 배분 및 검증 로직 구현으로 데이터 정합성 강화</li>
                                    <li><ArrowRight size={16} strokeWidth={2} />정산 엑셀 자동화 기능 구현으로 수기 보고 시간을 수십 분 → 수 분 이내로 단축</li>
                                </ul>
                            </div>

                            <div className={styles.teamBlock}>
                                <h5>삼성DScovery 서비스데스크 고도화</h5>
                                <span className={styles.teamPeriod}>2024.09 - 2024.10</span>
                                <div className={styles.tags}>
                                    <span>#PHP</span>
                                    <span>#TypeScript</span>
                                    <span>#SCSS</span>
                                    <span>#MySQL</span>
                                    <span>#ChartJS</span>
                                </div>
                                <ul>
                                    <li><ArrowRight size={16} strokeWidth={2} />상태 변경 이벤트 기반 알림톡 자동 발송 및 결과 저장 구조 구현</li>
                                    <li><ArrowRight size={16} strokeWidth={2} />히스토리(댓글/상태변경) 데이터 구조 개선으로 조회 성능 및 가독성 향상</li>
                                    <li><ArrowRight size={16} strokeWidth={2} />Chart.js 기반 운영 현황 대시보드 구현</li>
                                    <li><ArrowRight size={16} strokeWidth={2} />메시지 전송 로직 개선으로 운영팀 업무 약 30% 단축</li>
                                </ul>
                            </div>

                            <div className={styles.teamBlock}>
                                <h5>서포트 사이트 리뉴얼 및 채널 탭 UI 개선</h5>
                                <span className={styles.teamPeriod}>2024.02 - 2024.02</span>
                                <div className={styles.tags}>
                                    <span>#PHP</span>
                                    <span>#JavaScript</span>
                                    <span>#CSS</span>
                                    <span>#Figma</span>
                                </div>
                                <ul>
                                    <li><ArrowRight size={16} strokeWidth={2} />리브랜딩 방향에 맞춘 컬러 시스템 및 아이콘 개선</li>
                                    <li><ArrowRight size={16} strokeWidth={2} />지식채널 탭 썸네일 Hover 애니메이션 및 타이포그래피 개선</li>
                                    <li><ArrowRight size={16} strokeWidth={2} />반응형 UI 적용으로 PC·태블릿·모바일 환경 일관성 확보</li>
                                </ul>
                            </div>

                            <div className={styles.teamBlock}>
                                <h5>코스모스 브랜드 웹사이트 리뉴얼 및 운영</h5>
                                <span className={styles.teamPeriod}>2024.01 - 2025.07</span>
                                <div className={styles.tags}>
                                    <span>#PHP</span>
                                    <span>#JavaScript</span>
                                    <span>#SCSS</span>
                                    <span>#GA4</span>
                                    <span>#Figma</span>
                                </div>
                                <ul>
                                    <li><ArrowRight size={16} strokeWidth={2} />총 11개 페이지 UI 구현 및 퍼블리싱 담당</li>
                                    <li><ArrowRight size={16} strokeWidth={2} />UI 전환 및 인터랙션 애니메이션 적용으로 사용자 경험 개선</li>
                                    <li><ArrowRight size={16} strokeWidth={2} />GA4 기준 사이트 유입률 약 +127% 증가</li>
                                    <li><ArrowRight size={16} strokeWidth={2} />Contact 기능 도입 이후 실제 솔루션 문의 지속 발생</li>
                                </ul>
                            </div>

                            <div className={styles.teamBlock}>
                                <h5>코스모스 API 개발자 포털 및 서비스 시스템 개발/운영</h5>
                                <span className={styles.teamPeriod}>2023.11 - 2024.09</span>
                                <div className={styles.tags}>
                                    <span>#Laravel</span>
                                    <span>#PHP</span>
                                    <span>#Docker</span>
                                    <span>#GitLabCI</span>
                                    <span>#Swagger</span>
                                    <span>#MySQL</span>
                                </div>
                                <ul>
                                    <li><ArrowRight size={16} strokeWidth={2} />Docker 기반 개발 환경 구축으로 환경 차이 최소화</li>
                                    <li><ArrowRight size={16} strokeWidth={2} />GitLab CI/CD 기반 브랜치 자동 배포 프로세스 구축</li>
                                    <li><ArrowRight size={16} strokeWidth={2} />API 설명·체험·신청·권한 관리 기능을 포함한 개발자 포털 구현</li>
                                    <li><ArrowRight size={16} strokeWidth={2} />Swagger UI 기반 API 명세 작성 및 테스트 체계 정립</li>
                                </ul>
                            </div>

                            <div className={styles.teamBlock}>
                                <h5>K-MOOC 서비스 모니터링 및 장애 알림 시스템 구축</h5>
                                <span className={styles.teamPeriod}>2023.11 - 2025.07</span>
                                <div className={styles.tags}>
                                    <span>#NodeJS</span>
                                    <span>#PM2</span>
                                    <span>#Linux</span>
                                </div>
                                <ul>
                                    <li><ArrowRight size={16} strokeWidth={2} />장애 발생 시 즉시 알림 체계 구축으로 대응 시간 단축</li>
                                    <li><ArrowRight size={16} strokeWidth={2} />운영 환경 지속 모니터링 및 로직 개선으로 안정성 강화</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className={styles.careerContent}>
                        <div className={styles.companyInfo}>
                            <div className={styles.meta}>
                                <h3 className={styles.company}>(주)메가소프트</h3>
                                <p className={styles.role}>Full-Stack Developer</p>
                                <p className={styles.period}>2022.10 - 2023.07</p>
                            </div>
                            <p className={styles.description}>
                                B2B 제품 개발 전반을 담당하며,
                                기능 고도화·데이터 정합성 강화·운영 자동화를 통해 서비스 품질 향상에 기여했습니다.
                            </p>
                        </div>

                        <div className={styles.teamExperience}>
                            <div className={styles.teamBlock}>
                                <h5>사내 인사/근태 관리 시스템 개발 및 운영</h5>
                                <span className={styles.teamPeriod}>2023.01 - 2023.07</span>
                                <div className={styles.tags}>
                                    <span>#Java</span>
                                    <span>#Spring</span>
                                    <span>#JSP</span>
                                    <span>#Oracle</span>
                                    <span>#MySQL</span>
                                </div>
                                <ul>
                                    <li><ArrowRight size={16} strokeWidth={2} />직원 기본 정보 관리 화면과 서버 연동 기능을 구현</li>
                                    <li><ArrowRight size={16} strokeWidth={2} />연차, 휴가 신청 및 관리자 승인/반려 프로세스를 구현하여 근태 처리 흐름을 시스템화</li>
                                    <li><ArrowRight size={16} strokeWidth={2} />관리자/일반 사용자 권한에 따른 화면 및 기능 접근 제어를 적용하여 운영 편의성 개선</li>
                                    <li><ArrowRight size={16} strokeWidth={2} />운영 중 발생한 오류 수정 및 요구사항 변경에 따른 기능 개선 작업 수행</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" className={`${styles.section} ${styles.about}`}>
                <p>about</p>
            </section>
            <section id="contact" className={`${styles.section} ${styles.contact}`}>
                <p>contact</p>
            </section>
        </div>
    )
}