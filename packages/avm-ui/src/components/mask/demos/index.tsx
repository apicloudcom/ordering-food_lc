import {Mask} from '../mask';
import '../mask.less';
import './index.less';
import {DemoBlock} from "../../../demos";

class Simple extends Component {

  data = {
    visible: false
  }

  toggle = () => {
    this.data.visible = !this.data.visible
  }

  render = () => {
    return (
      <>
        <DemoBlock title='基础用法'>
          <button onClick={() => this.toggle()}>显示遮罩层</button>
          <Mask visible={this.data.visible} onMaskClick={() => this.toggle()}/>
        </DemoBlock>
      </>
    );
  }
};

class WithContent extends Component {

  data = {
    visible: false
  }

  toggle = () => {
    this.data.visible = !this.data.visible
  }

  render = () => {
    return (
      <>
        <DemoBlock title='自定义内容'>
          <Mask visible={this.data.visible} onMaskClick={() => this.toggle()}>
            <div className={'overlayContent'}>内容</div>
          </Mask>
          <button onClick={() => this.toggle()}>显示带内容的遮罩层</button>
        </DemoBlock>
      </>
    );
  }
};

class Thick extends Component {

  data = {
    visible: false
  }

  toggle = () => {
    this.data.visible = !this.data.visible
  }

  render = () => {
    return (
      <>
        <DemoBlock title='遮罩层深色'>
          <Mask
            visible={this.data.visible}
            onMaskClick={() => this.toggle()}
            opacity='thick'/>
          <button onClick={() => this.toggle()}>显示深一些的遮罩层</button>
        </DemoBlock>
      </>
    );
  }
};

class Thin extends Component {

  data = {
    visible: false
  }

  toggle = () => {
    this.data.visible = !this.data.visible
  }

  render = () => {
    return (
      <>
        <DemoBlock title='遮罩层浅色'>
          <Mask
            visible={this.data.visible}
            onMaskClick={() => this.toggle()}
            opacity='thin'/>
          <button onClick={() => this.toggle()}>显示浅一些的遮罩层</button>
        </DemoBlock>
      </>
    );
  }
};

class CustomOpacity extends Component {

  data = {
    visible: false
  }

  toggle = () => {
    this.data.visible = !this.data.visible
  }

  render = () => {
    return (
      <>
        <DemoBlock title='遮罩层自定义透明度'>
          <Mask
            visible={this.data.visible}
            onMaskClick={() => this.toggle()}
            opacity={1}/>
          <button onClick={() => this.toggle()}>显示自定义透明度的遮罩层</button>
        </DemoBlock>
      </>
    );
  }
};

class White extends Component {

  data = {
    visible: false
  }

  toggle = () => {
    this.data.visible = !this.data.visible
  }
  afterShow = () => {
    alert('afterShow')
  }

  render = () => {
    return (
      <>
        <DemoBlock title='白色的遮罩层'>
          <Mask
            visible={this.data.visible}
            onMaskClick={() => this.toggle()}
            afterShow={() => this.afterShow()}
            color='white'/>
          <button onClick={() => this.toggle()}>显示白色的遮罩层</button>
        </DemoBlock>
      </>
    );
  }
};

class Demo extends Component {
  render = () => {
    return (
      <>
        <Simple/>
        <WithContent/>
        <Thick/>
        <Thin/>
        <CustomOpacity/>
        <White/>
      </>
    );
  }
}

avm.render(<Demo/>, "body")