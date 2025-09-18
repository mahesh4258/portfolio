// const navlinks = document.querySelectorAll('header nav a');
// const logoLink = document.querySelector('.logo');
// const sections = document.querySelectorAll('section');
// const menuIcon = document.querySelector('#menu-icon');
// const navbar = document.querySelector('header nav');

// menuIcon.addEventListener('click', () => {
//   menuIcon.classList.toggle('bx-x');
//   navbar.classList.toggle('active');
// })

// const activePage = () => {
//     const header = document.querySelector('header');
//     const barsBox = document.querySelector('.bars-box');

//     header.classList.remove('active');
//     setTimeout(() => {
//         header.classList.add('active');
//     },1100);

//     navlinks.forEach(link => {
//         link.classList.remove('active');
//     });

//     barsBox.classList.remove('active');
//     setTimeout(() => {
//         barsBox.classList.add('active');
//     },1100);

//     sections.forEach(section => {
//         section.classList.remove('active');
//     });
//     menuIcon.classList.remove('bx-x');
//     navbar.classList.remove('active');

// };

// navlinks.forEach((link, idx) => {
//   link.addEventListener('click', () => {
//     if (!link.classList.contains('active')) {
//         activePage();

//         link.classList.add('active');

//         setTimeout(() =>{
//             sections[idx].classList.add('active');
//         },1100);
//     }
//   });
// });

// logoLink.addEventListener('click', () => {
//   if (!navlinks[0].classList.contains('active')) {
//     activePage();

//     navlinks[0].classList.add('active');

//     setTimeout(() =>{
//         sections[0].classList.add('active');
//     },1100);
//   }
// });




const resumeBtns = document.querySelectorAll('.resume-btn');

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

// // Function to handle the intersection observer callback
// const observerCallback = (entries, observer) => {
//     entries.forEach(entry => {
//         // If a section is in the viewport
//         if (entry.isIntersecting) {
//             // Remove the 'active' class from all nav links
//             navlinks.forEach(link => {
//                 link.classList.remove('active');
//             });
//             // Find the corresponding nav link using the section's ID
//             const activeLink = document.querySelector(`header nav a[href="#${entry.target.id}"]`);
//             if (activeLink) {
//                 activeLink.classList.add('active');
//             }
//         }
//     });
// };

// // Create a new IntersectionObserver
// const observer = new IntersectionObserver(observerCallback, {
//     rootMargin: "-50% 0px -50% 0px" // This will fire when the middle of the section is in view
// });

// // Watch each section for changes
// sections.forEach(section => {
//     observer.observe(section);
// });