import $ from 'jquery';
import '../scss/common.css';

import Header from '../components/header';

import IndexModel from '../models/index';

; (async ($) => {
    const $app = $('#app'),
             $container = $('<div class="container">');
    console.log($container)
    const indexModel = new IndexModel(),
             retData = await indexModel.getCourseData(),
             { swipers, fields, coursees} = retData.result;
             
    console.log(fields)
    

    const header = new Header(fields)

    const init = () => {
      render()
    }

    function render() {
        $container.html(header.tpl(fields));
        $app.append($container);
    }
  
    init();
})($);