// Check off Specific Todo list
$("ul").on("click", "li", function(){
  // If li is gray
  // if($(this).css("color") === "rgb(128, 128, 128)") {
    // turn in black
    // $(this).css({
    //    color: "black",
    //    textDecoration: "none"
  //   });
  // }

  //else
  // else {
    // turn it gray
  //   $(this).css({
  //      color: "gray",
  //      textDecoration: "line-through"
  //   });
  // }

  // Alternative Method
  // Create a class for the color in Css and just toogle it in here
 $(this).toggleClass("completed");

});


// Click on Span X to delete todos
$("ul").on("click", "span", function(event) {
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation();
})

$("input[type='text']").keypress(function(event) {
  if (event.which === 13) {
    // Grabbing new todo text from input
    var todoText = $(this).val();
    $(this).val("");
    // Create new li and add to ul in todo
    $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoText + "</li>");
  }
});


$(".fa-plus-square").click(function() {
   $("input[type='text']").fadeToggle();
});
