// buat slider home
let $slider = $('#slider')
const WIDTH =  document.querySelector('#slider').offsetWidth

$('.right').click(()=>{
    $slider.animate({
        left: -WIDTH
    }, 'normal',()=>{
        $('#slider :first-child').appendTo($slider);
        $slider.css('left','0')
    })
})
$('.left').click(()=>{
    $slider.animate({
        left: +WIDTH
    }, 'normal',()=>{
        $('#slider :last-child').prependTo($slider);
        $slider.css('left','0')
    })
})