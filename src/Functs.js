import React from 'react'

//const navbar = document.querySelector('.nav-fixed');
//  window.onscroll = () => {
//      if (window.scrollY > 50) {
//          navbar.classList.add('nav-active');
//      } else {
//          navbar.classList.remove('nav-active');
//      }
//  };



window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector(".nav-fixed'").className = "nav-active";
  } else {
    document.querySelector(".nav-fixed'").className = "";
  }
}

export const Functs = () => {
  return (
    <div></div>
  )
}
