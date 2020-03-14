import $ from 'jquery';
import '../scss/common.css';
import '../scss/iconfont.css'

import Header from '../components/header';
import Footer from '../components/footer';
import CarouselComponent from '../components/carousel';
import IndexTitle from '../components/indexTitle';
import RecomBoard from '../components/recomBoard';

import { CAROUSEL } from '../utils/config';
import Carousel from '../modules/Carousel';

import IndexModel from '../models/index';


; (async ($) => {
  const $app = $('#app'),
           $container = $('<div class="container">');

  const indexModel = new IndexModel(),
          retData = await indexModel.getCourseData(),
          { swipers, fields, courses, recomCourses } = retData.result;

console.log(retData)
  const header = new Header(fields),
          footer = new Footer(),
          carousel = new CarouselComponent(swipers),
          indexTitle = new IndexTitle(),
          recomBoard = new RecomBoard(recomCourses)

  const init = () => {
    render();
    loadModules();
  }

  function render() {
    $container.append(header.tpl(fields));
    $container.append(carousel.tpl());
    $container.append(indexTitle.tpl('深度前端'));
    $container.append(recomBoard.tpl());
    $container.append(indexTitle.tpl('前端高薪就业'));
    $container.append(indexTitle.tpl('精品小课'));
    $container.append(indexTitle.tpl('精品公益课'));
    $container.append(indexTitle.tpl('全修体验课'));
    $container.append(footer.tpl());
    $app.append($container);
  }

  function loadModules() {
    new Carousel(CAROUSEL).init();
  }

  init();
})($);