let buttons = document.getElementsByClassName('button');


  


let buttonID;
let btnID = undefined;
for(let button of buttons){
 button.addEventListener("click",e=>{
   btnID = e.target.id;
 })
} 



for (let i = 0; i < buttons.length; i++) {
 buttons[i].addEventListener('click', function() {
   let container = document.getElementById('container-isi2');
   let popup = this.parentNode.nextElementSibling;
     
     container.classList.add('blur');
     popup.classList.add('show');
     if(btnID === "btncake"){
     document.getElementsByClassName('popup')[0].style.opacity = "1"
     document.getElementsByClassName('popup')[0].style.zIndex = "1"
    }else if(btnID === "btndonut"){
      document.getElementsByClassName('popup')[1].style.opacity = "1"
      document.getElementsByClassName('popup')[1].style.zIndex = "1"
    }else if(btnID === "btncupcake"){
      document.getElementsByClassName('popup')[2].style.opacity = "1"
      document.getElementsByClassName('popup')[2].style.zIndex = "1"
    }else if(btnID === "btncoffee"){
      document.getElementsByClassName('popup')[3].style.opacity = "1"
      document.getElementsByClassName('popup')[3].style.zIndex = "1"
    }else if(btnID === "btnfloat"){
      document.getElementsByClassName('popup')[4].style.opacity = "1"
      document.getElementsByClassName('popup')[4].style.zIndex = "1"
    }else if(btnID === "btnlemontea"){
      document.getElementsByClassName('popup')[5].style.opacity = "1"
      document.getElementsByClassName('popup')[5].style.zIndex = "1"
    }
   });
 }
 
 let closeButtons = document.getElementsByClassName('closeButton');
 
 for (let j = 0; j < closeButtons.length; j++) {
   closeButtons[j].addEventListener('click', function() {
     let container = document.getElementById('container-isi2');
     let popup = this.parentNode;
 
     container.classList.remove('blur');
     popup.classList.remove('show');
     if(btnID === "btncake"){
       document.getElementsByClassName('popup')[0].style.opacity = "0"
       document.getElementsByClassName('popup')[0].style.zIndex = "-1"
      }else if(btnID === "btndonut"){
        document.getElementsByClassName('popup')[1].style.opacity = "0"
        document.getElementsByClassName('popup')[1].style.zIndex = "-1"
      }else if(btnID === "btncupcake"){
        document.getElementsByClassName('popup')[2].style.opacity = "0"
        document.getElementsByClassName('popup')[2].style.zIndex = "-1"
      }else if(btnID === "btncoffee"){
        document.getElementsByClassName('popup')[3].style.opacity = "0"
        document.getElementsByClassName('popup')[3].style.zIndex = "-1"
      }else if(btnID === "btnfloat"){
        document.getElementsByClassName('popup')[4].style.opacity = "0"
        document.getElementsByClassName('popup')[4].style.zIndex = "-1"
      }else if(btnID === "btnlemontea"){
        document.getElementsByClassName('popup')[5].style.opacity = "0"
        document.getElementsByClassName('popup')[5].style.zIndex = "-1"
      }
     
   });
 }
 
 
 // buat slider home
 document.getElementById("form").addEventListener("submit",submit); 
 
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
    
    //Untuk Register
    function submit(e){
      e.preventDefault();
      let error=false;
      let name=document.getElementById("name");

      if(name.value.length <=0){
        error=true;
        alert("Name cannot be empty.")
        return;
      }

      if(name.value.length < 5 || name.value.length > 20){
        error=true;
        alert("Name length must be 5 - 20 characters")
        return
      }

      let male = document.getElementById("male");
      let female = document.getElementById("female");
      if(!male.checked && !female.checked){
        error=true;
        alert("Choose a gender!")
        return;
      }

      let regionSelect = document.getElementById("region")
      if(regionSelect.value == 'select-region'){
        error=true;
        alert("Please select a region!");
        return;
      }

      let email = document.getElementById("email")
      if(email.value.length <=0){
        error=true;
        alert("Email cannot be empty.")
        return;
      } else if(!email.value.includes("@")){
        error=true;
        alert("Email must contain '@' character")
        return;
      }



      let password = document.getElementById("password")
      if(!PasswordValidation(password.value)){
        error=true;
        return;
      }

      let repass = document.getElementById("repass")
      if(repass.value !== password.value){
        error=true;
        alert("Re-password input was not the same as password")
      }

      let agree = document.getElementById("agree");
      if(!agree.checked){
        error=true;
        alert("You must agree to the Terms of Service Before Registering")
        return;
      }

      if( error===false){
        alert("Registration Successful!")
        window.location.href = 'home.html'
      }
    }

    function PasswordValidation(password){
      if(password.length<5 || password.length>10){
      alert("password lenght must be between 5 and 10 characters")
          return false
      }
      let hasNumber = false
      let hasAlphabet= false
      for(i=0; i<password.length; i++){
          if(isNaN(password[i])){
              hasAlphabet=true
          }else{
              hasNumber=true;
          }
          if(hasAlphabet && hasNumber){
              return true;
          }
      }
      alert("password must be alphanumeric")
      return false;
  }
