import Phaser from "phaser";

let graphics;
let cursors;

export default new Phaser.Class({
  Extends: Phaser.Scene,
  initialize: function () {
    Phaser.Scene.call(this, { key: 'mainmenu' });
  },
  create: function() {
    cursors = this.input.keyboard.createCursorKeys();

    graphics = this.add.graphics();
    graphics.fillStyle(0x000000, 1);
    graphics.fillRect(0, 0, 800, 600);

    this.add.text(400, 150, "Dragons & Princesses")
    this.add.text(350, 300, "- Press space to start.")
    this.add.text(350, 320, "- Move with up, down, left, right.")
    this.add.text(350, 340, "- Press spacebar to brake.")
    this.add.text(350, 360, "- Destroy all the enemies to win.")
  },
  update: function () {

    if (cursors.space.isDown) {
      this.scene.start('game');
    }
  }
})