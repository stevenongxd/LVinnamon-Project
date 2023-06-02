let buttons = document.getElementsByClassName('button');

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function() {
        let container = document.getElementById('container-isi2');
        let popup = this.parentNode.nextElementSibling;
    
        container.classList.add('blur');
        popup.classList.add('show');
      });
    }
    
    let closeButtons = document.getElementsByClassName('closeButton');
    
    for (let j = 0; j < closeButtons.length; j++) {
      closeButtons[j].addEventListener('click', function() {
        let container = document.getElementById('container-isi2');
        let popup = this.parentNode;
    
        container.classList.remove('blur');
        popup.classList.remove('show');
      });
    }