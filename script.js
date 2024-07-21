const slider=document.querySelector('.slider')
const lslide=document.querySelector('.left-slide')
const rslide=document.querySelector('.right-slide')
const ubtn=document.querySelector('.up')
const dbtn=document.querySelector('.down')
const slidelen=rslide.querySelectorAll('div').length

let slideindex=0
lslide.style.top = `-${(slidelen -  1)*100}vh`

ubtn.addEventListener('click', ()=>changeSlide('up'))
dbtn.addEventListener('click', ()=>changeSlide('down'))

const changeSlide = (direction)=>{
    const sliderhgt=slider.clientHeight
    if(direction==='up'){
        slideindex++
        if(slideindex>slidelen-1){
            slideindex=0
        }
    }else if(direction==='down'){
        slideindex--
        if(slideindex<0){
            slideindex=slidelen-1
        }
    }
    rslide.style.transform=`translateY(-${slideindex*sliderhgt}px)`
    lslide.style.transform=`translateY(${slideindex*sliderhgt}px)`
}