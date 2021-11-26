import {Card} from "../card";
import '../card.less';
import {DemoBlock} from "../../../demos";
import './index.less';

const onClick = () => {
  alert('点击了卡片')
}
const onHeaderClick = () => {
  alert('点击了卡片Header区域')
}

const onBodyClick = () => {
  alert('点击了卡片Body区域')
}

const template =
  <>
    <DemoBlock title='基本用法' background='gray'>
      <Card title='卡片标题' onClick={onClick}>
        卡片内容
      </Card>
    </DemoBlock>
    <DemoBlock title='没有卡片内容' background='gray'>
      <Card title='卡片标题' onClick={onClick}/>
    </DemoBlock>
    <DemoBlock title='没有卡片标题' background='gray'>
      <Card onClick={onClick}>卡片内容</Card>
    </DemoBlock>
    <DemoBlock title='自定义卡片内容' background='gray'>
      <Card
        title={
          <div>
            <h3 style={{marginRight: '4px', color: '#1677ff', fontWeight: 'normal'}}>
              卡片标题
            </h3>
          </div>
        }
        extra={<span>111</span>}
        style={{borderRadius: '16px'}}
        onBodyClick={onBodyClick}
        onHeaderClick={onHeaderClick}
      >
        <div className={'card-content'}>卡片内容</div>
        <div className={'footer'} onClick={e => e.stopPropagation()}>
          123
        </div>
      </Card>
    </DemoBlock>
    <DemoBlock title='自定义卡片样式' background='gray'>
      <Card
        headerStyle={{
          color: '#1677ff',
        }}
        bodyClassName={'customBody'}
        title='卡片标题'
      >
        卡片内容
      </Card>
    </DemoBlock>
  </>
avm.render(template, "body");