// 睡眠函数
export async function sleep(time: number) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve('success')
    }, time)
  )
}
// 随机函数
export function random(max: number) {
  return Math.floor(Math.random() * max)
}
