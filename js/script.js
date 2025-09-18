const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');
const resumeBtns = document.querySelectorAll('.resume-btn');


menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

resumeBtns.forEach((btn,idx) => {
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll('.resume-detail');
        resumeBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');
        resumeDetails.forEach(detail =>{
            detail.classList.remove('active');
        });
        resumeDetails[idx].classList.add('active');
    });
});

const arrowRight = document.querySelector('.project-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.project-box .navigation .arrow-left');

let index = 0;


const activeProject = () => {
  const imgSlide = document.querySelector('.project-carousel .img-slide');
  const projectDetails = document.querySelectorAll('.project-detail');
  imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

  projectDetails.forEach(detail =>{
    detail.classList.remove('active');
  });
  projectDetails[index].classList.add('active');
};

arrowRight.addEventListener('click', () => {
   if (index < 1) { //here project count -2
    index++;
    arrowLeft.classList.remove('disabled');
  } else {
    index = 2; //projects cnt-1
    arrowRight.classList.add('disabled');
  }
  activeProject();
});

arrowLeft.addEventListener('click', () => {
  if (index > 1) {
    index--;
    arrowRight.classList.remove('disabled');
  } else {
    index = 0;
    arrowLeft.classList.add('disabled');
  }
  activeProject();
});


