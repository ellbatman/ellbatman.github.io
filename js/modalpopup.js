//Responsive Offset of Modal for different window sizes
var offsetTop = $(window).height() * 0.040;
//calls the leanModal Function anytime a link with the rel of leanModal is called
$("a[rel*=leanModal]").leanModal({ top : offsetTop, overlay : 0.6, closeButton: ".modal_close" });

//Function to populate the project section of the modal
function populateModal(elt) {
  //Creates a variable and associates it with the id of the tag selected in the html
  //example: <div class="thread" id="senstaff">
  //var id becomes equal to senstaff
  var id = elt.parent().attr('class').split(' ')[1];
  var num = elt.parent().attr('id');
  console.log(threads[num].mainImg);
  //logs the id to the console (verifies process is working)
  console.log(id);
	//creates variables to store the id above with appended specifier like -org i.e. senstaff-org
  //Creates modal variable to store the id associated with the modal tags sub tags whenever it is displayed
	var projSide = $("#modalPopup .projectSide");
  //finds specific tages within the modal and adds css, html tags, and attributes to them - i.e. passes info from database above to modal to be displayed
	//Project Head Data//////////////////////////////////////////////////////////////////////////////////////////////////
	projSide.find('.projectHead .org').html(threads[num].org);
	projSide.find('.projectHead .title').html(threads[num].title);
	projSide.find('.projectHead .subtitle').html(threads[num].subTitle);
	projSide.find('.projectHead .cat').html(threads[num].cat);
	//Main Project Img
	projSide.find('.mainImg').css('background-image', threads[num].mainImg);
	//Project Details Data
	//Add Project Images & Descriptions
	//Append Divs to store image and text according to number of images stored in imgs matrix
	for (i = 0; i < threads[num].imgs.length; i++){
		//Adds a div to the projectImages for each image stored in the database
		$('.projectImages').append('<div class="imgDiv"><p class="imgTxt"></p></div>');
		projSide.find('.imgDiv:nth-of-type('+(i+1)+')').css('background-image', threads[num].imgs[i]);
		projSide.find('.imgDiv:nth-of-type('+(i+1)+') .imgTxt').html(threads[num].imgsTxt[i]);
	}
	//Add Additional Project Info
	for (i = 0; i < threads[num].info.length; i++) {
		projSide.find('.projectInfo p:nth-of-type('+(i+1)+')').html(threads[num].info[i]);
	}
  //Link to Google Drive Folder
  projSide.find('.gDrive').attr('href', threads[num].link);

  //Add Project Team Data
	//for loop to populate team aside with correct number of divs for team members
	for (i = 0; i < threads[num].team.length; i++) {
		$('.devSide').append('<div class="devs"><div class="devOverlay"><div class="devPic"></div></div><a target="_blank" class="devName"></a></div>');
    for (j=0; j < developers.length; j++) {
      if (developers[j].id === threads[num].team[i]) {
          $('.devs:nth-child('+(i+1)+') .devPic').css('background-image', developers[j].profilePic);
          $('.devs:nth-child('+(i+1)+') .devName').html(developers[j].name).attr('href', developers[j].linkedIn);
      }
    }
	}
}

//Function to take care of staying there if projects don't have a link
function clickable(elt) {
	return elt.attr('href') !== '#';
};

//Functions to populate team inset within modalfunction populateModal(elt) {
  /*
  function populateModal(elt) {
  //Creates a variable and associates it with the id of the tag selected in the html
  //example: <div class="thread" id="senstaff">
  //var id becomes equal to senstaff
  var id = elt.parent().attr('id');
  //logs the id to the console (verifies process is working)
  console.log(id);
  //creates a variable to store the id above with appended specifier like -org i.e. senstaff-org
  var org = projInfo[id + '-org'];
  var title = projInfo[id + '-title'];
  var cat = projInfo[id + '-cat'];
  var img = projInfo[id + '-img'];
  var imgTxt = projInfo[id + '-imgTxt'];
  var goal = projInfo[id + '-goal'];
  var link = projInfo[id + '-link'];
  //Creates modal variable to store the id associated with the modal window whenever it is displayed
  var modal = $("#modalPopup");
  //finds specific tages within the modal and adds css, html tags, and attributes to them
  //i.e. passes info from database above to modal to be displayed
  modal.find('.org').css('background-image', img);
  modal.find('.title').html(name);
  modal.find('.cat').attr('href', link);
  modal.find('.img').css('background-image', img);
  modal.find('.imgTxt').html(name);
  modal.find('.goal').attr('href', link);
  modal.find('.link').html(bio);
  }
  */
//Function to link each team members name to their LinkedIn Profile
/*
function clickable(elt) {
	return elt.attr('href') !== '#';
}

*/
