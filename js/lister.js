var lister = function(formname){
	var methods = {};
	var button_add, button_submit, text_add;
	var uid = 1;
	var form = document.getElementById(formname);
	var inputtags = form.getElementsByTagName("input");
	for (var i = 0; i < inputtags.length; i++){
		if (inputtags[i].type == "button"){
			button_add = inputtags[i];
		}
		if (inputtags[i].type == "submit"){
			button_submit = inputtags[i];
		}
		if (inputtags[i].type == "text"){
			text_add = inputtags[i];
		}
	}

	button_add.addEventListener("click", addToList);

	methods.addToList = addToList;
	function addToList(){
		var newTextInputValue = text_add.value;
		if(newTextInputValue === "" || newTextInputValue === null){
			alert("You must enter a value!");
		}
		else{
			var newText = document.createTextNode(newTextInputValue);
			var nextRow = uid++;
			var list = form.getElementsByTagName("ul")[0];
			var li = document.createElement("li");
			li.setAttribute("id", nextRow);
			
			var newLink = document.createElement("a");
			newLink.onclick = function(){
				removeFromList(nextRow);
			};
			newLink.innerHTML = "[remove]";
			newLink.href = "#";

			var newHiddenInput = document.createElement("input");
			newHiddenInput.type = "hidden";
			newHiddenInput.setAttribute("id", formname + "[" + nextRow + "]");
			newHiddenInput.name = formname + "[" + nextRow + "]";
			newHiddenInput.value = newTextInputValue;			
			
			li.appendChild(newText);
			li.appendChild(newLink);
			li.appendChild(newHiddenInput);
			list.appendChild(li);
			
			text_add.value = "";
		}
	};
	methods.removeFromList = removeFromList;
	function removeFromList(id){
		var list = document.querySelectorAll("#" + formname + " ul li");
		var i;
		for(i = 0; li = list[i]; i++){
			if(li.id == id){
				li.parentNode.removeChild(li);
			}
		}
	};
	return methods;
};