// selecting our button && card
const btn = document.querySelector('.btn');
const btnC = document.querySelector('.Client');
const btnS = document.querySelector('.Server');
const card = document.querySelector('.card-text')

// creating function
function loadAjax(target){
    // creating xhr object
    const xhr = new XMLHttpRequest();

    // open the connection
    xhr.open('GET',target);

    // on load
    xhr.onload = function(){
        if(this.status === 200){
            // change card text
            Swal.fire({
                title: "Drag me!",
                icon: "success",
                draggable: true
              });
            card.textContent = this.responseText;
        }else if(this.status >= 400 && this.status < 500){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
            console.error('client error');
        }else if (this.status >= 500){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
            console.error('server error');
        }
    }

    // send the request
    xhr.send();
       
};


// adding event listener

btn.addEventListener('click',function(){
    loadAjax('data.txt');
});
btnC.addEventListener('click',function(){
    loadAjax('dataa.txt');
});
btnS.addEventListener('click',function(){
    loadAjax('https://httpstat.us/500');
})
