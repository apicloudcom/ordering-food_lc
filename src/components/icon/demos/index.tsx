import {Icon, AppOutline} from "../icon";
import '../icon.less';
import {DemoBlock} from "../../../demos";
import Space from "../../space";

const template =


  <>
    <DemoBlock title='基础用法'>
      <Space wrap style={{fontSize: 36}}>
        <Icon fontSize={30} color={'#9ac200'}/>
        <AppOutline fontSize={72} color={'#3af'}/>
      </Space>
    </DemoBlock>
    <DemoBlock title='大小'>
      <Space wrap align='center'>
        <Icon fontSize={12}/>
        <Icon fontSize={24}/>
        <Icon fontSize={36}/>
        <Icon fontSize={48}/>
      </Space>
    </DemoBlock>
    <DemoBlock title='颜色'>
      <Space wrap style={{fontSize: 36}}>
        <Icon color='#76c6b8'/>
        <Icon color='green'/>
        <Icon color='blue'/>
      </Space>
    </DemoBlock>
  </>

avm.render(template, "body");
