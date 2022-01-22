$( window ).on( "load", function () {
   "use strict";
	////////////////////////////////////////////////////
    // cofigure div heights
    var containerheight;
    var $header = $('.header');
    var $container = $('#pageWrapper');
    var $innerWrapper = $('.innerWrpper');
	var footerHeight = $('#footer').height();
	var scaling = window.matchMedia('(max-width: 767px)').matches ? 25 : 26;
    $(window).on('resize', function () {
        containerheight = $(this).height() - $header.height() - footerHeight - scaling;
        $container.height($(this).height());
		$innerWrapper.css({'min-height' : containerheight});
    }).trigger('resize');
	////////////////////////////////////////////////////
	
	//Add Inactive Class To All Accordion Headers
	$('.accordion-header').toggleClass('inactive-header');
	//Set The Accordion Content Width
	var contentwidth = $('.accordion-header').width();
	$('.accordion-content').css({'width' : contentwidth });
	//Open The First Accordion Section When Page Loads
	$('.accordion-header').first().toggleClass('active-header').toggleClass('inactive-header');
	$('.accordion-content').first().slideDown().toggleClass('open-content');
	// The Accordion Effect
	$('.accordion-header').click(function () {
		if($(this).is('.inactive-header')) {
			$('.active-header').toggleClass('active-header').toggleClass('inactive-header').next().slideToggle().toggleClass('open-content');
			$(this).toggleClass('active-header').toggleClass('inactive-header');
			$(this).next().slideToggle().toggleClass('open-content');
		}
		else {
			$(this).toggleClass('active-header').toggleClass('inactive-header');
			$(this).next().slideToggle().toggleClass('open-content');
		}
	});
	return false;
});
//////////////////////////////////hamburger////////////////////////////////////
var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
      forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener("click", function() {
          this.classList.toggle("is-active");
        }, false);
      });
    }
/////////////////////////////////////////////////////////////////////
///////////////////////////////offside menu/////////////////////////////////////
var myOffside = offside( '#sideMenu', {

      // Global offside options: affect all offside instances
      slidingElementsSelector: '#my-content-container', // String: Sliding elements selectors ('#foo, #bar')
      disableCss3dTransforms: false,                    // Disable CSS 3d Transforms support (for testing purposes)
      debug: true,                                      // Boolean: If true, print errors in console

      // Offside instance options: affect only this offside instance
      buttonsSelector: '.hamburger, .site-overlay',   // String: Offside toggle buttons selectors ('#foo, #bar')
      slidingSide: 'right',                             // String: Offside element pushed on left or right
      init: function(){$('#sideMenu').hide()},                               // Function: After init callback
      beforeOpen: function(){$('#sideMenu').show()},                         // Function: Before open callback
      afterOpen: function(){},                          // Function: After open callback
      beforeClose: function(){},                        
      afterClose: function(){
		  $('.hamburger').removeClass('is-active');
	  	  setTimeout(function(){ $('#sideMenu').hide() }, 100);
	  	}, // Function: After close callback    
  	});
//var overlay = document.querySelector('.site-overlay').addEventListener( 'click', offside.factory.closeOpenOffside );
////////////////////////////////////////////////////////////////////
function sendPin() {
	alertify.alert('<div class="row mt-4 centerPopUp">ادخل الرمز الذي سيصلك الآن</div><div class="row mt-5"><div class="contanierInputField"><input type="text" name="name" class="inputField"></div></div><div class="contanierEnterBtn mt-5 w-100 mb-3"><a href="javascript:void(0)" id="enterBtn"><img alt="ادخال" src="images/enter.png"></a></div>').set({
		onshow: null
	});
}
function chooseOp(){
	alertify.alert('<div class="row flex-row-reverse pt-3"><div class="col-12"><label class="chooseOpLabel text-center">اختر المشغل الخاص بك </label></div></div><div class="row flex-row-reverse mt-3"><div class="col-12"><div class="opOption"><input type="radio" name="paymentWay" value="" id="zain"><label for="zain">Zain</label></div><div class="opOption"><input type="radio" name="paymentWay" value="" id="orange"><label for="orange">Orange</label></div><div class="opOption"><input type="radio" name="paymentWay" value="" id="umnia"><label for="umnia">Umnia</label></div></div></div><div class="contanierSaveBtn mt-4 w-100"><a href="javascript:void(0)" class="subButtons" onClick="sendMo()"><img alt="تاكيد" src="images/sure.png"></a></div>').set({
		onshow: null
	});
}
function sendMo(){
	alertify.alert('<div class="row pt-3"><div class="MOTxt"><p>ارسل <span>xxxx</span> الى <span>xxxx</span></p></div></div><div class="contanierSubBtn mt-4 w-100"><a href="javascript:void(0)" class="subButtons" onClick="sendVerfiyPin()"><img alt="ارسل" src="images/send.png"></a></div>').set({
		onshow: null
	});
}
function sendVerfiyPin(){
	alertify.alert('<div class="row pt-4"><div class="col-12"><input type="text" name="pinCode" class="pinInput" placeholder="XXXXXXX"></div></div><div class="contanierSubBtn mt-5 w-100"><a href="javascript:void(0)" class="subButtons"><img alt="ارسل" src="images/send.png"></a></div>').set({
		onshow: null
	});
}
function closeAlertify() {
	alertify.closeAll()
}
///////////////////////////////////////////////////////
