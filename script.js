const manipulateDOM = {
    changeText() {
      const textElement = document.getElementById('dynamic-text');
      if (textElement) {
        textElement.textContent = 'Text updated dynamically!';
      }
    },
  
    changeStyle() {
      const textElement = document.getElementById('dynamic-text');
      if (textElement) {
        textElement.style.color = '#dc3545';
        textElement.style.fontSize = '18px';
        textElement.style.backgroundColor = '#f1f1f1';
        textElement.style.padding = '10px';
        textElement.style.borderRadius = '4px';
      }
    },
  
    addElement() {
      const dynamicContent = document.getElementById('dynamic-content');
      if (dynamicContent) {
        const newElement = document.createElement('div');
        newElement.className = 'dynamic-element';
        newElement.textContent = `New element added at ${new Date().toLocaleTimeString()}`;
        dynamicContent.appendChild(newElement);
      }
    },
  
    removeElement() {
      const dynamicContent = document.getElementById('dynamic-content');
      const lastElement = dynamicContent.querySelector('.dynamic-element:last-child');
      if (lastElement) {
        dynamicContent.removeChild(lastElement);
      } else {
        alert('No elements to remove!');
      }
    }
  };
  
  function init() {
    document.getElementById('change-text-btn').addEventListener('click', manipulateDOM.changeText);
    document.getElementById('change-style-btn').addEventListener('click', manipulateDOM.changeStyle);
    document.getElementById('add-element-btn').addEventListener('click', manipulateDOM.addElement);
    document.getElementById('remove-element-btn').addEventListener('click', manipulateDOM.removeElement);
  }
  
  document.addEventListener('DOMContentLoaded', init);
  