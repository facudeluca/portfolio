let hrUp = document.getElementById('hrUp');
let hrDown = document.getElementById('hrDown');
let cardsParallx = document.querySelectorAll('.card');
const sections = document.querySelectorAll('.section');
let toggleHeader = document.querySelector('#toggleHeader');
let mobileHeader = document.querySelector('.mobileHeader');

toggleHeader.addEventListener('click',()=>{
    toggleHeader.classList.toggle('toggleActivo');
    mobileHeader.classList.toggle('mobileHeaderActivo');
    if(mobileHeader.classList.contains('mobileHeaderActivo')){
        mobileHeader.addEventListener('click',()=>{
            toggleHeader.classList.remove('toggleActivo');
            mobileHeader.classList.remove('mobileHeaderActivo');
        })
    }
})



const observer = new IntersectionObserver((entradas, observador)=>{
entradas.forEach(entrada =>{
    if(entrada.isIntersecting){
        const id = entrada.target.id;
        if (id ==='home'){
            hrUp.style.width='0'+'px';
            hrDown.style.width='30'+'px';
            hrDown.style.cursor='pointer';
        }else if (id ==='projects'){
            hrUp.style.width='30'+'px';
            hrUp.style.cursor='pointer';
            hrDown.style.width='0'+'px';
        }else if(id === 'about'){
            hrUp.style.width='30'+'px';
            hrDown.style.width='30'+'px';
            hrUp.style.cursor='pointer';
            hrDown.style.cursor='pointer';
        }
    }
})
},{
    threshold:1,
    rootMargin: '0px 0px 30%',
});
sections.forEach(section=>{
    observer.observe(section);
})

const buttons = {
	prev: document.querySelector(".btn-left"),
	next: document.querySelector(".btn-right"),
};
buttons.next.addEventListener("click", () => swapCards("right"));
buttons.prev.addEventListener("click", () => swapCards("left"));

function swapCards(direction){
    const cardActive = document.querySelector('.card-active');
    const cardPrev = document.querySelector('.card-left');
    const cardNext = document.querySelector('.card-right');
    const cardPrevNon = document.querySelector('.card-left-non');
    const cardNextNon = document.querySelector('.card-right-non');
    swapCardsClass();

    function swapCardsClass(){
        cardNext.classList.remove('card-right');
        cardActive.classList.remove('card-active');
        cardPrev.classList.remove('card-left');
        cardPrevNon.classList.remove('card-left-non');
        cardNextNon.classList.remove('card-right-non');

        cardActive.style.zIdex='50';
        cardNext.style.zIdex='10';
        cardPrev.style.zIdex='10';
        cardNextNon.style.zIdex='10';
        cardPrevNon.style.zIdex='10';

        if(direction ==='right'){
            cardPrev.style.zIdex='30'
            cardNext.style.zIdex='10'
            cardActive.classList.add('card-right');
            cardPrev.classList.add('card-active');
            cardNext.classList.add('card-right-non');
            cardPrevNon.classList.add('card-left');
            cardNextNon.classList.add('card-left-non');
        }else if (direction ==='left'){
            cardNext.style.zIdex='30'
            cardPrev.style.zIdex='10'
            cardActive.classList.add('card-left');
            cardPrev.classList.add('card-left-non');
            cardNext.classList.add('card-active');
            cardPrevNon.classList.add('card-right-non');
            cardNextNon.classList.add('card-right');
        }
    }
}

cardsParallx.forEach((cardParallx)=>{
    cardParallx.addEventListener('mousemove',(e)=>{
        let x =(window.innerWidth/2 - e.pageX)/30;
        let y =(window.innerHeight/2 - e.pageY)/30;
        cardParallx.style.transform =`rotateX(${-y}deg) rotateY(${-x}deg)`;
        cardParallx.style.transition='rotateY'+'0';
        cardParallx.style.transition='rotateX'+'0';
    });
    cardParallx.addEventListener('mouseout', () => {
        cardParallx.style.transform =``;
        cardParallx.style.transition='';
    });
})





