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
    const {content, color, children, isDot} = props
    const badgeCls = classNames(classPrefix, {
      [`${classPrefix}--fixed`]: !!children,
      [`${classPrefix}--dot`]: isDot,
    })

    return (
      <div className={`${classPrefix}-wrap`}>
        {children}
        <text className={badgeCls} style={{backgroundColor: color}}>
          {!isDot && content}
        </text>
      </div>
    ) 
  }
}