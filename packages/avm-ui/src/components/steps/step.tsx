import classNames from 'classnames'

const classPrefix = `adm-step`

export class Step extends Component {
  install = () => {
    console.log('Step')
  }

  render = props => {
    const { title, description, status = 'wait', direction, curIndex, totalLen } = props

    return (
      <div
        className={classNames(
          `${classPrefix}`,
          `${classPrefix}-${direction}`,
          `${classPrefix}-status-${status}`
        )}
      >
        <div className={classNames(
          `${classPrefix}-indicator`,
          `${classPrefix}-${direction}-indicator`)}>
          <div className={classNames(`${classPrefix}-icon-container`)}>
            <span className={classNames(`${classPrefix}-icon-dot`, `${classPrefix}-icon-dot-${status}`)} />
          </div>
          {curIndex !== totalLen - 1 && (<div
            className={classNames(
              `${classPrefix}-line`,
              `${classPrefix}-${direction}-line`,
              `${classPrefix}-line-${status}`
            )}></div>)}
        </div>
        <div className={classNames(
          `${classPrefix}-content`,
          `${classPrefix}-${direction}-content`)}>
          <span className={classNames(
            `${classPrefix}-title`,
            `${classPrefix}-title-${status}`)}>{title}</span>
          {!!description && (
            <span className={classNames(
              `${classPrefix}-description`,
              `${classPrefix}-${direction}-content-description`)}>{description}</span>
          )}
        </div>
      </div>
    )
  }
}
