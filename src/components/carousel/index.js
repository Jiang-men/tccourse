import tpl from './index.tpl';
import './index.scss';
import { tplReplace } from '../../utils/tools';
import List from './list';
import Indicator from './indicator';

export default (swiperData) => {
  const list = new List(),
          indicator = new Indicator()
  
  return {
    name: 'carouel',
    tpl() {
      return tplReplace(tpl, {
        listWidth: (swiperData.length + 1) * 1200,
        list: list.tpl(swiperData),
        indicator: indicator.tpl(swiperData)
      })
    }
  }
}