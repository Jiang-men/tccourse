import tpl from './index.tpl';
import './index.scss';
import { tplReplace } from '../../../utils/tools';

export default () => {
  return {
    name: 'catouselIndicator',
    tpl(swiperData) {
      let list = '',
           item;

      for (let i = 0; i < swiperData.length; i++) {
        item = swiperData[i];
        list += tplReplace(tpl, {
          indicatorItemStyle: !i ? 'indicator-item current' : 'indicator-item'  
        })        
      }
      return list;
    }
  }
}