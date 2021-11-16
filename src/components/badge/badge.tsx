
  export class Badge extends Component {
    install = () => {
      console.log("Badge !")
    }
  
    render = (props) => {
      return <Badge onclick={this.test}>Badge TSX !! {props.type}</Badge>
    }

    test(){
      api.alert({
        msg:"ggg"
      })
    }
  }