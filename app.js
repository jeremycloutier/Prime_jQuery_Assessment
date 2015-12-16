var counter = 0;

$(document).ready(function(){
	// When the page loads, have a button on the DOM that says 'generate'.
	$("#container").append('<button class="gen">Generate</button>');
	
	$("#container").on('click', '.gen', appendDom);
	$("#container").on('click', '.delete', deleteButton);
	$("#container").on('click', '.change', changeColor);
});


function appendDom(){
	var $el = $("#container");

	if (counter == 0) {
		$el.append("<button class='delete'>Delete</button>");
		$el.append("<button class='change'>Change</button>");
		counter++;
		$el.append("<p>" + counter + "</p>");
	} else if (counter > 0) {
		$("p").remove();
		counter++;
		$el.append("<p>" + counter + "</p>");

	}
}

function deleteButton(){
    $(".delete").remove();
}

function changeColor(){
	$(this).parent().toggleClass('active');
}