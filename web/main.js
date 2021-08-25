function generate() {
	var element =  document.getElementById("data").value;
	var regex = element.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
	if (regex == null) {
		return false;
	} else {
		var data = document.getElementById("data").value;
		eel.generate(data)(setOutput);
	}
}

function setOutput(Text) {
	document.getElementById("data").value = Text;
	var copyText = Text;
	navigator.clipboard.writeText(copyText);
  	$(".notify").toggleClass("active");
  	$("#notifyType").toggleClass("success");
  	setTimeout(function(){
    	$(".notify").removeClass("active");
    	$("#notifyType").removeClass("success");
  	},2500);
}


function clean() {
	document.getElementById("form_data").reset();
}


function repository() {
	window.open('https://github.com/Danushka-Madushan', '_blank');
}
