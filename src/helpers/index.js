/** debounce function **/
export function debounce (func, wait) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  }
}

/** return object with specific property **/
export function findObject(context, propName, value) {
  const type = Object.prototype.toString.call(context).slice(8, -1);
   if(type === 'Array' && context.length){
    return context.find(item => item[propName] === value)
  } else if(type === 'Object' && Object.keys(context).length){
    return Object.values(context).find(item => item[propName] === value)
  }
}

/** return index of object in array with specific property **/
export function findIndexOfObject(array, propName, value){
  if(array.length){
    return array.findIndex(item => item[propName] === value)
  }
}

/** clone object **/
export function clone(object){
  return JSON.parse(JSON.stringify(object));
}

/** calculate order sum **/
export function sumCalculate(object){
  const sum = Object.values(object).reduce((acumulator, value) => {
    return acumulator + value.sum
  }, 0);
  if(isNaN(sum)){
    throw new TypeError('Calculated sum is not a number')
  } else {
    return sum.toFixed(2)
  }
}

/** check if the object is empty **/
export function isObjectEmpty(object){
  return Object.getOwnPropertyNames(object).length === 0
}

/** generate unique value (String) **/
export function uniqueKey(){
  function s4(){
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

/**  control pagination **/
export function paginationControl(countPages, page, startPagination, currentPage) {
  const DISTANCE_TO_FIRST_PAGE = 4;
  const NUMBER_OF_PAGES_TO_LEFT_OF_ACTIVE = 2;
  // control pagination if on page is a more 7 of points pagination
    if (currentPage >= page && currentPage > DISTANCE_TO_FIRST_PAGE && page !== 1 && page < countPages - NUMBER_OF_PAGES_TO_LEFT_OF_ACTIVE) {
      page === (NUMBER_OF_PAGES_TO_LEFT_OF_ACTIVE + 1) ? startPagination = page - 1 : startPagination = page - NUMBER_OF_PAGES_TO_LEFT_OF_ACTIVE;
    }
    if (currentPage <= page && page > DISTANCE_TO_FIRST_PAGE && page <= countPages - DISTANCE_TO_FIRST_PAGE + NUMBER_OF_PAGES_TO_LEFT_OF_ACTIVE) {
      if (page === countPages - NUMBER_OF_PAGES_TO_LEFT_OF_ACTIVE) {
        if (currentPage !== countPages - (NUMBER_OF_PAGES_TO_LEFT_OF_ACTIVE + 1)) startPagination = startPagination + 1;
      } else startPagination = page - NUMBER_OF_PAGES_TO_LEFT_OF_ACTIVE;
    }
    if (page === 1) startPagination = NUMBER_OF_PAGES_TO_LEFT_OF_ACTIVE;
    if (page === countPages) startPagination = countPages - (DISTANCE_TO_FIRST_PAGE + 1);
  return startPagination;
}