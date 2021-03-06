import { useLocalStorageState } from 'ahooks'
export interface Lunch {
  index: number
  name: string
  lastTime?: number
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
  // 获取午餐
  const getLunchName = (index: number) => {
    return lunchList.find((item) => item.index === index)?.name ?? '?'
  }
  // 添加时间
  const insertTime = (index: number, time: number) => {
    setLunchList((list) => {
      if (!list) return []
      return list.map((item) => {
        if (item.index === index) return { ...item, lastTime: time }
        else return item
      })
    })
  }
  // 重置时间

  const resetTime = () => {
    setLunchList((list) => {
      if (!list) return []
      return list.map((item) => {
        const { index, name } = item
        return { index, name }
      })
    })
  }

  return {
    lunchList,
    insertLunch,
    deleteLunch,
    updateLunch,
    getLunchName,
    insertTime,
    resetTime,
  }
}
