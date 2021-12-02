import classNames from 'classnames'
import {mergeProps} from '../../utils/with-default-props'

const classPrefix = `adm-list`

const defaultProps = {
  mode: 'default',
}

export class List extends Component {
  install = () => {
    console.log('List!')
  }

  render = props => {
    props = mergeProps(defaultProps, props);
    return <div className={classNames(classPrefix, `${classPrefix}--${props.mode}`)}>
      <div className={`${classPrefix}--inner`}>{props.children}</div>
    </div>
  }
}
