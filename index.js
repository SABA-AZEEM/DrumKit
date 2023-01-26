//with the help of mouse play
for(let i=0;i<document.querySelectorAll('.drum').length;i++){
    document.querySelectorAll('.drum')[i].addEventListener('click',function(){
       var  buttonInnerHTML=this.innerHTML;
       makeSound(buttonInnerHTML);
       buttonAnimation(buttonInnerHTML);
});
}
//with the help of keyboard play
document.addEventListener('keypress',function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});


//function that work for playing sounds
function makeSound(key){
    switch(key){
        case 'w':
            let obj1=new Audio('sounds/tom-1.mp3');
            obj1.play();
            break;
        case 'a':
            let obj2=new Audio('sounds/tom-2.mp3');
            obj2.play();
            break;
        case 's':
            let obj3=new Audio('sounds/tom-3.mp3');
            obj3.play();
            break;
        case 'd':
            let obj4=new Audio('sounds/tom-4.mp3');
            obj4.play();
            break;
        case 'j':
            let obj5=new Audio('sounds/snare.mp3');
            obj5.play();
            break;
        case 'k':
            let obj6=new Audio('sounds/crash.mp3');
            obj6.play();
            break;
        case 'l':
            let obj7=new Audio('sounds/kick-bass.mp3');
            obj7.play();
            break;
        default:
            console.log(key);
    }
}

//function that make shadow to the presses key
function buttonAnimation(currentKey){
    let activeButton=document.querySelector('.'+currentKey);
    
    activeButton.classList.add('pressed');

    setTimeout(function(){
        activeButton.classList.remove('pressed');
    },100);
}