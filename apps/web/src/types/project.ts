import { Tag } from './tag'

/**
 * 프로젝트(Project) 데이터의 구조를 정의한다.
 */
export interface Project {
    /**
     * @property {number} id - 프로젝트 고유값
     */
    id: number

    /**
     * @property {string} title - 프로젝트명
     */
    title: string

    /**
     * @property {string} period - 프로젝트 진행기간
     */
    period: string

    /**
     * @property {string[]} achievements - 프로젝트 내 주요 성과 및 수행 업무 리스트
     */
    achievements: string[]

    /**
     * @property {Tag[]} tags - 기술 스택 태그 객체 배열
     */
    tags: Tag[]

    /**
     * @property {number} [project_id] - 연관 프로젝트 번호
     */
    project_id?: number
}
