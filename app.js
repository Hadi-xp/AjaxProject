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
    xhr.onload = ()=>{
        if(xhr.status === 200){
            // change card text
            card.textContent = xhr.responseText;
        }else if(xhr.status >= 400 && xhr.status < 500){
            console.error('client error');
        }else if (xhr.status >= 500){
            console.error('server error');
        }
    }

    // send the request
    xhr.send();
       
}

