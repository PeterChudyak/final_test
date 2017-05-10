console.log('HELO JS');
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
  $('[data-toggle="popover"]').popover()
})


// $(document).ready(function(){
// $('#menu > ul > li >a').each(function () {
//  if($(this).attr('href') == location.href) $(this).addClass('Active');
// });
// });

var page = location.hash;


  if (page == "#part2") {
   document.getElementsByClassName('page').style="color:red;";
}
 
