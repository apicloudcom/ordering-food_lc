import classNames from "classnames";
import Loading from "../loading";

const classPrefix = `adm-button`;

export type ButtonProps = {
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

export class Button extends Component {
  install = () => {
    console.log("Button !")
  }

  render = (props: ButtonProps) => {
    const disabled = props.disabled || props.loading
    return <button
      type={props.type}
      onClick={props.onClick}
      className={classNames(
        classPrefix,
        props.color ? `${classPrefix}-${props.color}` : null,
        {
          [`${classPrefix}-block`]: props.block,
          [`${classPrefix}-disabled`]: disabled,
          [`${classPrefix}-fill-outline`]: props.fill === 'outline',
          [`${classPrefix}-fill-none`]: props.fill === 'none',
          [`${classPrefix}-mini`]: props.size === 'mini',
          [`${classPrefix}-small`]: props.size === 'small',
          [`${classPrefix}-large`]: props.size === 'large',
          [`${classPrefix}-loading`]: props.loading,
        }
      )}
      disabled={disabled}
    >
      {props.loading ? (
        <div className={`${classPrefix}-loading-wrapper`}>
          <Loading color='currentColor'/>
          {props.loadingText}
        </div>
      ) : (
        props.children
      )}
    </button>
  }

  test() {
    api.alert({
      msg: "Button"
    })
  }
}
  