const x = window.matchMedia("(max-width:992px");

const navbarUl = document.querySelector(".navbar ul");
const offCanvasToggleBtn = document.querySelector("#toggleBtn");
const offCanvasContainer = document.querySelector('.offCanvas')
const nav = document.getElementsByTagName('nav');

//mobile change run on loading
window.addEventListener('DOMContentLoaded', function() {
      // Code to be executed after the body is loaded
      mobileChange(x)
});

//mobile change run on loading changing
x.addEventListener("change",()=>{
    mobileChange(x);
});




function mobileChange(x){

    offCanvasContainer.style.height = `${(window.visualViewport.height - nav[0].getBoundingClientRect().height)}px`
    offCanvasContainer.style.top = `${nav[0].getBoundingClientRect().height-10}px`

    console.log(window.visualViewport.height);
    
    if(x.matches){
        navbarUl.classList.add('hide');
        offCanvasToggleBtn.classList.remove("hide");
        
    }
    else{
        navbarUl.classList.remove("hide");
        offCanvasToggleBtn.classList.add("hide")

        
    }
    
}
let scrollY = 0
function changeOnClickToggleBtn(){
    if(offCanvasToggleBtn.firstElementChild.classList[1] == 'fa-bars'){
        //toggle on
          scrollY = window.scrollY;
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = '100%';


        offCanvasContainer.classList.remove("hide");
        
        offCanvasToggleBtn.firstElementChild.classList.add("fa-xmark")
        offCanvasToggleBtn.firstElementChild.classList.remove("fa-bars")  
    
    }  else{
        offCanvasContainer.classList.add("hide");
    
        offCanvasToggleBtn.firstElementChild.classList.remove("fa-xmark")
        offCanvasToggleBtn.firstElementChild.classList.add("fa-bars")  
        document.body.style.position = '';
        document.body.style.top = ``;
        window.scrollTo({
        top: scrollY,
         left:0,
        behavior: 'instant',
        })

    }
    
}


//onclick toggleBtn
offCanvasToggleBtn.addEventListener("click",function(){
    changeOnClickToggleBtn();
})

