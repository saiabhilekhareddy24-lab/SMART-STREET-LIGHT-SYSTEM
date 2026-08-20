Smart Street Light System
Description

The Smart Street Light System is an automated lighting system that uses sensors to detect ambient light and vehicle/pedestrian movement. The system automatically turns the street lights ON when darkness or movement is detected and reduces unnecessary power consumption.

Features
Automatic ON/OFF control of street lights
Motion detection
Day/night detection
Energy-saving operation
Simple JavaScript simulation
Testbench for checking system behavior
Technologies Used
JavaScript
Node.js
Jest (for testing)
Project Structure
smart-street-light-system/
├── README.md
├── src/
│   └── smart_street_light.js
├── test/
│   └── smart_street_light.test.js
└── simulation/
    └── simulation_output.txt

How to Run

Install Node.js, then run:

node src/smart_street_light.js


To run the testbench:

npm test

Working Principle

The system receives two inputs:

Ambient light level — represents day or night conditions.
Motion detection — detects vehicles or pedestrians.

Based on these inputs, the controller determines whether the street light should be OFF, ON at full brightness, or ON at reduced brightness.

Expected Result

The system automatically controls the street light according to the surrounding conditions, demonstrating an energy-efficient smart lighting solution.

Future Improvements
IoT-based remote monitoring
Real-time sensor integration
Solar-powered street lights
Mobile application for monitoring
Cloud-based data collection
Author

Your Name

:::

### 2. `src/smart_street_light.js`

```javascript
// Smart Street Light System Simulation

function smartStreetLight(isNight, motionDetected) {
    if (!isNight) {
        return {
            status: "OFF",
            brightness: 0
        };
    }

    if (motionDetected) {
        return {
            status: "ON",
            brightness: 100
        };
    }

    return {
        status: "ON",
        brightness: 30
    };
}

// Simulation
const testCases = [
    { isNight: false, motionDetected: false },
    { isNight: true, motionDetected: false },
    { isNight: true, motionDetected: true },
    { isNight: false, motionDetected: true }
];

console.log("SMART STREET LIGHT SYSTEM");
console.log("--------------------------");

testCases.forEach((testCase, index) => {
    const result = smartStreetLight(
        testCase.isNight,
        testCase.motionDetected
    );

    console.log(`Test Case ${index + 1}:`);
    console.log(`Night: ${testCase.isNight}`);
    console.log(`Motion: ${testCase.motionDetected}`);
    console.log(`Light Status: ${result.status}`);
    console.log(`Brightness: ${result.brightness}%`);
    console.log("--------------------------");
});

module.exports = smartStreetLight;

3. Testbench — test/smart_street_light.test.js

This uses Jest to verify the different operating conditions.

const smartStreetLight = require("../src/smart_street_light");

test("Light should be OFF during daytime", () => {
    const result = smartStreetLight(false, false);

    expect(result.status).toBe("OFF");
    expect(result.brightness).toBe(0);
});

test("Light should be dim at night without motion", () => {
    const result = smartStreetLight(true, false);

    expect(result.status).toBe("ON");
    expect(result.brightness).toBe(30);
});

test("Light should be fully ON when motion is detected at night", () => {
    const result = smartStreetLight(true, true);

    expect(result.status).toBe("ON");
    expect(result.brightness).toBe(100);
});

test("Light should remain OFF during daytime even with motion", () => {
    const result = smartStreetLight(false, true);

    expect(result.status).toBe("OFF");
    expect(result.brightness).toBe(0);
});

4. Simulation Output — simulation/simulation_output.txt
SMART STREET LIGHT SYSTEM
--------------------------

Test Case 1:
Night: false
Motion: false
Light Status: OFF
Brightness: 0%
--------------------------

Test Case 2:
Night: true
Motion: false
Light Status: ON
Brightness: 30%
--------------------------

Test Case 3:
Night: true
Motion: true
Light Status: ON
Brightness: 100%
--------------------------

Test Case 4:
Night: false
Motion: true
Light Status: OFF
Brightness: 0%
--------------------------

5. package.json

Create this file so the testbench can be run easily:

{
  "name": "smart-street-light-system",
  "version": "1.0.0",
  "description": "Smart Street Light System simulation using JavaScript",
  "main": "src/smart_street_light.js",
  "scripts": {
    "start": "node src/smart_street_light.js",
    "test": "jest"
  },
  "devDependencies": {
    "jest": "^30.0.0"
  }
}


Then install the testing package:

npm install


Run the simulation:

npm start


Run the testbench:

npm test


This gives you a complete beginner-friendly GitHub project with the README, JavaScript code, testbench, simulation output, and project structure.
