/**
 * 기술 스택(Tag) 데이터의 구조를 정의한다.
 */
export interface Tag {
    /**
     * @property {number} id - 태그 고유값
     */
    id: number

    /**
     * @property {string} name - 기술 스택 명칭
     */
    name: string

    /**
     * @property {number} priority - 출력 우선순위 (낮은 숫자일수록 먼저 노출)
     */
    priority: number
}
