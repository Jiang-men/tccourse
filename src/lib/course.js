// 根据field过滤数据
function filterCourseData(data, field, limit) {
  const _arr = data.filter((item) => {
    return item.field === field;
  });
  return limit ?_arr.slice(0, limit) : _arr;
}

export {
  filterCourseData
}