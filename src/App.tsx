import { Button, Dialog, Input, List, Space, Tag } from 'antd-mobile'
import { useState } from 'react'
import useLunch, { Lunch } from './hooks/useLunch'
import { isThisWeek, random, sleep } from './utils'
import './App.scss'
import moment from 'moment'

export default function App() {
  const [result, setResult] = useState<number>(-1)
  const [isEditVisible, setIsEditVisible] = useState(false)
  const [isCreateVisible, setIsCreateVisible] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [currentLunch, setCurrentLunch] = useState<Lunch>()
  const [isLoading, setIsLoading] = useState(false)
  const {
    lunchList,
    insertLunch,
    deleteLunch,
    updateLunch,
    insertTime,
    resetTime,
  } = useLunch()
  // 获取随机数
  const getResult = async () => {
    setIsLoading(true)
    const list = lunchList.filter((lunch) => {
      if (!lunch.lastTime) return true
      if (isThisWeek(lunch.lastTime)) return false
      return true
    })
    const indexList = list.map((item) => item.index)
    let index = random(indexList)
    for (let i = 0; i < 10; i++) {
      index = random(indexList)
      setResult(index)
      await sleep(100)
    }
    insertTime(index, moment().valueOf())
    setIsLoading(false)
  }

  return (
    <div className="App">
      <Space className="header">
        中午吃：{result >= 0 ? lunchList[result].name : '?'}
      </Space>
      <List className="content">
        {lunchList.map((lunch) => {
          return (
            <List.Item
              key={lunch.index}
              extra={
                <Space>
                  <Button
                    onClick={() => {
                      setCurrentLunch(lunch)
                      setInputValue(lunch.name)
                      setIsEditVisible(true)
                    }}
                  >
                    修改
                  </Button>
                  <Button
                    color="danger"
                    onClick={() => deleteLunch(lunch.index)}
                  >
                    删除
                  </Button>
                </Space>
              }
            >
              {lunch.name}
              {lunch.lastTime && isThisWeek(lunch.lastTime) && (
                <Tag round color="success" style={{ marginLeft: 8 }}>
                  本周吃过
                </Tag>
              )}
            </List.Item>
          )
        })}
      </List>
      <Dialog
        visible={isEditVisible}
        actions={[
          {
            key: 'confirm',
            text: '确定',
            onClick: () => {
              if (!inputValue) return
              if (!currentLunch) return
              updateLunch(currentLunch.index, inputValue)
              setIsEditVisible(false)
            },
          },
          {
            key: 'cancel',
            text: '取消',
            onClick: () => setIsEditVisible(false),
          },
        ]}
        content={
          <Space>
            <Input
              placeholder={'请输入餐厅名称'}
              value={inputValue}
              onChange={(value) => setInputValue(value)}
            />
          </Space>
        }
      />
      <Dialog
        visible={isCreateVisible}
        actions={[
          {
            key: 'confirm',
            text: '确定',
            onClick() {
              if (!inputValue) return
              insertLunch(inputValue)
              setIsCreateVisible(false)
            },
          },
          {
            key: 'cancel',
            text: '取消',
            onClick() {
              setIsCreateVisible(false)
            },
          },
        ]}
        content={
          <Space>
            <Input
              placeholder={'请输入餐厅名称'}
              value={inputValue}
              onChange={(value) => setInputValue(value)}
            />
          </Space>
        }
      />
      <Space className="footer">
        <Button onClick={() => setIsCreateVisible(true)} color="success">
          增加选项
        </Button>
        <Button color="primary" onClick={getResult} loading={isLoading}>
          中午吃什么
        </Button>
        <Button color="warning" onClick={resetTime}>
          重置时间
        </Button>
      </Space>
    </div>
  )
}
