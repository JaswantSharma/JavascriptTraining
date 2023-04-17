const colors = ["red" , "green" , "rgb(133,200,100)", "blue" ];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click',function(){
    console.log("clicked");
    randomNumber = getRandomNum();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent= colors[randomNumber];
    
})

function getRandomNum(){
    return Math.floor(Math.random()*colors.length);
}