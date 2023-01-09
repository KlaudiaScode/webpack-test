import {join} from 'lodash/join';

function component() {
  const element = document.createElement('div');

  element.innerHTML =  join(['Hello', 'webpack', 'abc', 'xyz'], ' ');

  return element;
}

const child = component()
document.body.appendChild(child);
