import { NoticeBar } from '../notice-bar'
import {Space} from '../../space/space'
import { DemoBlock } from '../../../demos'
import '../notice-bar.less'

const template =
<>
  <DemoBlock
    title='四种配色'
    padding='0'
    border='none'
    background='transparent'
  >
    <Space block direction='vertical'>
      <NoticeBar content='默认' color='default'/>
      <NoticeBar content='警告' color='alert'/>
      <NoticeBar content='错误' color='error' />
      <NoticeBar content='信息' color='info' />
      <NoticeBar content='自定义颜色' color='自定义颜色' bgColor="#f0f" textColor="#000" borderColor="#0f0"/>
    </Space>
  </DemoBlock>
  <DemoBlock title='可关闭' padding='0' border='none'>
    <NoticeBar content='这条通知可以关闭' color='alert' closeable />
  </DemoBlock>
  <DemoBlock
    title='自定义'
    padding='0'
    border='none'
    background='transparent'
  >
    <Space block direction='vertical'>
      <NoticeBar
        icon={<span>icon占位</span>}
        content={'自定义图标'}
        closeable
      />
      {/* <NoticeBar
        extra={
          <Space>
            <span>查看详情</span>
          </Space>
        }
        content={'自定义右侧功能区'}
        color='alert'
      /> */}
    </Space>
  </DemoBlock>
</>

avm.render(template, "body");
