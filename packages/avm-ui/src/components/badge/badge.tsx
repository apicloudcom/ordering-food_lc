import classNames from 'classnames'
import { mergeProps } from '../../utils/with-default-props'

const classPrefix = `adm-badge`

const defaultProps = {
  color: '#FF411C'
}
export class Badge extends Component {
  install = () => {
    console.log('Badge!')
  }

  render = (props) => {
    props = mergeProps(defaultProps, props)
    const {content, color, children, isDot, right, top} = props
    const badgeCls = classNames(classPrefix, {
      [`${classPrefix}--fixed`]: !!children,
      [`${classPrefix}--dot`]: isDot
    })

    const styleRight = !!right && !!children ? right : 0;
    const styleTop = !!top && !!children ? top : 0;
    return (
      <div className={`${classPrefix}-wrap`}>
        {children}
        <text
          className={badgeCls}
          style={{backgroundColor: color, right: styleRight, top: styleTop}}>
          {!isDot && content}
        </text>
      </div>
    ) 
  }
}