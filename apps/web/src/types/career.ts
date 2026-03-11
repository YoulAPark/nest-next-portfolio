import { Project } from './project'

/**
 * 경력(Career) 데이터의 구조를 정의한다.
 */
export interface Career {
    /**
     * @type {number} id - 경력 고유값
     */
    id: number

    /**
     * @type {string} companyName 회사명
     */
    companyName: string

    /**
     * @type {string} role - 직무
     */
    role: string

    /**
     * @type {string} startDate - 근무시작일
     */
    startDate: string

    /**
     * @type {string} endDate - 근무종료일
     */
    endDate: string

    /**
     * @type {string} duration - 근무기간
     */
    duration: string

    /**
     * @type {string} description - 주요 업무나 성과에 대한 설명
     */
    description: string

    /**
     * @type {Project[]} projects - 프로젝트 목록
     */
    projects: Project[]
}
