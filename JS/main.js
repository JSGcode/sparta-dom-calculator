document.addEventListener("DOMContentLoaded", function() {

    var screen = document.getElementsByClassName('item0');
    var number = document.getElementsByClassName('number');
    var operAdd = document.getElementsByClassName('item4');
    var operSub = document.getElementsByClassName('item8');
    var operMult = document.getElementsByClassName('item12');
    var operClear = document.getElementsByClassName('item13');
    var operSqrt = document.getElementsByClassName('item15');
    var operDivide = document.getElementsByClassName('item16');
    var confirm = document.getElementsByClassName('item17');

    function screenOut() {
        for (let i = 0; i < number.length; i++) {
            number[i].addEventListener('click', function(){
                screen[0].style.color = 'black';
                return screen[0].innerText += number[i].innerText;
            })
        }
    }
    function operation() {
        operAdd[0].addEventListener('click', function(){
            screen[0].style.color = 'black';
            screen[0].innerText += '+';
        }) 
        operSub[0].addEventListener('click', function(){
            screen[0].style.color = 'black';
            screen[0].innerText += '-';
        }) 
        operMult[0].addEventListener('click', function(){
            screen[0].style.color = 'black';
            screen[0].innerText += '*';
        }) 
        operDivide[0].addEventListener('click', function(){
            screen[0].style.color = 'black';
            screen[0].innerText += '/';
        }) 
    }
    function clear() { 
        operClear[0].addEventListener('click', function(){
            screen[0].innerText = '';
        }) 
    }
    function sqrt() {
        operSqrt[0].addEventListener('click', function(){
            screen[0] = document.getElementsByClassName('item0');
            screen[0].innerText = Math.sqrt(parseFloat(eval(screen[0].innerText)))
        }) 
    }
    
    screenOut();
    operation();
    clear();
    sqrt();

  
    confirm[0].addEventListener('click', function(){
        screen[0] = document.getElementsByClassName('item0');
        screen[0].innerText = eval(screen[0].innerText)
    }) 
    
   
})