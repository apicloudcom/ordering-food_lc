import Button from "../button";

export class Badge extends Component {
  install = () => {
    console.log("Badge !")
  }

  render = (props) => {
    return <view>
      <button onclick={this.test}>Badge TSX !! {props.type}</button>
      <Button>复用Button</Button>
    </view>
  }

  test() {
    api.alert({
      msg: "Badge"
    })
  }
}