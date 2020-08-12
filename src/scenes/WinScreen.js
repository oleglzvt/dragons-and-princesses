import Phaser from "phaser";

let graphics;
let cursors;

export default new Phaser.Class({
  Extends: Phaser.Scene,
  initialize: function () {
    Phaser.Scene.call(this, { key: 'winscreen' });
  },
  create: function() {
    cursors = this.input.keyboard.createCursorKeys();

    graphics = this.add.graphics();
    graphics.fillStyle(0x000000, 1);
    graphics.fillRect(0, 0, 800, 600);

    this.add.text(210, 300, "You win! No one messes with the dragon! Press SPACE to restart.")
  },
  update: function () {
    if (cursors.space.isDown) {
      this.scene.start('mainmenu');
    }
  }
})