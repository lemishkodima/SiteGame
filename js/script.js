$(function(){
 $('.header_burger').on('click', function(){
     $('.header_burger, .header_menu').toggleClass('active');
     $('body').toggleClass('lock');
 }
 )

});
let = contextMenu = $("#game_s11");
let = contextMenu1 = $("#game_s12");
let = contextMenu2 = $("#game_s13");

$(function(){

    $(window).on('scroll', function() {
        var height = $(window).scrollTop();
        if (height > 1550 && contextMenu2.css('display') == 'none' && contextMenu1.css('display') == 'none') {
            $('#game_s11').show(500);
        
        } 
    });
    $("#game_s1").on('click', function(){
        contextMenu2.hide();
        contextMenu1.hide();
        contextMenu.show(500);
        console.log('sucsses')
    });
    $("#game_s2").on('click', function(){
        contextMenu.hide();
        contextMenu2.hide();
        contextMenu1.show(500);
        console.log('sucsses')
    });
    $("#game_s3").on('click', function(){
        contextMenu.hide();
        contextMenu1.hide();
        contextMenu2.show(500);
        console.log('sucsses')
    });
    $(function(){
    $('.slider_rev').slick();
});
});
// Кнопка загрузки файлов
var inputs = document.querySelectorAll( '.file' );
Array.prototype.forEach.call( inputs, function( input )
{
	var label	 = input.nextElementSibling,
		labelVal = label.innerHTML;

	input.addEventListener( 'change', function( e )
	{
		var fileName = '';
		if( this.files && this.files.length > 1 )
			fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
		else
			fileName = e.target.value.split( '\\' ).pop();

		if( fileName )
			label.querySelector( 'span' ).innerHTML = fileName;
		else
			label.innerHTML = labelVal;
	});
});

// Слайдер Продакшин
let = slide1 = $("#slide1");
let = slide2 = $("#slide2");
let = slide3 = $("#slide3");
let = slide4 = $("#slide4");

let = page1 = $("#p01");
let = page2 = $("#p02");
let = page3 = $("#p03");
let = page4 = $("#p04");

$(function(){
    $("#p01" ).on('click', function(){
        slide1.fadeIn(750);
        slide2.css("display", "none");
        slide3.css("display", "none");
        slide4.css("display", "none");
        page1.css("background","linear-gradient(180deg, #5CC1D3 0%, #006678 100%)")
        page2.css("background","Transparent")
        page3.css("background","Transparent")
        page4.css("background","Transparent")
        console.log('sucsses')
    });
    $("#p02").on('click', function(){
        slide1.css("display", "none");
        slide2.fadeIn(750);
        slide3.css("display", "none");
        slide4.css("display", "none");
        page1.css("background","Transparent")
        page2.css("background","linear-gradient(180deg, #5CC1D3 0%, #006678 100%)")
        page3.css("background","Transparent")
        page4.css("background","Transparent")
        console.log('sucsses')
    });
    $("#p03").on('click', function(){
        slide1.css("display", "none");
        slide2.css("display", "none");
        slide3.fadeIn(750);
        slide4.css("display", "none");
        page1.css("background","Transparent")
        page2.css("background","Transparent")
        page3.css("background","linear-gradient(180deg, #5CC1D3 0%, #006678 100%)")
        page4.css("background","Transparent")
        console.log('sucsses')
    });
    $("#p04").on('click', function(){
        slide1.css("display", "none");
        slide2.css("display", "none");
        slide3.css("display", "none");
        slide4.fadeIn(750);
        page1.css("background","Transparent")
        page2.css("background","Transparent")
        page3.css("background","Transparent")
        page4.css("background","linear-gradient(180deg, #5CC1D3 0%, #006678 100%)")
        console.log('sucsses')
    });
});
$(function(){
$("#p11" ).on('click', function(){
    slide1.fadeIn(750);
    slide2.css("display", "none");
    slide3.css("display", "none");
    slide4.css("display", "none");
    page1.css("background","linear-gradient(180deg, #5CC1D3 0%, #006678 100%)")
     page2.css("background","Transparent")
    page3.css("background","Transparent")
    page4.css("background","Transparent")
    console.log('sucsses')
    console.log('sucsses')
});
$("#p12").on('click', function(){
    slide1.css("display", "none");
    slide2.fadeIn(750);
    slide3.css("display", "none");
    slide4.css("display", "none");
    page1.css("background","Transparent")
    page2.css("background","linear-gradient(180deg, #5CC1D3 0%, #006678 100%)")
    page3.css("background","Transparent")
    page4.css("background","Transparent")
    console.log('sucsses')
});
$("#p13").on('click', function(){
    slide1.css("display", "none");
    slide2.css("display", "none");
    slide3.fadeIn(750);
    slide4.css("display", "none");
    page1.css("background","Transparent")
    page2.css("background","Transparent")
    page3.css("background","linear-gradient(180deg, #5CC1D3 0%, #006678 100%)")
    page4.css("background","Transparent")
    console.log('sucsses')
});
$("#p14").on('click', function(){
    slide1.css("display", "none");
    slide2.css("display", "none");
    slide3.css("display", "none");
    page1.css("background","Transparent")
    page2.css("background","Transparent")
    page3.css("background","Transparent")
    page4.css("background","linear-gradient(180deg, #5CC1D3 0%, #006678 100%)")
    slide4.fadeIn(750);
    console.log('sucsses')
});
});
// Закінчення слайдера...........................................................................

