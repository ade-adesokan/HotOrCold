var display = document.getElementById("display");
var user_input = document.getElementById("user-guess");
var submit = document.getElementsByTagName("button")[0];
var new_game = document.getElementsByTagName("button")[1];



var game={

 
  comp_choice: Math.round(Math.random()*100),

  previous_guess: null,

  new_guess: "",

  check_number: function(){
    this.new_guess=parseInt(user_input.value);
    console.log(this.new_guess);
    
    if (isNaN(this.new_guess) || this.new_guess > 100 || this.new_guess<0 ){
      display.value= "Not valid, try number between 0 and 100";
      return;
    }
    
    user_input.value="";
      if(game.comp_choice!==this.new_guess) {
      if(game.previous_guess===null){
        game.previous_guess=this.new_guess;
        display.value= "Getting Hotter, try again";
        
      }
      else if (this.new_guess===game.previous_guess) {
        display.value= "Thought I told you that wasn't the number!!";
      }
      else{
        if (Math.abs(this.new_guess-game.comp_choice)<Math.abs(game.previous_guess-game.comp_choice)) {
          display.value= "Getting Hotter, you are closer";
          
        }
        else if (Math.abs(this.new_guess-game.comp_choice)>Math.abs(game.previous_guess-game.comp_choice)) {
          display.value= "Getting Colder, you are getting far";
         
        }
        else {
          display.value= "You are neither Hot nor Cold";
        }
      }
      
      game.previous_guess=this.new_guess;
    } 
    else {
      display.value= "You got it right";
      submit.classList.toggle("end-mode");
    }
  }



};





console.log(game.comp_choice);
submit.addEventListener("click",game.check_number);
