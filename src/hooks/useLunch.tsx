import { useLocalStorageState } from 'ahooks'
export interface Lunch {
  index: number
  name: string
}

export const DEAFULT_LUNCH_LIST = [
  { index: 0, name: '小喜田' },
  { index: 1, name: '谷田稻香' },
  { index: 2, name: '麦当劳' },
  { index: 3, name: '胡子大厨' },
  { index: 4, name: '家有好面' },
]
export default function useLunch() {
  const [lunchList, setLunchList] = useLocalStorageState<Lunch[]>(
    'lunch-list',
    DEAFULT_LUNCH_LIST
  )
  // 添加午餐
  const insertLunch = (name: string) => {
    const maxId = Math.max(...lunchList.map((item) => item.index))
    setLunchList((list) =>
      list ? [...list, { index: maxId + 1, name: name }] : []
    )
  }
  // 删除午餐
  const deleteLunch = (index: number) => {
    setLunchList((list) =>
      list ? list.filter((item) => item.index !== index) : []
    )
  }
  // 修改午餐
  const updateLunch = (index: number, name: string) => {
    setLunchList((list) => {
      if (!list) return []
      return list.map((item) => {
        if (item.index === index) {
          item.name = name
        }
        return item
      })
    })
  }
  return {
    lunchList,
    insertLunch,
    deleteLunch,
    updateLunch,
  }
}
