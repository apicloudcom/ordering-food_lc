declare var avm: any;

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
  export class Button extends avm.Component {
    install = () => {
      console.log("Button")
    }
  
    render = (props: ButtonProps) => {
      return <button>Button TSX {props.type}</button>
    }
  }
  