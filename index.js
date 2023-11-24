//varible to start game
let start = true
//while loop to start the game
while(start){
//Varible for pokemon and users

let userHealth = 50
let botHealth = 50
let userenergy = 10
let botenergy = 10
//defines user and bot pokemon
let userPokemon = "squirtle"
let botPokemon = "Leafeon"
//defines attacks for user
let userattack = "Water Gun"
let botattack = "Razor leaf"
//Min and Max amount for pokemon damage
let minattack = 10
let maxattack = 15
  
let energycost = 4
//Special attacks
let specialattack = "Hydro Pump"
let enemyspecial = "Leaf Blade"
let specialmovemin = 15
let specialmovemax = 30
let specialenergy = 5
//sets player turn as true
let playersturn = true
let move
let damage
  console.clear()
  //welcome and instruction text
  console.log("Press 1 , 2, or 3 to select move")
console.log("Welcome Trainer!")
  console.log("You are a finalist in the pokemon tournament! ")
//while loop to check if health is above 0
while(userHealth > 0 && botHealth > 0 ){
  if (playersturn){
    userenergy +=2
    userenergy = Math.min(userenergy, 10)
    console.log(` Your ${userPokemon} has :\n${userHealth} HP\n${userenergy} Energy`)
    console.log(`The Enemy ${botPokemon} has :\n${botHealth} HP\n${botenergy} Energy `)
    console.log(`What move do you want to use\n1) ${userattack} cost : 4\n2) ${specialattack} cost: 5 \n3) rest`)
//askes user for attack 
    while(true){
      move = Number(prompt("What Move do you want to use? "))
      if (isNaN(move)){
        console.log("Invailad")
      } else if (move < 1 || move > 3 ){
        console.log("Invaild")
      } else{
        break;
      }
    }
//different cases for the attacks 
    switch (move) {
        //code for water Gun
      case 1:
        damage = Math.floor(Math.random() * (maxattack - minattack + 1))  + minattack
        botHealth -= damage
        userenergy -= energycost
        console.log(`${userPokemon} used ${userattack}!\n  The opponent ${botPokemon} took ${damage} damage`)
        console.log("-----------------------------------------------------------------")

        break;

        //code for special attack
      case 2:
        if (userenergy >= specialenergy){
          damage = Math.floor(Math.random() * (specialmovemax - specialmovemin) +1 )  + specialmovemin
          botHealth -= damage
          userenergy -= specialenergy
           console.log(`${userPokemon} used ${specialattack}!\n  The opponent ${botPokemon} took ${damage} damage`)
        }else{
          console.log(`${userPokemon} Did not have enough energy`)
        }
        console.log("-----------------------------------------------------------------")

        break;

        //Code for rest
      case 3: 
        userenergy += 2
        userenergy = Math.min(userenergy, 10)
        console.log("You rested your pokemon +2 energy")

console.log("-----------------------------------------------------------------")
        
    }

    
    //bot code
  } else if (!playersturn){
    botenergy += 2
    botenergy = Math.min(botenergy, 10)
    //Bot code to randomly pick between three attacks
    move = Math.ceil(Math.random() * 3)

    switch (move) {
        //bot attack
      case 1:
        damage = Math.floor(Math.random() * (maxattack - minattack + 1))  + minattack
        userHealth -= damage
        botenergy -= energycost
        console.log(` The Enemy ${botPokemon} used ${botattack}!\n ${userPokemon} took ${damage} damage`)
        console.log("-----------------------------------------------------------------")

        break;


      case 2:
        if (userenergy >= specialenergy){
          damage = Math.floor(Math.random() * (specialmovemax - specialmovemin) +1 )  + specialmovemin
          userHealth -= damage
          botenergy -= specialenergy
           console.log(`${botPokemon} used ${enemyspecial}!\n  The opponent ${userPokemon} took ${damage} damage`)
        }else{
          console.log(`${botPokemon} Did not have enough energy`)
        }
        console.log("-----------------------------------------------------------------")

        break


      case 3: 
        botenergy += 2
        botenergy = Math.min(botenergy, 10)
        console.log("Enemy rested their pokemon +2 energy")
        console.log("-----------------------------------------------------------------")


  }
}
//sees if it the users turn
  playersturn = !playersturn
}
//end messages
if(userHealth <= 0 ){
  console.log("You tried your hardest but you lose in the finals  ")
} else {
  console.log("You lift the trophey and prove that you are the best trainer in the world!")
}
  //ask user if they want to play again. Triggers the start while loop
  start = confirm("Do you want to play again? ")
}
