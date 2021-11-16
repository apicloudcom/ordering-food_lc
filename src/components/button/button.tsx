export type ButtonProps = {
    color?: 'default' | 'primary' | 'success' | 'warning' | 'danger'
    fill?: 'solid' | 'outline' | 'none'
    size?: 'mini' | 'small' | 'middle' | 'large'
    block?: boolean
    loading?: boolean
    loadingText?: string
    disabled?: boolean
    type?: 'submit' | 'reset' | 'button'
  } 
  export class Button extends Component {
    install = () => {
      console.log("Button !")
    }
  
    render = (props: ButtonProps) => {
      return <button onclick={this.test}>Button TSX !! {props.type}</button>
    }

    test(){
      api.alert({
        msg:"ggg"
      })
    }
  }
  