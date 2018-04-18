export default () => {

  let text = "Hello World";
  let element = document.createElement('div');
  element.innerHTML = text;
  return element;
  
}