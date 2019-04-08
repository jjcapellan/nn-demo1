class Test extends Phaser.Scene {
  constructor() {
    super('test');
  }

  init() {

    // Conditions knowed by the neural network
    this.obstaclesAmount = population.learningConditions.OBSTACLES_AMOUNT;
    this.detectionRadius = population.learningConditions.DETECTION_RADIUS;
    this.sensorsAmount = population.learningConditions.INPUTS_SIZE;

    this.spawn_margin = this.detectionRadius + 60;
  }

  preload(){
    this.load.bitmapFont('bmf', 'assets/fonts/bmf_xolonium.png', 'assets/fonts/bmf_xolonium.xml');
    this.load.image('asteroid', 'assets/imgs/obstacle.png');
    this.load.image('ship', 'assets/imgs/star.png');
  }

  create() {
    let t = this;

    this.add.existing(
      new SkyGenerator(this, 800, 600, {
        backgroundColor: 0x000023,
        gridUnitSize: 72,//82,
        maxStarsCluster: 46,//46,
        minStarsCluster: 19,//19
        starHightPassFilter: 0.3,
        cloudRadius: 200,
        cloudGradient: 1,
        cloud1Opacity: 0.1,//0.525,
        cloud2Opacity: 0.2,//0.865,
        starRadius: 48,
        starsDispersion: 1,
        cloudStarScale: 0.2,
        cloudStarAlpha: 0.3,//0.5
        starHardness: 0.03,//0.03,
        starGradient: 0.54,
        starAlpha: 0.5,//0.9,
        cloud1Color: 0x65ddf7,
        cloud2Color: 0x8f9b37,//0x830e81,
        scaleStar2: 0.6,//0.6,
        scaleStar3: 0.3
      })
    );

    //// Rectangles to spawn the asteroids
    this.innerRectangle = new Phaser.Geom.Rectangle(0, 0, this.game.config.width, this.game.config.height);
    this.outerRectangle = new Phaser.Geom.Rectangle(
      -this.spawn_margin,
      -this.spawn_margin,
      this.game.config.width + this.spawn_margin * 2,
      this.game.config.height + this.spawn_margin * 2
    );
    this.targetRectangle = new Phaser.Geom.Rectangle(
      50,
      50,
      this.game.config.width - 100,
      this.game.config.height - 100
    );

    //// Ships
    let populationAmount = population.population.length;
    this.ships = this.physics.add.group();
    this.ships.createMultiple({
      classType: Ship,
      key: 'ship',
      repeat: populationAmount - 1,
      runChildUpdate: true
    });
    let color = new Phaser.Display.Color();    
    for (let i = 0; i < this.ships.getChildren().length; i++) {
      let ship = this.ships.getChildren()[i];
      let shipColor = color.random(50,255).color;      
      let neuralNetwork = neataptic.Network.fromJSON(population.population[i]);
      ship.init();
      ship.setBrain(neuralNetwork);
      ship.setAlpha(0.9);
      ship.setTint(shipColor);
      ship.setInputsAmount(this.sensorsAmount);
    }

    //// Asteorids (obstacles)
    this.asteroids = this.physics.add.group();
    this.asteroids.createMultiple({
      classType: Asteroid,
      key: 'asteroid',
      repeat: this.obstaclesAmount - 1
    });
    this.asteroids.children.iterate(function(asteroid) {
      asteroid.init(t.innerRectangle, t.outerRectangle, t.targetRectangle);      
    }, t);

    // Collider
    this.physics.add.collider(this.ships, this.asteroids);  
    
    // Title
    this.add.bitmapText(this.game.config.width/2, 50, 'bmf', 'Neural Networks Demo I', 20).setOrigin(0.5,0);
    
  }

  update(time, delta) {
    let t = this;
    this.ships.children.iterate(function(ship) {
      if (ship.active) {
        ship.update(time, delta);
      }
    }, t);
    this.checkAsteroids();
  }

  checkAsteroids() {
    let t = this;
    this.asteroids.children.iterate(function(asteroid) {
      if (!Phaser.Geom.Rectangle.ContainsPoint(t.outerRectangle, asteroid.body.position)) {
        asteroid.reset();
      }
    });
  }
  
}