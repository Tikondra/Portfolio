if(window.matchMedia('(min-width: 768px)').matches){
	$(document).ready(function(){
    $(".page-header__btn").click(function(){
        $("#panel").slideToggle("slow");
        $(this).toggleClass("active");
    });
	});
}

