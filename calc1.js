let string="";

let buttons = document.querySelectorAll('.item1,.item,.main22,.item2');
Array.from(buttons).forEach(button => {
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string= eval(string);
            document.querySelector('input').value = string;

        }
        else if(e.target.innerHTML == 'C'){
            string = '';
            document.querySelector('input').value = null;

        }
        else{
        console.log(e.target)
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
        }
    })
});