// Select DOM items

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set initial state of menu

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    // set the menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
		menu.classList.remove("show");
		menuNav.classList.remove("show");
		menuBranding.classList.remove("show");
		navItems.forEach((item) => item.classList.remove("show"));

		// set the menu state
		showMenu = false;
  }
}

// Modal mechanism

const modalContainerUbi = document.querySelector("#modal-container-ubi");
const modalTriggersUbi = document.querySelectorAll(".modal-trigger-ubi");

modalTriggersUbi.forEach(trigger => trigger.addEventListener("click", toggleUbiModal))

function toggleUbiModal() {
    modalContainerUbi.classList.toggle("active")
}

const modalContainerDgfip = document.querySelector("#modal-container-dgfip");
const modalTriggersDgfip = document.querySelectorAll(".modal-trigger-dgfip");

modalTriggersDgfip.forEach(trigger => trigger.addEventListener("click", toggleDgfipModal))

function toggleDgfipModal() {
    modalContainerDgfip.classList.toggle("active")
}
