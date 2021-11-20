$('.round').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    $('.arrow').toggleClass('bounceAlpha');
});

// function Next_Page(self){
//     var target = document.querySelector('body');
//     if(selt.value ==='Male'){
//         <a href ="Male.hmtl"></a>
//     }
//     else if(selt.value ==='Female'){
//         <a href ="Male.hmtl"></a>
//     }
//     else if(selt.value ==='Unisex'){
//         <a href ="Male.hmtl"></a>
//     }
// }