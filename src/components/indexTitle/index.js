import tpl from './index.tpl';
import './index.scss';
import { tplReplace } from '../../utils/tools';
export default () => {
  return {
    name: 'indexTitle',
    tpl(titleText) {
      return tplReplace(tpl, {
        titleText 
      })
    }
  }
}