var lister = function(addButton, listname, input, formname){

	document.getElementById(addButton).addEventListener("click", addItem);
	var methods = {};
	var uid = 1;

    methods.addItem = addItem;
    function addItem(){
    	var id = uid++;
		var li = document.createElement("li");
		var removelink = document.createElement("a");
		var hiddeninput = document.createElement("input");
		hiddeninput.type = "hidden";
		hiddeninput.setAttribute("id", "input_" + id);
		hiddeninput.name = "list[" + id + "]";
		li.setAttribute("id", listname + "_" + id);
		removelink.onclick = function(){removeitem(id);};
		removelink.innerHTML = "[remove]";
		removelink.href = "#";
		var textbox = document.getElementById(input).value;
		var text = document.createTextNode(textbox);
		li.appendChild(text);
		li.appendChild(removelink);
		li.appendChild(hiddeninput);
		var listItems = document.getElementById(listname);
		listItems.appendChild(li);
		document.getElementById("input_" + id).value = textbox;
		document.getElementById(input).value = "";
    };

    methods.removeitem = removeitem;
    function removeitem(id){
    	var item = document.getElementById(listname + "_" + id)
		item.remove();
    };
    return methods;
};