# Firework Display

This project is a beautiful firework display simulation using JavaScript and HTML5 Canvas. It creates a stunning visual effect of fireworks exploding in a variety of colors.

## How it works

The project consists of two main classes: `Firework` and `SubFirework`.

### Firework Class

The `Firework` class represents the main firework that shoots up into the sky. Each firework is initialized with a random x-coordinate, a y-coordinate at the bottom of the canvas, and a random color. It also has properties for gravity and speed, which affect its movement.

The `update` method updates the firework's position based on its speed and gravity, and gradually decreases its opacity until it reaches 0. The `draw` method draws the firework on the canvas.

### SubFirework Class

The `SubFirework` class represents the smaller fireworks that explode outwards when the main firework disappears. Each sub-firework is initialized at the position of the main firework, with a random color and a speed that causes it to move in a random direction.

Like the `Firework` class, the `SubFirework` class also has `update` and `draw` methods that update its position and draw it on the canvas, respectively.

## Parameters

- `colors`: An array of colors that the fireworks can be. When a firework is created, it is assigned a random color from this array.
- `maxFireworks`: The maximum number of main fireworks that can be on the screen at once. If this limit is reached, no more main fireworks will be created until some have disappeared.
- `numSubFireworks`: The number of sub-fireworks that are created when a main firework disappears. Each sub-firework moves in a different direction, creating the effect of an explosion.
- `radius`: The radius of each firework and sub-firework, in pixels. All fireworks are drawn as circles with this radius.
- `timeout`: The number of frames between each main firework being created. For example, if `timeout` is 25, then a new main firework will be created every 25 frames.
- `count`: A counter used to determine when to create a new main firework. It is incremented each frame and reset to 0 when a new firework is created.
- `explosionMultiplier`: A multiplier applied to the speed of the sub-fireworks, controlling how far they spread out when a main firework disappears. A higher value will cause the sub-fireworks to spread out more.

## Running the Project

To run the project, simply open the HTML file in your browser. Enjoy the firework display!
