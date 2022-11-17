var backDrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var modalNoButton = document.querySelector(".modal__action--negative");
//console.dir(backDrop);//
var selectPlanButtons = document.querySelectorAll('.plan button');
var toggleButton =document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
var ctaButton=document.querySelector('.main-nav__item--cta');
console.dir(selectPlanButtons);
for(var i=0;i<selectPlanButtons.length;i++){
    selectPlanButtons[i].addEventListener('click',function(){
       // modal.style.display ='block';
        //backDrop.style.display ='block';
        //modal.className = 'open // this wil actually overwrite the complete class
        modal.classList.add('open');
        backDrop.style.display= 'block';
        setTimeout(function(){
            backDrop.classList.add('open');
        },10)
    });
}
backDrop.addEventListener('click',function(){
  //mobileNav.style.display='none';
  mobileNav.classList.remove('open');
  closeModal();
});

if(modalNoButton){
    modalNoButton.addEventListener('click',closeModal);

}

function closeModal(){
    //backDrop.style.display ="none";
    //modal.style.display ="none";
    if(modal){
        modal.classList.remove('open');

    }
    backDrop.classList.remove('open');

    setTimeout(function(){
        backDrop.style.display= 'none';
    },200);
}

toggleButton.addEventListener('click',function(){
    //mobileNav.style.display = 'block';
   // backDrop.style.display ='block';
   mobileNav.classList.add('open');
   backDrop.style.display= 'block';
setTimeout(function(){
    backDrop.classList.add('open');
},10);
});

ctaButton.addEventListener('animationstart', function(event){
   console.log('Animation started',event);
});

ctaButton.addEventListener('animationend', function(event){
    console.log('Animation ended',event);
 });

 ctaButton.addEventListener('animationiteration', function(event){
    console.log('Animation iteration',event);
 });