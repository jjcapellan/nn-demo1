/**
 * SkyGenerator is a custom image class to create a procedural sky background using the framework Phaser 3.
 * @author       Juan Jose Capellan <soycape@hotmail.com>
 * @license      {@link https://github.com/jjcapellan/skygenerator/blob/master/LICENSE | MIT license}
 * @version      2.0.0
 */

/**
 * 
 * @class SkyGenerator
 * @extends Phaser.GameObjects.Image
 */
class SkyGenerator extends Phaser.GameObjects.Image {
  /**
     * Creates an instance of SkyGenerator.
     * @param  {Phaser.Scene} scene 
     * @param  {number} width 
     * @param  {number} height 
     * @param  {object} [options] 
     * @param  {number} [options.backgroundColor = 0x000023]
     * @param  {number} [options.cloud1Opacity = 0.525] Opacity of first clouds layer [0.0 - 1.0]
     * @param  {number} [options.cloud2Opacity = 0.865] Opacity of second clouds layer [0.0 - 1.0]
     * @param  {number} [options.cloudStarAlpha = 0.5] Opacity of the star clouds [0.0 - 1.0]
     * @param  {number} [options.cloudStarScale = 0.2] Scale of the star cloud [0.0 - 1.0]
     * @param  {number} [options.gridUnitSize = 82] Size of the cells of the grid
     * @param  {number} [options.maxStarsCluster = 46] Max stars in a cluster
     * @param  {number} [options.minStarsCluster = 19] Min stars in cluster
     * @param  {number} [options.starHightPassFilter = 0.3] Minimum value of the hightmap to generate a star cluster [0.1 - 0.9]
     * @param  {number} [options.cloudRadius = 200] Radius of the generated clouds
     * @param  {number} [options.cloudGradient = 1] Gradient of transparency of the cloud. (0 - 1)
     * @param  {number} [options.starRadius = 48] Maximum radius of the stars.
     * @param  {number} [options.starAlpha = 0.9] Maximum opacity of the stars.
     * @param  {number} [options.starHardness = 0.03] Opaque proportion of the radius star. (0 - 1) 
     * @param  {number} [options.starGradient = 0.54] Gradient of transparency of the star. (0 - 1)
     * @param  {number} [options.starsDispersion = 1] Dispersion of the stars (1 = no dispersion) 
     * @param  {number[]} [options.starColors = [0xfcf9a7, 0xffffff, 0x9ef7fc]] Array of colors to apply to the stars.
     * @param  {number} [options.cloud1Color = 0x65ddf7] Color of the first layer of clouds.
     * @param  {number} [options.cloud2Color = 0x830e81] Color of the second layer of clouds.
     * @param  {number} [options.scaleStar2 = 0.8] Scale of the second star type.
     * @param  {number} [options.scaleStar3 = 0.4] Scale of third star type.
     * @memberof SkyGenerator
     */
  constructor(scene, width, height, options = {}) {
    super(scene, 0, 0);

    this.scene = scene;
    this.width = width;
    this.height = height;
    this.backgroundColor = options.backgroundColor || 0x000023;
    this.cloud1Opacity = options.cloud1Opacity || 0.525;
    this.cloud2Opacity = options.cloud2Opacity || 0.865;
    this.cloudStarOpacity = options.cloudStarAlpha || 0.5;
    this.gridUnitSize = options.gridUnitSize || 82;
    this.maxStarsCluster = options.maxStarsCluster || 46;
    this.minStarsCluster = options.minStarsCluster || 19;
    this.starHightPassFilter = options.starHightPassFilter || 0.3;
    this.cloudRadius = options.cloudRadius || 200;
    this.cloudGradient = options.cloudGradient || 1;
    this.starRadius = options.starRadius || 48;
    this.starAlpha = options.starAlpha || 0.9;
    this.starsDispersion = options.starsDispersion || 1;
    this.cloudStarScale = options.cloudStarScale || 0.2;
    this.starHardness = options.starHardness || 0.03;
    this.starGradient = options.starGradient || 0.54;
    this.starColors = options.starColors || [ 0xfcf9a7, 0xffffff, 0x9ef7fc ];
    this.cloud1Color = options.cloud1Color || 0x65ddf7;
    this.cloud2Color = options.cloud2Color || 0x830e81;
    this.scaleStar2 = options.scaleStar2 || 0.6;
    this.scaleStar3 = options.scaleStar3 || 0.3;

    this.init();
  }

