export type IconProps = {
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger'
  fill?: 'solid' | 'outline' | 'none'
  size?: 'mini' | 'small' | 'middle' | 'large'
  block?: boolean
  loading?: boolean
  loadingText?: string
  disabled?: boolean
  type?: 'submit' | 'reset' | 'button',
  onClick: void,
  children: any
}

const classPrefix = `adm-icon`;


export class Icon extends Component {

  code = 59905;

  install = () => {
    console.log("Button !")
  }

  render = props => {
    return <text
      style={{...props}}
      class={`${classPrefix} ${classPrefix}-font-icon-text`}>{String.fromCharCode(this.code)}</text>
  }
}

export class APICloudLogo extends Icon {
  code = 0xea09;
}