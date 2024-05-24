
//QR Code 

let input = document.querySelector('.input');
let btn = document.querySelector('.btn');
let imglnk = document.querySelector(".imglnk");

btn.addEventListener('click', function(){
   let inputValue = input.value;
   imglnk.src =`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= ${inputValue}`;
});