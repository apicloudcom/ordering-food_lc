import classNames from 'classnames'
import { mergeProps } from '../../utils/with-default-props'

const classPrefix = `adm-page-indicator`

export type PageIndicatorProps = {
  total: number
  current: number
  direction?: 'horizontal' | 'vertical'
  color?: 'primary' | 'white'
}

const defaultProps = {
  color: 'primary',
  direction: 'horizontal',
}

export class PageIndicator extends Component {
  install = () => {
    console.log('PageIndicator!')
  }

  render = props => {
    props = mergeProps(defaultProps, props)
    const {
      direction,
      dotColor='rgba(0, 0, 0, 0.2)',
      activeDotColor='#1677ff',
      dotSize='3px',
      activeDotSize='13px',
      dotBorderRadius='1px',
      activeDotBorderRadius='1px',
      dotSpacing='3px'
    } = props

    const isHorizontal = direction === 'horizontal';

    const dots: any[] = []
    for (let i = 0; i < props.total; i++) {
      dots.push(
        <div
          key={i}
          className={classNames(`${classPrefix}-dot`, {
            [`${classPrefix}-dot-active`]: props.current === i,
          })}
          style={{
            background: props.current === i ? activeDotColor : dotColor,
            width: props.current === i ? (isHorizontal ? activeDotSize : dotSize) : dotSize,
            height: props.current === i ? (!isHorizontal ? activeDotSize : dotSize) : dotSize,
            borderRadius: props.current === i ? activeDotBorderRadius : dotBorderRadius,
            marginRight: isHorizontal ? dotSpacing : 0,
            marginBottom: !isHorizontal ? dotSpacing : 0
          }}
        />
      )
    }

    return <div className={classNames(
        classPrefix,
        `${classPrefix}-${props.direction}`,
        `${classPrefix}-color-${props.color}`
      )}
    >
      {dots}
    </div>
  }
}
