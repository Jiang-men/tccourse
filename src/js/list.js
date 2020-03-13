import $ from 'jquery';
import '../scss/common.css';
import '../scss/iconfont.css'

import Header from '../components/header';
import Footer from '../components/footer';

import IndexModel from '../models/index';

; (async ($) => {
    const $app = $('#app'),
             $container = $('<div class="container">');

    const indexModel = new IndexModel(),
             retData = await indexModel.getCourseData(),
             { swipers, fields, coursees} = retData.result;
             
   
  const header = new Header(fields),
           footer = new Footer()

    const init = () => {
      render()
    }

    function render() {
        $container.append(header.tpl(fields));
      $container.append(footer.tpl());
        $app.append($container);
    }
  
    init();
})($);