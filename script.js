let inp = document.querySelector('#inp');
let text = document.querySelector('.text');

function add(){
myFun()
}

function myFun(){
    if(inp.value == ''){
        alert('please enter somthing to add')
    }
    else{
        let newElm = document.createElement('ul');
        newElm.innerHTML=inp.value + '<i class="fa-solid fa-trash"></i>';
        text.appendChild(newElm);
        inp.value='';
        newElm.querySelector('i').addEventListener('click',remove);
        function remove(){
            newElm.remove()
        }
    }
}