import moment from 'moment'

// 睡眠函数
export async function sleep(time: number) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve('success')
    }, time)
  )
}
// 随机函数
export function random(list: number[]) {
  if (list.length === 0) return 0
  const index = Math.floor(Math.random() * list.length)
  return list[index]
}
// 判断是否在本周内
export function isThisWeek(time: number) {
  const lastSunday = moment().subtract(moment().weekday(), 'days')
  return moment(time).isAfter(lastSunday, 'days')
}
