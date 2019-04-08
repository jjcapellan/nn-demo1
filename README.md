# NEURAL NETWORKS DEMO 1
This demo shows the capabilities of neural networks.  

There is a population of 50 neural networks that was trained for 60 generations through a genetic algorithm (NeuroEvolution of Augmenting Topologies).  
Each neural network controls a triangle.
## Triangle
Its objective is dodge the obstacles.
Each triangle captures data in a radius of 250 pixels.  
For this it has 8 sensors spread around.  
## Sensors
Each sensor has a "viewing" angle of 360/8 degrees.  
If in the area monitored by the sensor there is nothing, it will return the data 1.  
But if there is one or more obstacles it will return:
```
sensorValue = distance of the nearest obstacle / detection radius 
```
## Input
The input is an array with all sensors data.  
It is updated every frame.  
The input is used by the network to decide if the triangle should turn to the left or to the right.  
The input data must be normalized to values between 0 and 1.
## Output
The triangle have 2 possible actions: Turn left or turn right.  
With the input, the network determines the probability that each of these actions is correct.  
Those probabilities are stored in an array (output).  

## Example
```js
// One neural network stored in a JSON object. 
let NN = {
    "nodes": [/* here the nodes*/],
    "connections": [/* here the connections*/],
    "input": 8,
    "output": 2,
    "dropout":0
};

// Network creation from a JSON object
let myNetwork = neataptic.Network.fromJSON(NN);

let input = captureData(); // returns [1, 1, 1, 1, 0.6, 1, 0.8, 1]

let output = myNetwork.activate(input); // returns [0.9, 0.3]
if(output[0] > 0.5 && output[0] >0 output[1]){
    turnLeft();
} else if (output[1] > 0.5){
    turnRight();
} // The result will be turn left
```


## Libraries used
* [Phaser 3](https://phaser.io/) : a great javascript game framework.
* [Neataptic](https://wagenaartje.github.io/neataptic/) : Neuro-evolution on steroids, right in the browser. (unmaintained)
* [simplex-noise](https://github.com/jwagner/simplex-noise.js): a fast simplex noise implementation in Javascript.