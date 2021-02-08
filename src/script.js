// function displayMenu() {
// 	document.getElementsById("secondary").classList.add('show');
// 	console.log('clicked');
// }

// function loaded(){
	
// }

import {
	mdiMenu,
	mdiWindowClose,
	mdiAccount,
	mdiTrendingUp,
	mdiBriefcaseCheck,
	mdiMessageArrowRightOutline,
	mdiFacebook,
	mdiLinkedin,
	mdiEmail,
	mdiQuora,
	mdiSend,
	mdiTwitter,

} from '@mdi/js';

let icons = [
	{ 'path': mdiMenu, 'class': 'mdi-menu' },
	{ 'path': mdiWindowClose, 'class': 'mdi-window-close' },
	{ 'path': mdiAccount, 'class': 'mdi-account' },
	{ 'path': mdiTrendingUp, 'class': 'mdi-trending-up' },
	{ 'path': mdiBriefcaseCheck, 'class': 'mdi-briefcase-check' },
	{ 'path': mdiMessageArrowRightOutline, 'class': 'mdi-message-arrow-right-outline' },
	{ 'path': mdiFacebook, 'class': 'mdi-facebook' },
	{ 'path': mdiLinkedin, 'class': 'mdi-linkedin' },
	{ 'path': mdiEmail, 'class': 'mdi-email' },
	{ 'path': mdiTwitter, 'class': 'mdi-twitter' },
	{ 'path': mdiSend, 'class': 'mdi-send' },
]

icons.forEach( icon => {
	let elements = document.getElementsByClassName(icon.class);
	Array.from(elements).forEach( element => {
		element.innerHTML = `<path d="${icon.path}"></path>`
	})
});