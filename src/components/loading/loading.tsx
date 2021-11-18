export type LoadingProps = {
  color?: 'default' | 'primary' | 'white' | (string & {})
}


export class Loading extends Component {
  render = props => <text>Loading{props.text}</text>
}