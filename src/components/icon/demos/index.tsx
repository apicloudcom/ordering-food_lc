import {Icon, APICloudLogo} from "../icon";
import '../icon.less';
import {DemoBlock} from "../../../demos";
import Space from "../../space";

const template =

  <>
    <DemoBlock title='基础用法'>
      <Space wrap style={{fontSize: 36}}>
        <Icon fontSize={30} color={'#3af'}/>
        <APICloudLogo fontSize={72} color={'#9ac200'}/>
      </Space>
    </DemoBlock>

  </>

avm.render(template, "body");
