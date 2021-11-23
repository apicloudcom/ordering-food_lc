import styles from './index.less'

export class DemoDescription extends Component {
  render = props => <div className={styles.demoDescription}>
    {props.content || props.children}
  </div>
}
