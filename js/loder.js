$(document).ready(function(){

    $('.modal').modal();
    $('.sidenav').sidenav();
   $('.slider').slider({full_width:true});
   $('.parallax').parallax();
    

})

function toggleModal(){
    var instance = M.Modal.getInstance($('#modal3'))
    instance.open();
}

