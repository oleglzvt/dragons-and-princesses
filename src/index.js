import Phaser from "phaser";
import MainMenu from "./scenes/MainMenu";
import Game from "./scenes/Game";
import WinScreen from "./scenes/WinScreen";

var config = {
  type: Phaser.AUTO,
  width: 1024,
  height: 650,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0, x: 0 },
    },
  },
  scene: [MainMenu, Game, WinScreen]
};

var game = new Phaser.Game(config);
