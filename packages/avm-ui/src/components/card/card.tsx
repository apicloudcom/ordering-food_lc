// import { nodeOrText } from '../../utils/node-or-text'
import classNames from 'classnames'

const classPrefix = `adm-card`

export type CardProps = {
  title?: string
  extra?: string
  headerStyle?: object
  headerClassName?: string
  bodyStyle?: object
  bodyClassName?: string
  onClick?: () => void
  onBodyClick?: () => void
  onHeaderClick?: () => void
}

export class Card extends Component {
  render = props => {
    const renderHeader = () => {
      if (!(props.title || props.extra)) {
        return null
      }

      return (
        <div
          className={classNames(`${classPrefix}-header`, props.headerClassName)}
          style={props.headerStyle}
          onClick={props.onHeaderClick}
        >
          {props.title.children ? props.title : <text className={`${classPrefix}-header-title`}>{props.title}</text>}
          {props.extra ? props.extra : <text>{props.extra}</text>}
        </div>
      )
    }
    const renderBody = () => {
      if (!props.children) {
        return null
      }
      console.log(props.children)
      return (
        <div
          className={classNames(`${classPrefix}-body`, props.bodyClassName)}
          style={props.bodyStyle}
          onClick={props.onBodyClick}
        >
          {props.children}
        </div>
      )
    }
    return (
      <div className={classPrefix} onClick={props.onClick}>
        {renderHeader()}
        {renderBody()}
      </div>
    )
  }
}
