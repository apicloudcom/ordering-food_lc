import classNames from 'classnames'
import {toCSSLength} from '../../utils/to-css-length'
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

    const style = {};
    style['right'] = right ? toCSSLength(right) : 0
    style['top'] = top ? toCSSLength(top) : 0

    return (
      <div className={`${classPrefix}-wrap`}>
        {children}
        <view
          className={badgeCls}
          style={{backgroundColor: color, ...style}}> 
          {!isDot && content}
        </view>
      </div>
    ) 
  }
}