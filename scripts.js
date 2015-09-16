var counter = 0;


$(document).ready(function(){
	event.preventDefault();

//on button click all this happens
$(".generateButton").on("click", function() {
	
	var $div = $("<div class=newDiv><p>" + "Line #" + counter + "</p>" + 
		"<button class=changeColor>Change Color</button><br /><button class=removeAll>Remove</button></div>");

//number of clicks counter
	counter++;

//placing the new div after the button, so that it doesn't become part of the buttom

//problem when clicking the generate button multiple times multiple new divs are created and things get messy

//was able to clean up the list of multiple new divs, I think I would need to create a remove function to somehow get rid of the previous one when a new one is displayed
	
	$(".generateButton").after($div);


//change background color button
	$('.changeColor').on('click', function() {
		$(this).parent().css('background', '#CC66FF');
	})

//remove div button
	$('.removeAll').on('click', function(){
      $(this).parent().remove();
  });
}); 

});