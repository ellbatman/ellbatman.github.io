//https://github.com/liddiard/yagsa - Grab Google Sheets Data
//THis stuff below isn't working, need to use stuff above
Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vTRaoEG520W4d_ny5vjTADiB-eXsKUagqIUPDb_xljD-HZNu862GXFqQX2RV50G_bshucdcQOcuRmPE/pub?output=csv", {
	download: true,
	complete: function(results) {
		console.log(results);
	}
});

var developers = [
	//Luke Bateman
	{
		id: 'luke',
		name: 'Luke Bateman',
		profilePic: 'url(images/projects/senstaff/prototype1.jpg)',
		linkedIn: 'https://www.linkedin.com/in/luke-bateman-245226a0/',
		blurb: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias quae inventore fuga similique accusamus soluta quibusdam nostrum veniam minima, laboriosam numquam, quis deleniti velit id porro maxime nobis. Voluptatum, nulla.'
	},
	//Lei Luo
	{
		id: 'lei',
		name: 'Lei Luo',
		profilePic: 'url(images/projects/senstaff/prototype1.jpg)',
		linkedIn: 'https://www.linkedin.com/in/luke-bateman-245226a0/',
		blurb: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias quae inventore fuga similique accusamus soluta quibusdam nostrum veniam minima, laboriosam numquam, quis deleniti velit id porro maxime nobis. Voluptatum, nulla.'
	},
	//Lilit Balagyozyan
	{
		id: 'lilit',
		name: 'Lilit Balagyozyan',
		profilePic: 'url(images/projects/senstaff/prototype1.jpg)',
		linkedIn: 'https://www.linkedin.com/in/luke-bateman-245226a0/',
		blurb: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias quae inventore fuga similique accusamus soluta quibusdam nostrum veniam minima, laboriosam numquam, quis deleniti velit id porro maxime nobis. Voluptatum, nulla.'
	},
	//Sean Alderdice
	{
		id: 'sean',
		name: 'Sean Alderdice',
		profilePic: 'url(images/projects/senstaff/prototype1.jpg)',
		linkedIn: 'https://www.linkedin.com/in/luke-bateman-245226a0/',
		blurb: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias quae inventore fuga similique accusamus soluta quibusdam nostrum veniam minima, laboriosam numquam, quis deleniti velit id porro maxime nobis. Voluptatum, nulla.'
	},
	//Emil Andreasan
	{
		id: 'emil',
		name: 'Emil Andreasan',
		profilePic: 'url(images/projects/senstaff/prototype1.jpg)',
		linkedIn: 'https://www.linkedin.com/in/luke-bateman-245226a0/',
		blurb: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias quae inventore fuga similique accusamus soluta quibusdam nostrum veniam minima, laboriosam numquam, quis deleniti velit id porro maxime nobis. Voluptatum, nulla.'
	},
	//Jack Yang
	{
		id: 'jack',
		name: 'Jack Yang',
		profilePic: 'url(images/projects/senstaff/prototype1.jpg)',
		linkedIn: 'https://www.linkedin.com/in/luke-bateman-245226a0/',
		blurb: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias quae inventore fuga similique accusamus soluta quibusdam nostrum veniam minima, laboriosam numquam, quis deleniti velit id porro maxime nobis. Voluptatum, nulla.'
	},

]
var threads = [
	//senstaff
	{
		id: 'senstaff',
		title: 'The Senstaff',
		subTitle: 'I am a subtitle!',
		mainImg: 'url(images/projects/senstaff/prototype1.jpg)',
		org: 'Programs in Design & Innovation',
		cat: 'Product',
		imgs: ['url(images/projects/senstaff/prototype1.jpg)',
		'url(images/projects/senstaff/working.jpg)'],
		imgsTxt: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'],
		info: ['rit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'icia deserunt mollit anim id est laborum.', 'laborum.'],
		link: 'https://drive.google.com/open?id=0B32gQGnV1_U-UVdaT0tockxDQUk',
		team: ['luke', 'emil', 'jack']
	},
	//doorstop
	{
		id: 'doorstop',
		title: 'PDI Doorstop',
		subTitle: 'I am a subtitle!',
		mainImg: 'url(images/projects/senstaff/prototype1.jpg)',
		org: 'Programs in Design & Innovation',
		cat: 'Product',
		imgs: ['url(images/projects/senstaff/prototype1.jpg)',
		'url(images/projects/senstaff/working.jpg)'],
		imgTxt: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'],
		info: ['rit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'icia deserunt mollit anim id est laborum.', 'laborum.'],
		link: 'https://drive.google.com/open?id=0B32gQGnV1_U-UVdaT0tockxDQUk',
		team: ['luke', 'emil', 'jack']
	},
	{
		id: 'doorstop',
		title: 'PDI Doorstop',
		subTitle: 'I am a subtitle!',
		mainImg: 'url(images/projects/senstaff/prototype1.jpg)',
		org: 'Programs in Design & Innovation',
		cat: 'Product',
		imgs: ['url(images/projects/senstaff/prototype1.jpg)',
		'url(images/projects/senstaff/working.jpg)'],
		imgTxt: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'],
		info: ['rit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'icia deserunt mollit anim id est laborum.', 'laborum.'],
		link: 'https://drive.google.com/open?id=0B32gQGnV1_U-UVdaT0tockxDQUk',
		team: ['luke', 'emil', 'jack']
	},
	{
		id: 'doorstop',
		title: 'PDI Doorstop',
		subTitle: 'I am a subtitle!',
		mainImg: 'url(images/projects/senstaff/prototype1.jpg)',
		org: 'Programs in Design & Innovation',
		cat: 'Product',
		imgs: ['url(images/projects/senstaff/prototype1.jpg)',
		'url(images/projects/senstaff/working.jpg)'],
		imgTxt: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'],
		info: ['rit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'icia deserunt mollit anim id est laborum.', 'laborum.'],
		link: 'https://drive.google.com/open?id=0B32gQGnV1_U-UVdaT0tockxDQUk',
		team: ['luke', 'emil', 'jack']
	},
	{
		id: 'doorstop',
		title: 'PDI Doorstop',
		subTitle: 'I am a subtitle!',
		mainImg: 'url(images/projects/senstaff/prototype1.jpg)',
		org: 'Programs in Design & Innovation',
		cat: 'Product',
		imgs: ['url(images/projects/senstaff/prototype1.jpg)',
		'url(images/projects/senstaff/working.jpg)'],
		imgTxt: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'],
		info: ['rit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'icia deserunt mollit anim id est laborum.', 'laborum.'],
		link: 'https://drive.google.com/open?id=0B32gQGnV1_U-UVdaT0tockxDQUk',
		team: ['luke', 'emil', 'jack']
	},
	{
		id: 'doorstop',
		title: 'PDI Doorstop',
		subTitle: 'I am a subtitle!',
		mainImg: 'url(images/projects/senstaff/prototype1.jpg)',
		org: 'Programs in Design & Innovation',
		cat: 'Product',
		imgs: ['url(images/projects/senstaff/prototype1.jpg)',
		'url(images/projects/senstaff/working.jpg)'],
		imgTxt: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'],
		info: ['rit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'icia deserunt mollit anim id est laborum.', 'laborum.'],
		link: 'https://drive.google.com/open?id=0B32gQGnV1_U-UVdaT0tockxDQUk',
		team: ['luke', 'emil', 'jack']
	},
	{
		id: 'doorstop',
		title: 'PDI Doorstop',
		subTitle: 'I am a subtitle!',
		mainImg: 'url(images/projects/senstaff/prototype1.jpg)',
		org: 'Programs in Design & Innovation',
		cat: 'Product',
		imgs: ['url(images/projects/senstaff/prototype1.jpg)',
		'url(images/projects/senstaff/working.jpg)'],
		imgTxt: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'],
		info: ['rit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'icia deserunt mollit anim id est laborum.', 'laborum.'],
		link: 'https://drive.google.com/open?id=0B32gQGnV1_U-UVdaT0tockxDQUk',
		team: ['luke', 'emil', 'jack']
	},
	{
		id: 'doorstop',
		title: 'PDI Doorstop',
		subTitle: 'I am a subtitle!',
		mainImg: 'url(images/projects/senstaff/prototype1.jpg)',
		org: 'Programs in Design & Innovation',
		cat: 'Product',
		imgs: ['url(images/projects/senstaff/prototype1.jpg)',
		'url(images/projects/senstaff/working.jpg)'],
		imgTxt: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'],
		info: ['rit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'icia deserunt mollit anim id est laborum.', 'laborum.'],
		link: 'https://drive.google.com/open?id=0B32gQGnV1_U-UVdaT0tockxDQUk',
		team: ['luke', 'emil', 'jack']
	},
	{
		id: 'doorstop',
		title: 'PDI Doorstop',
		subTitle: 'I am a subtitle!',
		mainImg: 'url(images/projects/senstaff/prototype1.jpg)',
		org: 'Programs in Design & Innovation',
		cat: 'Product',
		imgs: ['url(images/projects/senstaff/prototype1.jpg)',
		'url(images/projects/senstaff/working.jpg)'],
		imgTxt: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'],
		info: ['rit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'icia deserunt mollit anim id est laborum.', 'laborum.'],
		link: 'https://drive.google.com/open?id=0B32gQGnV1_U-UVdaT0tockxDQUk',
		team: ['luke', 'emil', 'jack']
	},
	{
		id: 'doorstop',
		title: 'PDI Doorstop',
		subTitle: 'I am a subtitle!',
		mainImg: 'url(images/projects/senstaff/prototype1.jpg)',
		org: 'Programs in Design & Innovation',
		cat: 'Product',
		imgs: ['url(images/projects/senstaff/prototype1.jpg)',
		'url(images/projects/senstaff/working.jpg)'],
		imgTxt: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'],
		info: ['rit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'icia deserunt mollit anim id est laborum.', 'laborum.'],
		link: 'https://drive.google.com/open?id=0B32gQGnV1_U-UVdaT0tockxDQUk',
		team: ['luke', 'emil', 'jack']
	},

];
//Creates threads equal to the amount stored in the threads array and assigns them ids associated with their stored id variable
for (i = 0; i < threads.length; i++) {
	$('.threads').append('<div class="thread js-tilt"><a rel="leanModal" onclick="populateModal($(this)); return true;" class="threadLink mainImg" href="#modalPopup"></a><div class="threadDetails"><a rel="leanModal" onclick="populateModal($(this.parents); return true;" class="threadLink threadTitle" href="#modalPopup"></a><a rel="leanModal" onclick="populateModal($(this)); return true;" class="threadLink threadOrg" href="#"></a><div></div><a rel="leanModal" onclick="populateModal($(this)); return true;" class="threadLink threadCat" href="#"></a></div></div>');

	$('.thread:nth-of-type('+(i+1)+')').addClass(threads[i].id).attr('id', i);
	$('.thread:nth-of-type('+(i+1)+') .mainImg').css('background-image', threads[i].mainImg);
	$('.thread:nth-of-type('+(i+1)+') .threadCat').html(threads[i].cat);
	$('.thread:nth-of-type('+(i+1)+') .threadTitle').html(threads[i].title);
	$('.thread:nth-of-type('+(i+1)+') .threadOrg').html(threads[i].org);
}

//Add Dynamic Content (Could Have) http://www.developphp.com/video/JavaScript/Scroll-Load-Dynamic-Content-When-User-Reach-Bottom-Ajax

$(window).scroll(function (event) {
	var distanceScrolled = $(window).scrollTop();
	if (distanceScrolled > 240) {
		$('.navBar').addClass('stickyNav');
	} else {
		$('.navBar').removeClass('stickyNav');

	}
});
$(function () {
    var tilt = $('.js-tilt').tilt(
			{
				maxTilt:        20,
				perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
				easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
				scale:          1.05,      // 2 = 200%, 1.5 = 150%, etc..
				speed:          300,    // Speed of the enter/exit transition.
				transition:     true,   // Set a transition on enter/exit.
			}
		);
});




// KONAMI Code!
/*
var kkeys = [];
var konami = "38,38,40,40,37,39,37,39,66,65";

$(document).keydown(function(e) {
  kkeys.push( e.keyCode );
  if ( kkeys.toString().indexOf( konami ) >= 0 ){
    $(document).unbind('keydown',arguments.callee);

    // Add your own easter egg here!!
    $('canvas').fadeIn('fast');
  }
});
/*
$('.projectMenu li:nth-child(1)').hover(function () {
	$('.aboutUs').show();} , function () {
		$('.aboutUs').hide();
});

$('.organizeMenu li:nth-child(2) h2').hover(function () {
	$('.ourOrganization').show();} , function () {
		$('.ourOrganization').hide();
});


/* On scroll window function
$(window).on('scroll',function(){
	var scrollposition = $(window).scrollTop();

	var var1 =
	$('body').css('background','linear-gradient(to bottom, rgb('+var1+','+var2+','+var3+'))');
});
*/
