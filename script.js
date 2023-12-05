// disable enable scroll in website end

//Link Dictionory
const linkPathDict = {
	'1memberRegistrationForm':
		'https://docs.google.com/forms/d/e/1FAIpQLSfkYfPJqe3gLPOHjaYAgoEzNm15RnZB9-ZWv_TBNO55GFU7WA/viewform?usp=sf_link',
	memberRegistrationPoster: 'img/MEMBER REGISTRATION POSTER.png',
	teamMemberRegistrationForm:
		"<iframe src='https://docs.google.com/forms/d/e/1FAIpQLSc0NK29Iau8MVkba6_tGw2E_KPFlRmIJdw4BJ116dN_pxqNAQ/viewform?embedded=true&#92' width='100%' frameborder='0' marginheight='0' marginwidth='0'>Loading…</iframe>",
	darpan23RegistrationForm:
		"<iframe src='https://docs.google.com/forms/d/e/1FAIpQLSe9hzhIRGQv9FtUeVZC0BLkmXV4nwxiYqjekYryvcLd2Zymrg/viewform?embedded=true' width='100%' frameborder='0' marginheight='0' marginwidth='0'>Loading…</iframe>",
	darpan23Poster: '/img/EVENTS/1 DARPAN 23 POSTER.png',
};

// Form Poster View Program
const formPosterDiv = document.getElementById('tempFormPosterDiv');

function viewFormPoster(dictName, type) {
	const formPosterCloseButton = document.createElement('button');
	var flag = true;
	if (type == 'link') {
		if (dictName.slice(0, 1) == '1') {
			window.open(linkPathDict[dictName], '_blank');
			flag = false;
		} else {
			formPosterDiv.classList.add('formPosterDiv');
			formPosterDiv.innerHTML = linkPathDict[dictName];
			formPosterCloseButton.setAttribute(
				'onclick',
				"closeFormPoster('" + dictName + "')"
			);
		}
	} else {
		formPosterDiv.classList.add('formPosterDiv');
		const poster = document.createElement('img');
		formPosterDiv.appendChild(poster);
		poster.setAttribute('src', linkPathDict[dictName]);
		poster.setAttribute('alt', dictName);
		poster.setAttribute('class', 'poster');
		formPosterCloseButton.setAttribute(
			'onclick',
			"closeFormPoster('" + type + "')"
		);
	}
	if (flag) {
		formPosterCloseButton.setAttribute('class', 'myBtn closeBtn');
		formPosterCloseButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
		formPosterDiv.appendChild(formPosterCloseButton);
		scrollToView('tempFormPosterDiv');
	}
}
function closeFormPoster(e) {
	formPosterDiv.innerHTML = '';
	formPosterDiv.classList.remove('formPosterDiv');
	scrollToView(e);
}

// Scrool view start
function scrollToView(e) {
	document.getElementById(e).scrollIntoView({ behavior: 'smooth' });
}
// Scrool view end
