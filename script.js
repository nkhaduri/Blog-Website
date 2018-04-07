function activate(element_id){
	var menu_items = document.getElementsByClassName("menu-item");
	for (var i = 0; i < menu_items.length; i++) {
    	menu_items[i].classList.remove('active');
	}

	document.getElementById(element_id).classList.add('active');
	if(element_id == "categories") {
		var cat_div = document.getElementById("categories-div");
		var menu_ul = document.getElementById("menu-ul");
		if(cat_div.style.display == "block") {
			menu_ul.style.height = "24%"; 
			cat_div.style.display = "none";
		} else {
			menu_ul.style.height = "52.5%";
			cat_div.style.display = "block";
		}
	}
}