  init() {
    // Arrays where points are stored
    this.cloudsLayer1 = new Map();
    this.cloudsLayer2 = new Map();
    this.starsLayer = [];

    this.initRenderTextures();
    this.initCloudBrush();
    this.initStarBrush();
    this.makeGrid(this.gridUnitSize, Math.random() * 50000, this.cloudsLayer1);
    this.makeGrid(this.gridUnitSize, Math.random() * 50000, this.cloudsLayer2);
    this.scene.cameras.main.setBackgroundColor(this.backgroundColor);
    this.generateTexture();
    this.setTexture('rt_SkyGenerator');
    this.setOrigin(0);
  }

  makeGrid(unitSize, seed, gridMap) {
    let noise = new SimplexNoise(seed);
    let next = true;
    let alpha;
    let x = 0;
    let y = 0;

    while (next) {
      alpha = noise.noise2D(x, y);
      gridMap.set({ x: x, y: y }, alpha);
      x += unitSize;
      if (x > this.width) {
        x = 0;
        y += unitSize;
      }
      if (y > this.height) {
        next = false;
      }
    }
  }

  initRenderTextures() {
    // Cloud rendertexture
    let cloudWidth = this.cloudRadius * 2;
    this.cloudTexture = this.scene.make
      .renderTexture({ width: cloudWidth, height: cloudWidth }, false)
      .setVisible(false);

    // Stars rendertextures
    let starWidh = this.starRadius * 2;
    this.star1Texture = this.scene.make
      .renderTexture({ width: starWidh, height: starWidh }, false)
      .setVisible(false);
    this.star2Texture = this.scene.make
      .renderTexture(
        {
          width: starWidh * this.scaleStar2,
          height: starWidh * this.scaleStar2
        },
        false
      )
      .setVisible(false);
    this.star3Texture = this.scene.make
      .renderTexture(
        {
          width: starWidh * this.scaleStar3,
          height: starWidh * this.scaleStar3
        },
        false
      )
      .setVisible(false);
  }

  // Draw a cloud in its texture
  initCloudBrush() {
    this.cloudTexture.draw(
      this.makeBrush(this.cloudRadius, this.cloudGradient, false),
      this.cloudTexture.width / 2,
      this.cloudTexture.width / 2
    );
  }

  // Draw three stars with different scales in its textures
  initStarBrush() {
    // Star scale 1
    this.star1Texture.draw(
      this.makeBrush(this.starRadius, this.starGradient, true),
      this.star1Texture.width / 2,
      this.star1Texture.width / 2
    );

    // Star scale scaleStar2
    this.star2Texture.draw(
      this.makeBrush(
        Math.round(this.scaleStar2 * this.starRadius),
        this.starGradient,
        true
      ),
      this.star2Texture.width / 2,
      this.star2Texture.width / 2
    );

    // Star scale scaleStar3
    this.star3Texture.draw(
      this.makeBrush(
        Math.round(this.scaleStar3 * this.starRadius),
        this.starGradient,
        true
      ),
      this.star3Texture.width / 2,
      this.star3Texture.width / 2
    );
  }

