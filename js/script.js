
(function toggleMenu(){

if ( window.innerWidth >= 748 ){

    list[0].style.display = "block"
} else {

    let list = document.querySelectorAll('.ul-nav-bar'),
        menu = document.querySelectorAll('.menu-nav-bar');
        menu[1].addEventListener('click', function() {  
        
            if (  list[0].style.display === "block" ) {
                list[0].style.display = "none";
            } else {
                list[0].style.display = "block"
            }
    });

};

}() );

	


