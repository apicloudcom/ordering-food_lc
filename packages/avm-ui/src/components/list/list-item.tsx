import classNames from 'classnames'

const classPrefix = `adm-list-item`

export class ListItem extends Component {
  install = () => {
    console.log('ListItem!');
  }

  render = props => {
    const clickable = props.clickable ?? !!props.onClick

    const arrow = props.arrow === undefined ? clickable : props.arrow

    const prefixWidth = !!props.prefixWidth ? props.prefixWidth : 'auto';

    const disabledClass = props.disabled && 'list-disabled'

    const content = (
      <div className={`${classPrefix}-content`}>
        {props.prefix && (
          <div className={classNames(`${classPrefix}-content-prefix`, disabledClass)} style={{width: prefixWidth}}>{props.prefix}</div>
        )}
        <div className={classNames(`${classPrefix}-content-main`, disabledClass)}>
          {props.title && (
            <span className={`${classPrefix}-title`}>{props.title}</span>
          )}
          <span className={`${classPrefix}-children`}>{props.children}</span>
          {props.description && (
            <span className={`${classPrefix}-description`}>
              {props.description}
            </span>
          )}
        </div>
        {props.extra && (
          <div className={classNames(`${classPrefix}-content-extra`, disabledClass)}>{props.extra}</div>
        )}
        {arrow && (
          <div className={classNames(`${classPrefix}-content-arrow`, disabledClass)}>
            {arrow === true ? <span>&gt;</span> : arrow}
          </div>
        )}
      </div>
    )
    
    const listItemCls = classNames(
      `${classPrefix}`,
      clickable ? ['adm-plain-anchor'] : [],
      props.disabled && `${classPrefix}-disabled`
    )

    const listItemEvent = props.disabled ? undefined : props.onClick

    return (
      <div className={listItemCls} onClick={listItemEvent}>{content}</div>
    )
  }
}
