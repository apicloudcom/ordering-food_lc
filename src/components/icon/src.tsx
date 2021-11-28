export type IconProps = {
  color?: '',
  fontSize: number
}
const classPrefix = `adm-icon`;

export class Icon extends Component {
  code = 59913;
  render = props => {
    return <text _code={this.code} _name={this.constructor.name}
                 style={{...props}}
                 class={`${classPrefix} ${classPrefix}-font-icon-text`}>
      {String.fromCharCode(this.code)}
    </text>
  }
}
  
  