import classNames from 'classnames'
import { mergeProps } from '../../utils/with-default-props'

import {Step} from './step'

const classPrefix = `adm-steps`

const defaultProps = {
  current: 0,
  direction: 'horizontal',
}

export class Steps extends Component {
  install = () => {
    console.log('Steps!')
  }

  render = props => {
    props = mergeProps(defaultProps, props)

    const {direction, current, list=[]} = props

    const stemItem = list.map((item, index) => {
      let {status, title, description} = item;

      if (index < current) {
        status = status || 'finish'
      } else if (index === current) {
        status = status || 'process'
      } else {
        status = status || 'wait'
      }

      return (
        <Step
          status={status}
          title={title}
          description={description}
          direction={direction}
          totalLen={list.length}
          curIndex={index}/>
      )
    })

    return (
      <div className={classNames(classPrefix, `${classPrefix}-${direction}`)}>
        {stemItem}
      </div>
    )
  }
}
