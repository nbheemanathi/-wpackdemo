import _ from 'lodash';
import './style.css';
import Icon from './3dicon.png';
import Data from './data.xml';
import printMe from './print.js';
import { cube } from './math.js';

function component() {
  let element = document.createElement('div');
  var btn = document.createElement('button');
  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack', '5 cubed is equal to ' + cube(5)], ' ');
  // element.classList.add('hello');

  //Add image 
  // var myIcon = new Image();
  // myIcon.src = Icon;
  // element.appendChild(myIcon);

  // console.log(Data);
  
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component()); 

if(module.hot){
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    printMe();
  });
}