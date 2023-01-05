function component() {
  const element = document.createElement('div');

  element.innerHTML =  _.join(['Hello', 'webpack', 'abc'], ' ');

  return element;
}

const child = component()
document.body.appendChild(child);
