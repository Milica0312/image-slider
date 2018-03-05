$(".start").click(function(){
    $(".biggerw").addClass('prikaz');
});
$(".next").click(function(){
        $('.drzac').animate({ marginLeft: '-=100%'}, 1000);
    });
$(".prev").click(function(){
        $('.drzac').animate({ marginLeft: '+=100%'}, 1000);
});