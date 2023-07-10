let string = "";
let upper = "";
let op = "";
let buttons = document.querySelectorAll('button');
Array.from(buttons).forEach((button) => (
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == 'AC') {
            string = "";
            upper = "";
            op = "";
            document.querySelector('.secondary').value = upper;
            document.querySelector('.sign').value = op;
            document.querySelector('.primary').value = string;
        }
        else if (e.target.innerHTML == '=') {
            if (op == 'x') {
                op = '*';
            }
            upper = upper + op + string;
            console.log(upper);
            string = eval(upper);
            op = '='
            upper = "";
            document.querySelector('.secondary').value = upper;
            document.querySelector('.sign').value = op;
            document.querySelector('.primary').value = string;
        }
        else if (e.target.innerHTML == 'x') {
            if (op == '=') {
                upper = string;
            }
            else if(op == 'x'){
                upper = upper + '*' + string;
                console.log(upper);
                upper = eval(upper);
            }
            else {
                upper = upper + op + string;
                console.log(upper);
                upper = eval(upper);
            }
            op = "x";
            string = "";
            document.querySelector('.secondary').value = upper;
            document.querySelector('.sign').value = op;
            document.querySelector('.primary').value = string;
        }
        else if(e.target.innerHTML == '+' || e.target.innerHTML == '-' || e.target.innerHTML == '/'){
            if(op == 'x'){
                op = '*';
            }
            if (op == '=') {
                upper = string;
            }
            else {
                upper = upper + op + string;
                console.log(upper);
                upper = eval(upper);
            }
            op = e.target.innerHTML;
            string = "";
            document.querySelector('.secondary').value = upper;
            document.querySelector('.sign').value = op;
            document.querySelector('.primary').value = string;
        }
        else if(e.target.innerHTML == '+/-'){
            string *= (-1);
            document.querySelector('.primary').value = string;
        }
        else if(e.target.innerHTML == '%'){
            string/=100;
            document.querySelector('.secondary').value = upper;
            document.querySelector('.sign').value = op;
            document.querySelector('.primary').value = string;
        }
        else {
            if(op == '='){
                op = "";
                string = "";
                document.querySelector('.sign').value = op;
            }
            string += e.target.innerHTML;
            document.querySelector('.primary').value = string
        }
    })
))
