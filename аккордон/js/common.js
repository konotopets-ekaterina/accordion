let accordion = document.querySelector(".accordion");
accordion.addEventlistener("click", function(event) {
	let currentTarget = event.target;

	if(currentTarget.classlist.contains("accordion__item-header")) {

		if(currentTarget.nextElementSibling.classlist.contains("open")) {

		} else {
			let = accordionOpen = document.querySelector(".accordion__item-body.open");
			accordionOpen.classlist.remove("open");
		
		currentTarget.nextElementSibling.classlist.toggle("open");
		}
	}
});