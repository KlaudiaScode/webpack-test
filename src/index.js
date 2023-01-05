function component() {
  const element = document.createElement('div');

  element.innerHTML =  'Hello webpack';

  return element;
}

const child = component()
document.body.appendChild(child);
