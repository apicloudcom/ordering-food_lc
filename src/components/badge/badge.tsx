
  export class Badge extends Component {
    install = () => {
      console.log("Badge !")
    }
  
    render = (props) => {
      return <button onclick={this.test}>Badge TSX !! {props.type}</button>
    }

    test(){
      api.alert({
        msg:"Badge"
      })
    }
  }