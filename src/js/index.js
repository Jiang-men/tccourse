import $ from 'jquery';
import '../scss/common.css';
import '../scss/iconfont.css'

import Header from '../components/header';
import Footer from '../components/footer';
import CarouselComponent from '../components/carousel';

import { CAROUSEL } from '../utils/config';
import Carousel from '../modules/Carousel';

import IndexModel from '../models/index';


; (async ($) => {
  const $app = $('#app'),
           $container = $('<div class="container">');

  const indexModel = new IndexModel(),
          retData = await indexModel.getCourseData(),
          { swipers, fields, coursees } = retData.result;


  const header = new Header(fields),
          footer = new Footer(),
          carousel = new CarouselComponent(swipers)

  const init = () => {
    render();
    loadModules();
  }

  function render() {
    $container.append(header.tpl(fields));
    $container.append(carousel.tpl());
    $container.append(footer.tpl());
    $app.append($container);
  }

  function loadModules() {
    new Carousel(CAROUSEL).init()
  }

  init();
})($);