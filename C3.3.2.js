/Вариант 1/

function checkProp (str, obj) {
  return(obj.hasOwnProperty(str));
}


/Вариант 2/

function checkProp(str, obj) {
  return (str in obj);
}