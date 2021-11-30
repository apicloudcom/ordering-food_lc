import { DemoBlock } from '../../../demos'
import { PageIndicator } from '../page-indicator'

import '../page-indicator.less'

const template = 
<>
  <DemoBlock title='基础用法'>
    <PageIndicator total={4} current={0} />
  </DemoBlock>
  <DemoBlock title='白色' background='rgb(212 212 212)'>
    <PageIndicator total={4} current={0} color='white' />
  </DemoBlock>
  <DemoBlock title='竖直方向'>
    <PageIndicator total={4} current={0} direction='vertical'/>
  </DemoBlock>
  <DemoBlock title='自定义颜色和大小'>
    <PageIndicator
      total={4}
      current={0}
      dotColor={"rgba(0, 0, 0, 0.4)"}
      activeDotColor={"#ffc0cb"}
      dotSize={"10px"}
      activeDotSize={"30px"}
      dotBorderRadius={"50%"}
      activeDotBorderRadius={"15px"}
      dotSpacing={"8px"}
    />
  </DemoBlock>
</>

avm.render(template, 'body')