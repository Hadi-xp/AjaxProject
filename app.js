// selecting our button && card
const btn = document.querySelector('.btn');
const card = document.querySelector('.card-text')
// console.log(card);
// console.log(btn);



// adding event listener
btn.addEventListener('click',loadAjax);

// creating function
function loadAjax(){
    // creating xhr object
    const xhr = new XMLHttpRequest();

    // open the connection
    xhr.open('GET','data.txt');

    // on load
    xhr.onload = function(){
        if(this.status === 200){
            // change card text
            card.textContent = this.responseText;
        }else if(this.status >= 400 && this.status < 500){
            console.error('client error');
        }else if (this.status >= 500){
            console.error('server error');
        }
    }

    // send the request
    xhr.send();
       
};

// selecting other btns for erroes
const btnC = document.querySelector('.Client');
const btnS = document.querySelector('.Server');

// this is for client error
btnC.addEventListener('click',()=>{
    const xhr = new XMLHttpRequest();
    xhr.open('GET','dataa.txt');
    xhr.onload = function(){
        if(xhr.status >= 400 && xhr.status < 500){
            console.error('client error');
        }
    }
    xhr.send();
});

// this is for server error
btnS.addEventListener('click',()=>{
    const xhr = new XMLHttpRequest();
    xhr.open('GET','https://httpstat.us/500');
    xhr.onload = function(){
        if(xhr.status >= 500){
            console.error('server error');
        }
    }
    xhr.send();
});




