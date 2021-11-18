import {Button} from "../button";
import '../button.less';

const template = <view>

  <Button
    onClick={() => {
      alert('hello.')
    }}
  >
    Default
  </Button>
  <Button color='primary'>Primary</Button>
  <Button color='success'>Success</Button>
  <Button color='danger'>Danger</Button>
  <Button color='warning'>Warning</Button>

</view>;

avm.render(template, "body");
