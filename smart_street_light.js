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

mart Street Light System
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
