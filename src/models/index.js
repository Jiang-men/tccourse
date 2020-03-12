import $ from 'jquery';
import {API } from '../utils/config'
export default class IndexModel {
   getCourseData() {
      return $.ajax({
         url: API.getCourseDatas,
         type: 'GET',
         dataType: 'JSONP'
       })
    }
}
