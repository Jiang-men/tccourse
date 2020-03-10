import $ from 'jquery';

import '../scss/common.css';
import header from '../components/header';

const headerComponent = header();

; (($) => {
    const $app = $('#app');
    console.log(headerComponent.tpl())
    const init = () => {
        $app.append(headerComponent.tpl());
    }
  
    init();
})($);