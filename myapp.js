let elements = document.getElementsByName('cssProperty'); /*array of elements*/
let div = document.getElementById('modify'); /*object*/

function set(event) {
  for(let i = 0; i < elements.length; i++) /*iteration*/
  {
    let property = elements[i].getAttribute('id');
    let propertyValue = elements[i].value;
    div.style[property] = propertyValue;
  }
}

document.getElementById('set').addEventListener('click', set);
