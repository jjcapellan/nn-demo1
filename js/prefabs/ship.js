class Ship extends Phaser.Physics.Arcade.Image {
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);
    this.scene = scene;
    scene.physics.world.enable(this);
    this.x = this.scene.game.config.width / 2;
    this.y = this.scene.game.config.height / 2;
    this.tintFill = true;
    // physics properties
    this._speed = population.learningConditions.SHIP_SPEED;
    this._angularSpeed = population.learningConditions.SHIP_ANGULAR_SP;
    // inputs and outputs of the neural network
    this.inputs = [];
    this.outputs = [];
    this.inputsAmount = 0;
    // sensors angles
    this.sensorAngles = [];
    // possible actions
    this.actions = {
      left: false,
      right: false
    };
  }

  init() {
    let bodyRadius = 20;
    this.setOrigin(0.5);
    this.body.setCircle(bodyRadius, -bodyRadius + 0.5 * this.width, -bodyRadius + 0.5 * this.width);
    this.body.setMaxVelocity(this._speed);
    this.reset();
  }

  setBrain(brain) {
    // neural network
    this.brain = brain;
    this.brain.score = 0;
  }

  setInputsAmount(value){
    this.inputsAmount = value;
    this.initAngles(this.inputsAmount);
  }

  initArray(length) {
    let array = [];
    //[1,1,...,1]
    for (let i = 0; i < length; i++) {
      array.push(1);
    }
    return array;
  }

  initAngles(amount) {
    let angle = 0;
    let sensorStep = Phaser.Math.PI2 / amount;
    for (let i = 0; i < (amount - 1); i++) {
      angle += sensorStep;
      this.sensorAngles.push(angle);
    }
    this.sensorAngles.push(Phaser.Math.PI2);
  }

  update() {
    // Takes data
    this.inputs = this.captureData();
    // Process data in the neural network
    this.outputs = this.brain.activate(this.inputs);
    // Sets the actions
    this.actions.left = this.outputs[0] > 0.5 && this.outputs[0] >= this.outputs[1];
    this.actions.right = this.outputs[1] > 0.5 && this.outputs[1] > this.outputs[0];
    // Executes the actions
    if (this.actions.left) {
      this.body.setAngularVelocity(-this._angularSpeed);
    } else if (this.actions.right) {
      this.body.setAngularVelocity(this._angularSpeed);
    } else {
      this.body.setAngularVelocity(0);
    }
    // Constant velocity
    this.scene.physics.velocityFromRotation(this.rotation, this._speed, this.body.velocity);
    this.scene.physics.world.wrap(this);
  }

  reset() {
    let newX = Math.random() * 740 + 30;
    let newY = Math.random() * 540 + 30;
    this.body.setEnable(true);
    this.setActive(true);
    this.setVisible(true);
    this.body.reset(newX, newY);
  }

  /**
   * Makes the array with the inputs. The arround space to the ship is divided in zones. Each zone represents a sensor.
   * The sensors sets the value of its inputs.
   * If a sensor is active, then returns the normalized distance to the obstacle, else 1 (DETECTION_RADIUS normalized).
   * @return {numer[]} Inputs for the network. Array of numbers between 0 and 1.
   * @memberof Ship
   */
  captureData() {
    let t = this;
    // Initial value of sensors [1,1,1, ...,1]
    let inputs = this.initArray(this.inputsAmount);
    this.checkGroup(this.scene.asteroids.getChildren(), inputs);
    //this.checkGroup(this.scene.ships.getChildren(), inputs);

    return inputs;
  }

  /**
   * Checks a group of objects to capture input data.
   * @param {object[]} group 
   * @param {number[]} inputs 
   */
  checkGroup(group,inputs){
    let shipAngle = this.rotation;
    for (let i = 0, j = group.length; i < j; i++) {
      let agent = group[i];
      if(this === agent){
        continue;
      }
      // The ship is wrapped to the screen so for each obstacle there is a "gosth obstacle"
      // What X and Y are closest?
      let ast_x = agent.x;
      let ast_y = agent.y;
      let ast_xr = this.x > ast_x ? this.scene.game.config.width + ast_x : ast_x - this.scene.game.config.width;
      let ast_yr = this.x > ast_x ? this.scene.game.config.height + ast_y : ast_y - this.scene.game.config.height;

      if (Math.abs(this.x - ast_x) > Math.abs(this.x - ast_xr)) {
        ast_x = ast_xr;
      }
      if (Math.abs(this.y - ast_y) > Math.abs(this.y - ast_yr)) {
        ast_y = ast_yr;
      }

      // Is the point near to activate some sensor?
      let distance = Phaser.Math.Distance.Between(ast_x, ast_y, this.x, this.y) - agent.body.halfWidth;
      if (distance > this.scene.detectionRadius) {
        continue;
      }

      // The angle determines which sensor is activated.
      let angleShipAgent = Phaser.Math.Angle.Between(this.x, this.y, ast_x, ast_y) + shipAngle * -1;

      if (angleShipAgent < 0) {
        angleShipAgent += Phaser.Math.PI2;
      }

      distance = this.normalizePixels(distance, this.scene.detectionRadius, 0);

      let angles = this.sensorAngles.length;
      for (let i = 0; i < angles; i++) {
        if (angleShipAgent < this.sensorAngles[i]) {
          if (distance < inputs[i]) {
            inputs[i] = distance;
            break;
          }
        }
      }
    } // end for
  }

  compare(a, b) {
    let distanceA = Phaser.Math.Distance.Between(a.x, a.y, this.x, this.y);
    let distanceB = Phaser.Math.Distance.Between(b.x, b.y, this.x, this.y);
    return distanceA - distanceB;
  }

  normalizeAngle(angle) {
    let a = 0;
    if (angle < 0) {
      a = (angle + Phaser.Math.PI2) / Phaser.Math.PI2;
    } else if (angle > 0) {
      a = angle / Phaser.Math.PI2;
    }

    return a;
  }

  normalizePixels(pixels, max, min) {
    let p = (pixels - min) / (max - min); // (value - min)/(max - min)
    if (p < 0) {
      p = 0;
    }
    return p;
  }
}