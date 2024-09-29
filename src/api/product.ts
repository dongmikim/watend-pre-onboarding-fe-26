import { MOCK_DATA } from '../mock/product'
import { MockData } from '../types/product'

interface ReturnData {
  data: MockData[]
  isEnd: boolean
}

const PER_PAGE = 10

// 페이지는 1부터 시작함
export const getMockData = (pageNum: number): Promise<ReturnData> => {
  return new Promise(resolve => {
    setTimeout(() => {
      const data: MockData[] = MOCK_DATA.slice(PER_PAGE * pageNum, PER_PAGE * (pageNum + 1))
      const isEnd = PER_PAGE * (pageNum + 1) >= MOCK_DATA.length

      resolve({ data, isEnd })
    }, 1500)
  })
}
