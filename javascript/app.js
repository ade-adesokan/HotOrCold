//MAIN OBJECT//

var game={  

  //Object keys and values

  user_input: document.getElementById("user-guess"),
  submit: document.getElementsByTagName("button")[1],
  new_game: document.getElementsByTagName("button")[0],
  mercury: document.getElementById("mercury"),  
  previous_guess: null,
  new_guess: "",
  comp_choice:"",


  //Initializing Method

   init: function() {
    //set random number
    game.comp_choice= Math.round(Math.random()*100);
    game.submit.classList.remove("end-mode");
    game.mercury.style.width="0px";
  },

  //Thermometer method
  thermometer : function(input){
    var x = (100-Math.abs(input-game.comp_choice)) + "%";
    //Set mercury level in thermometer
    game.mercury.style.width=x; 
  },  

  //Main game function
  check_number: function(){
    //Check if user input is valid
    this.new_guess=parseInt(game.user_input.value);
    if (isNaN(this.new_guess) || this.new_guess > 100 || this.new_guess<0 ){
      console.log('not a number');
      // game.displays.value= "Not valid, try number between 0 and 100";
      return;
    }
    // To always clear input box after submit button is hit
    game.user_input.value="";

      //What happens when user doesn't guess the random number    
      if(game.comp_choice!==this.new_guess) {

        //To always make the first guess hotter considering the previous guess is always null from the start
        if(game.previous_guess===null){
          game.previous_guess=this.new_guess;         
          game.thermometer(this.new_guess);                    
        } 

        //If user inputs the same guess consecutively  
        // else if (this.new_guess===game.previous_guess) {
        //   game.displays.value= "Thought I told you that wasn't the number!!";
        // } 

        //Subsequent guesses after the first guess
        else{

          //When the guess is closer to the random number
          if (Math.abs(this.new_guess-game.comp_choice)<Math.abs(game.previous_guess-game.comp_choice)) {
            // game.displays.value= "Getting Hotter, you are closer";
            game.thermometer(this.new_guess);            
          }

          //When guess is farther away
          else if (Math.abs(this.new_guess-game.comp_choice)>Math.abs(game.previous_guess-game.comp_choice)) {
            // game.displays.value= "Getting Colder, you are getting far";
            game.thermometer(this.new_guess);                   
          }

          //When there isn't any difference in the proximity to the random number
          else {
            // game.displays.value= "You are neither Hot nor Cold";
          }
        }
      //To always push the new guess into memory of old guess
      game.previous_guess=this.new_guess;
    } 

    //When user gets the guess right
    else {
      $('#my-modal').modal('show');
      game.submit.classList.toggle("end-mode");
      game.thermometer(this.new_guess);     
    }
  }
};

//to load script on window load
window.onload= game.init;

document.getElementById("input-form").onsubmit = function () {
    return false;
};  

//Action of submit button
game.submit.addEventListener("click",game.check_number);
game.user_input.addEventListener('keyup', function (event) {
  if (event.which === 13) {
    game.check_number();
  }
});
//Action of New Game button
game.new_game.addEventListener("click",game.init);