  /**
   * Makes a "brush" based on overlayed semitransparent circles to get a gradient of transparency
   * f(x) = minRadius + k*x*x ------> x = step in for loop; f(x) = radius (quadratic easing in)
   * @param  {number} radius 
   * @param  {number} gradient Number between 0 and 1. 1 = Max softness.
   * @param  {boolean} isStar
   * @return {Phaser.GameObjects.Graphics}
   * @memberof SkyGenerator
   */
  makeBrush(radius, gradient, isStar) {
    let brush = this.scene.add.graphics();
    let steps = Math.round(200 * gradient);
    let k = (radius - 1) / (steps * steps);
    let alpha = this.starAlpha / steps;
    let prevRadius = 0;

    if (alpha < 0.005) alpha = 0.005;
    brush.setVisible(false);

    for (let i = 0; i < radius + 1; i++) {
      brush.fillStyle(0xffffff, alpha);
      let r = Math.round(1 + i * i * k);
      if (r < 1) r = 1;
      if (r > radius) r = radius;
      // prevents draw two times same circle
      if (r == prevRadius) {
        continue;
      } else {
        prevRadius = r;
      }
      brush.fillCircle(0, 0, r);
    }

    if (isStar) {
      if (this.starHardness == 0) this.starHardness = 0.001;
      brush.fillStyle(0xffffff, this.starAlpha);
      brush.fillCircle(0, 0, radius * this.starHardness);
    }
    return brush;
  }

  // Parses skyLayer1 and skyLayer2 arrays and using that data draws the textures of clouds and stars in a new texture.
  generateTexture() {
    let unitSize = this.gridUnitSize;
    let rt = this.scene.make.renderTexture(
      { x: 0, y: 0, width: this.width, height: this.height },
      false
    );
    rt.setOrigin(0, 0);

    // cloudsLayer1
    this.cloudsLayer1.forEach(function(alpha, position) {
      let variationX = Math.random() * unitSize - unitSize / 2 - unitSize;
      let variationY = Math.random() * unitSize - unitSize / 2 - unitSize;
      let cloudScale = Math.random() * 0.6 + 0.4;
      this.cloudTexture
        .setPosition(position.x + variationX, position.y + variationY)
        .setTint(this.cloud1Color)
        .setAlpha(alpha * this.cloud1Opacity)
        .setScale(cloudScale, cloudScale)
        .setVisible(false);

      rt.draw(this.cloudTexture);
    }, this);

    // cloudsLayer2
    this.cloudsLayer2.forEach(function(alpha, position) {
      let variationX = Math.random() * unitSize - unitSize / 2 - unitSize;
      let variationY = Math.random() * unitSize - unitSize / 2 - unitSize;
      let cloudScale = Math.random() * 0.6 + 0.4;
      this.cloudTexture
        .setPosition(position.x + variationX, position.y + variationY)
        .setTint(this.cloud2Color)
        .setAlpha(alpha * this.cloud2Opacity)
        .setScale(cloudScale, cloudScale)
        .setVisible(false);

      rt.draw(this.cloudTexture);

      if (alpha > this.starHightPassFilter * this.cloud2Opacity) {
        let stars =
          Math.random() * (this.maxStarsCluster - this.minStarsCluster) +
          this.minStarsCluster;
        for (let i = 0; i < stars; i++) {
          let scaleVar = Phaser.Math.RND.sign() * Math.random() * 0.1;
          let starTexture = Phaser.Math.RND.pick([
            this.star1Texture,
            this.star2Texture,
            this.star3Texture
          ]);

          let starXpos =
            position.x +
            variationX +
            (Math.random() * this.gridUnitSize * 2 - this.gridUnitSize / 2) *
              this.starsDispersion;
          let starYpos =
            position.y +
            variationY +
            (Math.random() * this.gridUnitSize * 2 - this.gridUnitSize / 2) *
              this.starsDispersion;

          starTexture
            .setPosition(starXpos, starYpos)
            .setAlpha(alpha + (Math.random() * 0.6 - 0.2))
            .setTint(Phaser.Math.RND.pick(this.starColors));

          this.cloudTexture
            .setPosition(starXpos, starYpos)
            .setTint(0xffffff)
            .setAlpha(alpha / 2 * this.cloudStarOpacity)
            .setScale(this.cloudStarScale + scaleVar, this.cloudStarScale + scaleVar)
            .setVisible(false);

          rt.draw([ this.cloudTexture, starTexture ]);
        }
      }
    }, this);

    rt.draw(this.cloudTexture);

    // Saves texture in cache
    rt.saveTexture('rt_SkyGenerator');
  }
}
