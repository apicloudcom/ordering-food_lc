import {mergeProps} from '../../utils/with-default-props'
import {toCSSLength} from '../../utils/to-css-length'

import outlineUrl from './img/outline.svg'
import warnUrl from './img/warn.svg'

const classPrefix = `adm-image`

const defaultProps = {
  fit: 'fill',
  placeholder: (
    <div className={`${classPrefix}-tip`}>
       <text>加載中...</text>
      <img src={outlineUrl}/>
    </div>
  ),
  fallback: (
    <div className={`${classPrefix}-tip`}>
       <text>加載失敗</text>
      <img src={warnUrl}/>
    </div>
  )
}

export class Image extends Component {
  install = () => {
    console.log('Image!');
    this.setLoaded(false)
    this.setFailed(false)
  }

  data = {
    loaded: false,
    failed: false
  }

  setLoaded = status => {
    this.data.loaded = status;
  }

  setFailed = status => {
    this.data.failed = status;
  }

  render = props => {
    props = mergeProps(defaultProps, props)

    let src = props.src
    let srcSet = props.srcSet

    const renderInner = () => {
      if (this.data.failed) {
        return <view>{props.fallback}</view>
      }
      const img = (
        <img className={`${classPrefix}-img`}
          src={src}
          alt={props.alt}
          onClick={props.onClick}
          onLoad={() => {
            this.setLoaded(true)
          }}
          onError={e => {
            this.setFailed(true)
            props.onError?.(e)
          }}
          style={{
            objectFit: props.fit,
            ...props.style
          }}
          crossOrigin={props.crossOrigin}
          decoding={props.decoding}
          loading={props.loading}
          referrerPolicy={props.referrerPolicy}
          sizes={props.sizes}
          srcSet={srcSet}
          useMap={props.useMap}
        />
      )
      return (
        <view>
        <div>{!this.data.loaded && props.placeholder}</div>
        {img}
      </view>
      )
    }

    const style = {};
    if (props.width) {
      style['width'] = toCSSLength(props.width)
    }
    if (props.height) {
      style['height'] = toCSSLength(props.height)
    }
    return <div className={classPrefix} style={style}>
    {renderInner()}
  </div>
  }
}
