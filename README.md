# The-Pig-Game 🐷

![Pig-Game](https://user-images.githubusercontent.com/5465320/193353083-2d9459f5-e74d-49e6-bdc0-a5e0c74953c9.png)

---
## Description:
A simple game, played with one die, which requires a score sheet. Each player in turn throws the die and continues to throw the die until either a 1 is thrown or they decide to stop. If a 1 is thrown they score nothing for that turn. If they elect to stop before a 1 is thrown they score the total of the numbers thrown in that turn. The scores are noted for each turn and the player who obtains a total score over 100, wins the game, provided they are not then out-scored by a subsequent player who has thrown one fewer rolls and still has a turn left.

---
## Rules:
- The game has 2 players, playing in rounds:
- In each turn, a player rolls a dice as many times as he wishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
- A player looses his ENTIRE score when he rolls two 6'es in a row. After that, it's the next player's turn. Players can set the winning score (in an input field), so that they can change the predefined score of 100.

---
## Installation
Download or clone the repository and start the game by opening index.html page in your desired browser.

```sh
$ git clone https://github.com/mustaphabelmkadem/pig-game.git
$ cd pig-game
```

---
**Starter code forked from Jonas Schmedtmann:**  
https://github.com/jonasschmedtmann/complete-javascript-course/tree/master/07-Pig-Game/starter
