class Asteroid extends Phaser.Physics.Arcade.Image {
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, texture, frame);
    this.scene = scene;
    this._speed = population.learningConditions.OBSTACLE_SPEED;

    this.x = 0;
    this.y = 0;
  }

  init(innerRect, outerRect, targetRect) {
    this.innerRectangle = innerRect;
    this.outerRectangle = outerRect;
    this.targetRectangle = targetRect;
    this.body.setCircle(this.width / 2);
    this.body.setImmovable(true);
    this.body.mass = 2;
    this.reset();
  }

  reset() {
    let t = this;
    let direction = t.getDirection();
    t.body.reset(direction.fromX, direction.fromY);
    t.scene.physics.moveTo(t, direction.toX, direction.toY, this._speed);
  }

  getDirection() {
    let t = this;
    let spawnPoint = Phaser.Geom.Rectangle.RandomOutside(t.outerRectangle, t.innerRectangle);
    let targetPoint = t.targetRectangle.getRandomPoint();
    let direction = {
      fromX: spawnPoint.x,
      fromY: spawnPoint.y,
      toX: targetPoint.x,
      toY: targetPoint.y
    };
    return direction;
  }
}
