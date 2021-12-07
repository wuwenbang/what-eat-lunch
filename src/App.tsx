import { Button, Dialog, Input, List, Space } from 'antd-mobile'
import { useState } from 'react'
import useLunch, { Lunch } from './hooks/useLunch'
import { random, sleep } from './utils'
import './App.scss'


export default function App() {
  const [result, setResult] = useState<string>('?')
  const [isEditVisible, setIsEditVisible] = useState(false)
  const [isCreateVisible, setIsCreateVisible] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [currentLunch, setCurrentLunch] = useState<Lunch>()
  const { lunchList, insertLunch, deleteLunch, updateLunch } = useLunch()
  // 获取随机数
  const getResult = async () => {
    for (let i = 0; i < 10; i++) {
      const index = random(lunchList.length)
      setResult(lunchList[index].name)
      await sleep(100)
    }
  }

  return (
    <div className="App">
      <Space className="top">中午吃：{result}</Space>
      <List>
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
      <Space className="bottom">
        <Button
          onClick={() => {
            setIsCreateVisible(true)
          }}
          color="success"
        >
          增加选项
        </Button>
        <Button color="primary" onClick={getResult}>
          中午吃什么
        </Button>
      </Space>
    </div>
  )
}
