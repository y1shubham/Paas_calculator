let string=" ";
let buttons=document.querySelectorAll('.button');
// will run this function for each element
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        //if equalto has been hit
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'C'){
            string=" ";
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML == 'M+'){
            if(string<0){
                string=string -2*string;
                document.querySelector('input').value=string;
            }
        }
        else if(e.target.innerHTML == 'M-'){
            if(string>0){
                string=string -2*string;
                document.querySelector('input').value=string;
            }
            
        }
        
        else{
            console.log(e.target);
            string=string+e.target.innerHTML;
            document.querySelector('input').value=string;

        }
    })
})