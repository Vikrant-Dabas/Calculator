let string = "";
let buttons = document.querySelectorAll('button');
Array.from(buttons).forEach((button)=>(
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == 'AC'){
            string = "";
        }
        else if(e.target.innerHTML == '='){
            string = eval(string);
        }
        else if(e.target.innerHTML =='M+'){
            if(string < 0) string*=(-1);
        }
        else if(e.target.innerHTML =='M-'){
            if(string > 0) string*=(-1);
        }
        else{
            string = string + e.target.innerHTML;
        }
        document.querySelector('input').value = string;
    })
))