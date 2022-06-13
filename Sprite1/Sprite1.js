/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite1/costumes/costume1.svg", {
        x: 48,
        y: 50
      }),
      new Costume("costume2", "./Sprite1/costumes/costume2.svg", {
        x: 46,
        y: 53
      })
    ];

    this.sounds = [new Sound("Meow", "./Sprite1/sounds/Meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.penDown = false;
    this.clearPen();
    this.penColor = Color.rgb(39, 255, 57);
    this.penDown = true;
    this.penSize += 10;
    this.goto(100, 100);
    yield* this.wait(0.5);
    this.goto(100, -100);
    yield* this.wait(0.5);
    this.goto(-100, -100);
    yield* this.wait(0.5);
    this.goto(-100, 100);
    yield* this.wait(0.5);
    this.goto(100, 100);
  }
}