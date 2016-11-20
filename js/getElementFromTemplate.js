const getElementFromTemplate = (content) => {
  let node = document.createElement('span');
  node.innerHTML = content;
  return node.cloneNode(true);
};

export default getElementFromTemplate;
