import styles from './page.module.scss'
import { ArrowRight } from 'lucide-react'
import TimeWidget from '@/components/ui/TimeWidget'

import { Career } from '../types/career'
import { Project } from '../types/project'
import { Tag } from '../types/tag'

/**
 * 백엔드 API로부터 경력 데이터를 가져온다.
 * 개발환경에서는 ISR을 끄고, 운영환경에서는 ISR(1시간)을 동작한다.
 */
async function getCareers(): Promise<Career[]> {
    const time = process.env.NODE_ENV === 'production' ? 3600 : 0
    const url = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'

    // @Todo 다국어기능 사용시 수정필요
    const language = 'ko'
    const response = await fetch(`${url}/careers?lang=${language}`, {
        next: { revalidate: time },
    })

    if (!response.ok) {
        console.error('Career 데이터를 가져오는데 실패하였습니다.')
        return []
    }

    return response.json()
}

export default async function Main() {
    const careers = await getCareers()

    // @Todo 다국어기능 사용시 수정필요
    const lang = 'ko'

    return (
        <div className={styles.main}>
            <section id="hero" className={`${styles.section} ${styles.hero}`}>
                <div className={styles.top}>
                    <div className={styles.topLeft}>
                        <p>YoulA Park</p>
                        <span>Full-Stack Developer · Junior Developer</span>
                    </div>
                    <div className={styles.topRight}>
                        <a
                            href="mailto:urdepone@gmail.com"
                            className={`${styles.link} ${styles.active}`}
                            aria-label="Email"
                        >
                            Email
                        </a>
                        <a
                            href="https://github.com/YoulAPark"
                            className={`${styles.link} ${styles.active}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://velog.io/@ouneno"
                            className={`${styles.link} ${styles.active}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Velog"
                        >
                            Velog
                        </a>
                        <a
                            href="https://linkedin.com/in/youlapark"
                            className={`${styles.link} ${styles.inactive}`}
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
                        <p>
                            백엔드 중심으로 설계하고, 프론트엔드와 인프라까지 연결하는 개발자입니다.
                        </p>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <div className={styles.bottomLeft}>
                        <p className={styles.hoverLang}>
                            <span className={styles.en}>
                                I’m a developer who collaborates from planning to operations.
                                <br />
                                I strive to write code that anyone can understand and continue
                                building on,
                                <br />
                                and I believe in designing better solutions through code reviews and
                                thoughtful discussions.
                            </span>

                            <span className={styles.ko}>
                                기획부터 운영까지 함께 고민하는 개발자입니다.
                                <br />
                                누구나 이해하고 이어갈 수 있는 코드를 만들며, 코드 리뷰와 깊은
                                대화를 통해 더 나은 방향을 함께 설계합니다.
                            </span>
                        </p>
                    </div>
                    <div className={styles.bottomRight}>
                        <TimeWidget />
                    </div>
                </div>
            </section>

            <section id="career" className={`${styles.section} ${styles.career}`}>
                <div className={styles.container}>
                    <h3>Career</h3>
                    {careers.map((career: Career) => (
                        <div key={career.id} className={styles.careerContent}>
                            <div className={styles.companyInfo}>
                                <div className={styles.meta}>
                                    <h3 className={styles.company}>{career.companyName}</h3>
                                    <p className={styles.role}>{career.role}</p>
                                    <p className={styles.period}>
                                        {career.endDate || (lang === 'ko' ? '재직 중' : 'Present')}
                                    </p>
                                </div>
                                <p className={styles.description}>{career.description}</p>
                            </div>

                            <div className={styles.teamExperience}>
                                {career.projects.map((project: Project) => (
                                    <div key={project.id} className={styles.teamBlock}>
                                        <h5>{project.title}</h5>
                                        <span className={styles.teamPeriod}>{project.period}</span>

                                        <div className={styles.tags}>
                                            {project.tags.map((tag) => (
                                                <span key={tag.id}>#{tag.name}</span>
                                            ))}
                                        </div>

                                        <ul className={styles.achievementList}>
                                            {project.achievements.map((line, lineIdx) => (
                                                <li
                                                    key={lineIdx}
                                                    className={styles.achievementItem}
                                                >
                                                    <ArrowRight
                                                        size={16}
                                                        strokeWidth={2}
                                                        className={styles.arrowIcon}
                                                    />
                                                    <span>{line.replace(/^- /, '')}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
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
