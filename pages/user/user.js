import Header from '../../components/molecular/Header.js';
import SideBar from '../../components/molecular/SideBar.js';
import UserFilters from '../../components/atomic/UserFilters.js';

const body = document.querySelector('body');

// Insère le header en haut de la page
body.insertAdjacentHTML('afterbegin', Header());

// Insère la barre latérale à gauche de la page
body.insertAdjacentHTML('beforeend', SideBar(UserFilters()));