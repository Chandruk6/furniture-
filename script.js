//navbar
const button=document.querySelector('.button i');
const navbar=document.querySelector('ul');

button.addEventListener('click',()=>{
    button.classList.toggle('fa-xmark');
    navbar.classList.toggle('navbar');
});
//end

//carousel
let slidePosition=0;
const sliders=document.querySelectorAll('.slider-item');
const totalSlider=sliders.length;
function update(){
  sliders.forEach(slide=>{
    slide.classList.remove('active');
    slide.classList.add('hidden');
  });

  sliders[slidePosition].classList.add('active');
}
function PrevSlide(){
  if(slidePosition==0){
    slidePosition=totalSlider-1;
  }else{
    slidePosition--;
  }
  update();
}
function NextSlide(){
  if(slidePosition==totalSlider-1){
    slidePosition=0;
  }else{
    slidePosition++;
  }
  update();
}

//end

const form = document.getElementById('form');
const Name = document.getElementById('Name');
const Email = document.getElementById('Email');
const MObileNo = document.getElementById('MObileNo');


//card
let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.row .col-sm-6 .img').forEach(img =>{
    img.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = img.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});

