import classNames from 'classnames'

const classPrefix = `adm-space`

export type SpaceProps = {
  direction?: 'horizontal' | 'vertical'
  align?: 'start' | 'end' | 'center' | 'baseline'
  justify?:
    | 'start'
    | 'end'
    | 'center'
    | 'between'
    | 'around'
    | 'evenly'
    | 'stretch'
  wrap?: boolean
  block?: boolean
}

// const defaultProps = {
//   direction: 'horizontal',
// }

export class Space extends Component {
  render = props => {
    const {direction = 'horizontal'} = props
    return <div
      className={classNames(classPrefix, {
        [`${classPrefix}-wrap`]: props.wrap,
        [`${classPrefix}-block`]: props.block,
        [`${classPrefix}-${direction}`]: true,
        [`${classPrefix}-align-${props.align}`]: !!props.align,
        [`${classPrefix}-justify-${props.justify}`]: !!props.justify,
      })}
    >
      {props.children.map(child => {
        return (
          child !== null &&
          child !== undefined && (
            <div className={`${classPrefix}-item`}>{child}</div>
          )
        )
      })}
    </div>
  }
}
