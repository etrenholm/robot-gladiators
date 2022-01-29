var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyName, enemyAttack, enemyHealth);


var fight = function() {

    // Alert players that we are starting the round
    window.alert("Welcome to Robot Gladiators!");

    // Check if player would like to fight or skip
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP; to choose.");
    console.log(promptFight);

    // if player chose to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {

        // remove enemy's health
        enemyHealth = enemyHealth - playerAttack;
        console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        // remove player's health
        playerHealth = playerHealth - playerAttack;
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }

    // If player chose to skip, then skip
    else if (promptFight === "skip" || promptFight === "SKIP") {
        var confirmSkip = window.confirm("Are you sure you'd like to quit?")
        if (confirmSkip) {
        window.alert(playerName + " has decided to skip the fight. Goodbye!");
        playerMoney = playerMoney - 2;
        console.log(playerMoney);
        }
        else {
            fight()
        }
    }

    // If player enter invalid text
    else {
        window.alert("You need to choose a valid option. Try again!");
    }

};

fight();