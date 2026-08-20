// Smart Street Light System

function smartStreetLight(isNight, motionDetected) {

    // Daytime: Light remains OFF
    if (!isNight) {
        return {
            status: "OFF",
            brightness: 0
        };
    }

    // Night + Motion detected: Full brightness
    if (motionDetected) {
        return {
            status: "ON",
            brightness: 100
        };
    }

    // Night + No motion: Dim light
    return {
        status: "ON",
        brightness: 30
    };
}

// Simulation Test Cases
const testCases = [
    { isNight: false, motionDetected: false },
    { isNight: true, motionDetected: false },
    { isNight: true, motionDetected: true },
    { isNight: false, motionDetected: true }
];

console.log("SMART STREET LIGHT SYSTEM");
console.log("==========================");

testCases.forEach((testCase, index) => {

    const result = smartStreetLight(
        testCase.isNight,
        testCase.motionDetected
    );

    console.log(`\nTest Case ${index + 1}`);
    console.log(`Night: ${testCase.isNight}`);
    console.log(`Motion Detected: ${testCase.motionDetected}`);
    console.log(`Light Status: ${result.status}`);
    console.log(`Brightness: ${result.brightness}%`);
});

module.exports = smartStreetLight;
