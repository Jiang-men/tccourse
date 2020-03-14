import tpl from './index.tpl';
import './index.scss';
import { tplReplace } from '../../utils/tools';
import List from './list';

export default () => {
  const list = new List();
  return {
    name: 'ListBoard',
    tpl(data) {
      return tplReplace(tpl, {
        list: list.tpl(data)
      });
    }
  }

}
