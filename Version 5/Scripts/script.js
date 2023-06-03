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
    console.log("test")

    
    // buat slider home
    let $slider = $('#slider')
    const WIDTH =  document.querySelector('#slider').offsetWidth

    $('.right').click(()=>{
        $slider.animate({
            left: -WIDTH
        }, 'fast',()=>{
            $('#slider :first-child').appendTo($slider);
            $slider.css('left','0')
        })
    })
    $('.left').click(()=>{
        $slider.animate({
            left: +WIDTH
        }, 'fast',()=>{
            $('#slider :last-child').prependTo($slider);
            $slider.css('left','0')
        })
    })
    