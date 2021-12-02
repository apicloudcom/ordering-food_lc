import {Badge} from "../badge";
import './index.less';
import {DemoBlock} from "../../../demos";
import Space from "../../space";
import '../badge.less'
import CFImg from  './img/cf.svg'
const template =
  <>
    <DemoBlock title='基本用法'>
      <Space>
        <Badge color='#108ee9' content='5'>
          <div className="box"/>
        </Badge>
        <Badge content='新'>
          <div className="box"/>
        </Badge>
        <Badge content='更新'>
          <div className="box"/>
        </Badge>
        <Badge>
          <div className="box"/>
        </Badge>
      </Space>
    </DemoBlock>
    <DemoBlock title='自定义颜色和偏移量'>
      <Space style={{ '--gap': '24px' }}>
        <Badge
          color='#108ee9'
          isDot={true}
          right='100%'
          top='100%'>
          <div className="box"/>
        </Badge>
        <Badge
          color='#87d068'
          isDot={true}
          right="100%"
        >
          <div className="box"/>
        </Badge>
        <Badge isDot={true}>
          <div className="box"/>
        </Badge>
        <Badge color='orange' isDot={true} top="100%">
          <div className="box"/>
        </Badge>
      </Space>
    </DemoBlock>
    <DemoBlock title='自定义徽标内容'>
      <Space>
        <Badge content={<img src={CFImg}></img>}>
          <div className="box"/>
        </Badge>
      </Space>
    </DemoBlock>
    <DemoBlock title='独立展示'>
      <Space>
        <Badge content='99+'/>
        <Badge content='新消息!'/>
      </Space>
    </DemoBlock>
  </>

avm.render(template, "body");
