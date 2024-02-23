//The Rock Paper Scissor Program

const getUserChoice = userInput => {
    //creating lower case for the user's input in order to use their values with no errors
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    } else {
      console.log('Error, Please enter a valid value');
    }
  };
  //Calling the function with the user input as Paper to check it's functionality
  console.log(getUserChoice('Paper'));
  
  //function with no parameters to get computer's choice
  function getComputerChoice() {
    var randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return 'rock';
        //break statement is ureachable and hence removed as the program still functions correctly
      case 1:
        return 'paper';
        //break statement is ureachable and hence removed as the program still functions correctly
      case 2:
        return 'scissors';
        //break statement is ureachable and hence removed as the program still functions correctly
    }
  }
  
  //calling the function to see if it runs
  console.log(getComputerChoice());
  
  //function to see the winner between the user and the computer
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === 'bomb') {
      return 'You won!';
    }
    if (userChoice === computerChoice) {
      return 'The game was a tie!';
    }
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    }
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    }
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    }
  }
  
  //Calling the function
  console.log(determineWinner('paper', 'scissors'));
  console.log(determineWinner('paper', 'paper'));
  console.log(determineWinner('paper', 'rock'));
  
  //PlayGame is now putting into action and calling all the functions
  const playGame = () => {
    let userChoice = getUserChoice('scissors');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  //calling the playGame function
  playGame();
  