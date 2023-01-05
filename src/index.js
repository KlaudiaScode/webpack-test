import _ from 'lodash';

function component() {
  const element = document.createElement('div');

  element.innerHTML =  _.join(['Hello', 'webpack', 'abc', 'xyz'], ' ');

  return element;
}

const child = component()
document.body.appendChild(child);
