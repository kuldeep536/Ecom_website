//Night mode and Day mode on click 
class change{
    head(){
        let nav  = document.getElementById('navi')
        nav.style.backgroundColor = '#001219 !important'
    }
}
let btn  = document.getElementById('cool')
btn.addEventListener('click',function(){
   let he = document.getElementById('he')
   he.classList.toggle('head-class')
    
})

//animation on hover

function animation(){
    let cont3 = document.getElementById('inside-intro-h1')

    cont3.classList.add('inside-intro-ani');
    cont3.style.display = 'flex';

    let introPara = document.getElementById('para-intro');
    introPara.style.display = 'flex';
    introPara.classList.add('intro-para-animation')
}


//what we section animation on hover


let hover_section = (what_we)=>{
   what_we = document.getElementById('main-head-do').style.display = 'flex'
}


 

