let counter =0;

const valueOfSpan=document.getElementById('value');
const btnNode=document.querySelectorAll('.btn');

btnNode.forEach(function(btn){
    btn.addEventListener("click",function(e){
        var ourTarget = e.currentTarget.classList;
        if(ourTarget.contains("reset")){
            counter=0;
        }
        else if(ourTarget.contains("decrease")){
            counter--;
        }
        else{
            counter++;
        }
        if(counter<0){
            valueOfSpan.style.color="red";
        }
        else if(counter>0){
            valueOfSpan.style.color="Green";
        }
        else{
            valueOfSpan.style.color="black";
        }
        
        valueOfSpan.textContent=counter;
        
    })
})