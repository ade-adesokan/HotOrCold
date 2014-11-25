var game={  

  displays: document.getElementById("display"),
  user_input: document.getElementById("user-guess"),
  submit: document.getElementsByTagName("button")[0],
  new_game: document.getElementsByTagName("button")[1],
  mercury: document.getElementById("mercury"),
  comp_choice: Math.round(Math.random()*100),
  previous_guess: null,
  new_guess: "",

  thermometer : function(input){
  var x = ((100-Math.abs(input-game.comp_choice))*240)/100+ "px";
  console.log(x);
  game.mercury.style.width=x; 
  },  

  check_number: function(){

    this.new_guess=parseInt(game.user_input.value);
    if (isNaN(this.new_guess) || this.new_guess > 100 || this.new_guess<0 ){
      game.displays.value= "Not valid, try number between 0 and 100";
      return;
    }
    
    game.user_input.value="";
      if(game.comp_choice!==this.new_guess) {
        
        if(game.previous_guess===null){
          game.previous_guess=this.new_guess;
          game.displays.value= "Getting Hotter, try again"; 
          
          game.thermometer(this.new_guess);          
        }

        else if (this.new_guess===game.previous_guess) {
          game.displays.value= "Thought I told you that wasn't the number!!";
        }

        else{

          if (Math.abs(this.new_guess-game.comp_choice)<Math.abs(game.previous_guess-game.comp_choice)) {
            game.displays.value= "Getting Hotter, you are closer";

            game.thermometer(this.new_guess);            
          }

          else if (Math.abs(this.new_guess-game.comp_choice)>Math.abs(game.previous_guess-game.comp_choice)) {

            game.displays.value= "Getting Colder, you are getting far";

            game.thermometer(this.new_guess);                   
          }

          else {
            game.displays.value= "You are neither Hot nor Cold";
          }

        }
      
      game.previous_guess=this.new_guess;

    } 

    else {
      game.displays.value= "You got it right";
      game.submit.classList.toggle("end-mode");

      game.thermometer(this.new_guess);      

    }

  }

};

console.log(game.comp_choice);
game.submit.addEventListener("click",game.check_number);



