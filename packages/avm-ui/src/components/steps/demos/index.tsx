import { Steps } from '../steps'
import { DemoBlock } from '../../../demos'

import '../steps.less'

const stepList1 = [
  {title: '标题1', description: '描述1'},
  {title: '标题2', description: '描述2'},
  {title: '标题3', description: '描述3'}
]

const stepList2 = [
  {title: '第一步'},
  {title: '第二步'},
  {title: '第三步', status: 'error'}
]

const stepList3 = [
  {title: '填写机构信息',  status: 'process'},
  {title: '签约机构', status: 'wait'},
  {title: '关联服务区', status: 'wait'}
]

const stepList4 = [
  {title: '填写机构信息', description: '完成时间：2020-12-01 12:30', status: 'finish'},
  {title: '签约机构', description: '完成时间：2020-12-01 12:33', status: 'finish'},
  {title: '关联服务区', description: '完成时间：2020-12-01 12:36', status: 'finish'},
  {title: '审批失败', status: 'error'}
]

const template = (
  <>
    <DemoBlock title='横向'>
      <Steps current={1} list={stepList1}/>
    </DemoBlock>

    <DemoBlock title='横向（失败状态）'>
      <Steps current={2} list={stepList2}/>
    </DemoBlock>

    <DemoBlock title='纵向'>
      <Steps direction='vertical' list={stepList3}/>
    </DemoBlock>

    <DemoBlock title='纵向（失败状态）'>
      <Steps direction='vertical' list={stepList4}/>
    </DemoBlock>
  </>
)

avm.render(template, 'body')