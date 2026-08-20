const smartStreetLight = require("../src/smart_street_light");

// Test 1: Daytime with no motion
test("Street light should be OFF during daytime", () => {
    const result = smartStreetLight(false, false);

    expect(result.status).toBe("OFF");
    expect(result.brightness).toBe(0);
});

// Test 2: Nighttime with no motion
test("Street light should be dim at night without motion", () => {
    const result = smartStreetLight(true, false);

    expect(result.status).toBe("ON");
    expect(result.brightness).toBe(30);
});

// Test 3: Nighttime with motion
test("Street light should be fully ON when motion is detected", () => {
    const result = smartStreetLight(true, true);

    expect(result.status).toBe("ON");
    expect(result.brightness).toBe(100);
});

// Test 4: Daytime with motion
test("Street light should remain OFF during daytime even with motion", () => {
    const result = smartStreetLight(false, true);

    expect(result.status).toBe("OFF");
    expect(result.brightness).toBe(0);
});
