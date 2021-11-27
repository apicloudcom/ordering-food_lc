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

    const content = (
      <div className={`${classPrefix}-content`}>
        {props.prefix && (
          <div className={`${classPrefix}-content-prefix`} style={{width: prefixWidth}}>{props.prefix}</div>
        )}
        <div className={`${classPrefix}-content-main`}>
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
          <div className={`${classPrefix}-content-extra`}>{props.extra}</div>
        )}
        {arrow && (
          <div className={`${classPrefix}-content-arrow`}>
            {arrow === true ? <span>右箭头</span> : arrow}
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

    const element  = clickable
      ? (<a className={listItemCls} onClick={listItemEvent}>{content}</a>)
      : (<div className={listItemCls} onClick={listItemEvent}>{content}</div>)

    return element
  }
}
