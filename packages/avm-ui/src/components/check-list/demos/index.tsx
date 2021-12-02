import { CheckList } from '../check-list'
import { DemoBlock } from '../../../demos'
const list1 = [
  {value: 'A', label: 'A'},
  {value: 'B', label: 'B'},
  {value: 'C', label: 'C', disabled: true},
  {value: 'D', label: 'D', readOnly: true}
]
const list2 = [
  {value: 'A', label: 'A'},
  {value: 'B', label: 'B'},
  {value: 'C', label: 'C'}
]
const list3 = [
  {value: 'A', label: 'A'},
  {value: 'B', label: 'B'}
]
const template = 
<>
  <DemoBlock title='基础用法' padding='0' border='none'>
    <CheckList defaultValue={['B']} list={list1}/>
  </DemoBlock>
  <DemoBlock title='多选' padding='0' border='none'>
    <CheckList multiple defaultValue={['B', 'C']} list={list2}/>
  </DemoBlock>
  {/* <DemoBlock title='自定义选中图标' padding='0' border='none'>
    <CheckList activeIcon={<SmileOutline/>} defaultValue={['B']} list={list2}/>
  </DemoBlock> */}
  <DemoBlock title='整组只读' padding='0' border='none'>
    <CheckList defaultValue={['B']} readOnly list={list3}/>
  </DemoBlock>
  <DemoBlock title='整组禁用' padding='0' border='none'>
    <CheckList disabled list={list3}/>
  </DemoBlock>
</>

avm.render(template, 'body')
