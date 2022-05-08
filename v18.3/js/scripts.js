function showDescription(descript){
	$("#description").html("Description:" + descript)
	
}

function hideDescription(){
	$("#description").empty()
}

function validate(){
	
	var temp = $("#textDOB").val();
	var d = new Date(temp);
	if(d >= new Date()){
		alert("Date of Birth is not valllllllid. Date has to be before today");
		return false;
	}
	
	var n = $("#phone").val();
	if (n.length != 10){
		alert("Phone number is not valid. It has to be 10 digits.")
		return false;
	}
	
	if(isNaN(n)){
		alert("How come your phone number is not consist of numbers...?")
		return false;
	}
	
	
}