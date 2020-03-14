import tpl from './index.tpl';
import './index.scss';
import List from './list';

import { tplReplace } from '../../utils/tools';

export default (recomCourseData) => {
  const list = new List()
  return {
    name: 'recomBoard',
    tpl() {
      return tplReplace(tpl, {
        list: list.tpl(recomCourseData)
      })
    }
  }
}