function validateForm (){
	var name=document.getElementById("name").value;
	var email=document.getElementById("email").value;
	var phone=document.getElementById("phone").value;
	var reason=document.getElementById("reason").value;
	var info=document.getElementById("info").value;
	var questionnaire=document.getElementById("choices").value;
	var bestDay=document.getElementById("bestDay").value;
	var invalidated=false;
	if(name==""){
			invalidated=true;
		}
		else if (email==""){
			invalidated=true;
		}
		else if(phone==""){
			invalidated=true;
		}
		else if(info=""){
			invalidated=true;
		}
		else if (questionnaire!=="yes" ||questionnaire!=="no"){
			invalidated=true;
		}
		else{
			invalidated=false;
		}
		
	if (invalidated==true){
		alert("Please fill out the whole form");
	
	}
	else{
		alert("Thank you for submitting. A staff member will reach out to you shortly");	
	}
		}
		
