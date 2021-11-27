import {mergeProps} from '../../utils/with-default-props'
import {toCSSLength} from '../../utils/to-css-length'
// import {LazyDetector} from './lazy-detector'

import outlineUrl from './img/outline.svg'
import warnUrl from './img/warn.svg'

const classPrefix = `adm-image`

const defaultProps = {
  fit: 'fill',
  placeholder: (
    <div className={`${classPrefix}-tip`}>
      <img src={outlineUrl}/>
    </div>
  ),
  fallback: (
    <div className={`${classPrefix}-tip`}>
      <img src={warnUrl}/>
    </div>
  ),
  // lazy: false,
}

export class Image extends Component {
  install = () => {
    console.log('Image!');
     // 初始化
     this.setLoaded(false)
     this.setFailed(false)
     // this.setInitialized(true)
  }

  data = {
    loaded: false,
    failed: false,
    // initialized: true
  }

  setLoaded = status => {
    this.data.loaded = status;
  }

  setFailed = status => {
    this.data.failed = status;
  }

  // setInitialized = status => {
  //   this.data.initialized = status;
  // }

  render = props => {
    props = mergeProps(defaultProps, props)

    let src = props.src
    let srcSet = props.srcSet
    // this.setInitialized(!props.lazy)

    // src = this.data.initialized ? props.src : undefined
    // srcSet = this.data.initialized ? props.srcSet : undefined
    // src = props.src
    // srcSet =props.srcSet

    const renderInner = () => {
      if (this.data.failed) {
        return <>{props.fallback}</>
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
            display: this.data.loaded ? 'block' : 'none',
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
        <>
        <div>{!this.data.loaded && props.placeholder}</div>
        {img}
      </>
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
    {/* {props.lazy && !this.data.initialized && (
      <LazyDetector
        onActive={() => {
          this.setInitialized(true)
        }}
      />
    )} */}
    {renderInner()}
  </div>
  }
}
