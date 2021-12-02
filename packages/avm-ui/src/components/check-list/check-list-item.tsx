import {ListItem} from '../list/list-item'
import classNames from 'classnames'

// import checkedIcon from './checked.svg'

const classPrefix = `adm-check-list-item`

export class CheckListItem extends Component {
  install = () => {
    console.log('CheckListItem!')
  }

  render = props => {
    const active = props.checked ? props.checked.includes(props.value) : false
    const readOnly = props.readOnly

    const extra = (
      <div className={`${classPrefix}-extra`}>
        {active ? (<text>选中</text>) : ''}
      </div>
    )

    return (
      <ListItem
        title={props.title}
        className={classNames({
          [`${classPrefix}-readonly`]: readOnly,
        })}
        description={props.description}
        prefix={props.prefix}
        onClick={() => {
          if (readOnly) return
          if (active) {
            props.uncheck(props.value)
          } else {
            props.check(props.value)
          }
          props.onClick?.(props.value, active)
        }}
        arrow={false}
        clickable={!readOnly}
        extra={extra}
        disabled={props.disabled}>
        {props.label}
      </ListItem>
    )  
  }
}
