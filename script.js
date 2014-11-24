var display = document.getElementById("display");
var user_input = document.getElementById("user-guess");
var submit = document.getElementsByTagName("button")[0];
var new_game = document.getElementsByTagName("button")[1];
var comp_choice= Math.round(Math.random()*100);
var previous_guess=null;
var new_guess;
console.log("computer choice is: "+comp_choice);

var check_number= function(){
	new_guess=parseInt(user_input.value);
	
	if(isNaN(new_guess) || new_guess > 100 || new_guess<0 ){
		display.value= "Not a valid number try again";
		return;
	}
	console.log(new_guess);
	user_input.value="";

	if(comp_choice!==new_guess) {
		if(previous_guess===null){
			previous_guess=new_guess;
			display.value= "Getting Hotter, try again";
		}
		else if (new_guess===previous_guess) {
			display.value= "Thought I told you that wasn't the number!!";
		}
		else{
			if (Math.abs(new_guess-comp_choice)<Math.abs(previous_guess-comp_choice)) {
				display.value= "Getting Hotter, you are closer";
			}
			else if (Math.abs(new_guess-comp_choice)>Math.abs(previous_guess-comp_choice)) {
				display.value= "Getting Colder, you are getting far";
			}
			else {
				display.value= "You are neither Hot nor Cold";
			}
		}
		previous_guess=new_guess;
	} 
	else {
		display.value= "You got it right";
		submit.classList.toggle("end-mode");
	}
};

submit.addEventListener("click",check_number);
