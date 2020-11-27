var broker = 'wss://mqtt.eclipse.org:443/mqtt';
var client = mqtt.connect(broker);

var status_header = document.getElementById('status-header')

client.on('connect', function() {
    status_header.innerHTML = 'Connected to ' + broker;
    console.log('Connected to ' + broker)
})

// acceleretion

// acceleratorX
var slider_acceleratorX = document.getElementById("acceleratorX");
var output_acceleratorX = document.getElementById("accelerationX");
output_acceleratorX.innerHTML = slider_acceleratorX.value;

slider_acceleratorX.oninput = function() {
    output_acceleratorX.innerHTML = this.value;
}
slider_acceleratorX.onmouseup = function() {
    console.log("Acceleration - X: " + this.value)
    client.publish('clue_sliders', this.value)
}

// acceleratorY
var slider_acceleratorY = document.getElementById("acceleratorY");
var output_acceleratorY = document.getElementById("accelerationY");
output_acceleratorY.innerHTML = slider_acceleratorY.value;

slider_acceleratorY.oninput = function() {
    output_acceleratorY.innerHTML = this.value;
}
slider_acceleratorY.onmouseup = function() {
    console.log("Acceleration - Y: " + this.value)
    client.publish('clue_sliders', this.value)
}

// acceleratorY
var slider_acceleratorZ = document.getElementById("acceleratorZ");
var output_acceleratorZ = document.getElementById("accelerationZ");
output_acceleratorZ.innerHTML = slider_acceleratorZ.value;

slider_acceleratorZ.oninput = function() {
    output_acceleratorZ.innerHTML = this.value;
}
slider_acceleratorZ.onmouseup = function() {
    console.log("Acceleration - Z: " + this.value)
    client.publish('clue_sliders', this.value)
}

// GyroScope
// gyroscopeX
var slider_gyroscopeX = document.getElementById("gyroX");
var output_gyroscopeX = document.getElementById("gyroscopeX");
output_gyroscopeX.innerHTML = slider_gyroscopeX.value;

slider_gyroscopeX.oninput = function() {
    output_gyroscopeX.innerHTML = this.value;
}
slider_gyroscopeX.onmouseup = function() {
    console.log("gyroscope - X: " + this.value)
    client.publish('clue_sliders', this.value)
}

// gyroscopeY
var slider_gyroscopeY = document.getElementById("gyroY");
var output_gyroscopeY = document.getElementById("gyroscopeY");
output_gyroscopeY.innerHTML = slider_gyroscopeY.value;

slider_gyroscopeY.oninput = function() {
    output_gyroscopeY.innerHTML = this.value;
}
slider_gyroscopeY.onmouseup = function() {
    console.log("gyroscope - Y: " + this.value)
    client.publish('clue_sliders', this.value)
}

// gyroscopeZ
var slider_gyroscopeZ = document.getElementById("gyroZ");
var output_gyroscopeZ = document.getElementById("gyroscopeZ");
output_gyroscopeZ.innerHTML = slider_gyroscopeZ.value;

slider_gyroscopeZ.oninput = function() {
    output_gyroscopeZ.innerHTML = this.value;
}
slider_gyroscopeZ.onmouseup = function() {
    console.log("gyroscope - Z: " + this.value)
    client.publish('clue_sliders', this.value)
}

// Magnetomer
// MagnetomerX
var slider_magnetometerX = document.getElementById("magneticX");
var output_magnetometerX = document.getElementById("magnetometerX");
output_magnetometerX.innerHTML = slider_magnetometerX.value;

slider_magnetometerX.oninput = function() {
    output_magnetometerX.innerHTML = this.value;
}
slider_magnetometerX.onmouseup = function() {
    console.log("magnetometer - X: " + this.value)
    client.publish('clue_sliders', this.value)
}

// MagnetomerY
var slider_magnetometerY = document.getElementById("magneticY");
var output_magnetometerY = document.getElementById("magnetometerY");
output_magnetometerY.innerHTML = slider_magnetometerY.value;

slider_magnetometerY.oninput = function() {
    output_magnetometerY.innerHTML = this.value;
}
slider_magnetometerY.onmouseup = function() {
    console.log("magnetometer - Y: " + this.value)
    client.publish('clue_sliders', this.value)
}

// MagnetomerZ
var slider_magnetometerZ = document.getElementById("magneticZ");
var output_magnetometerZ = document.getElementById("magnetometerZ");
output_magnetometerZ.innerHTML = slider_magnetometerZ.value;

slider_magnetometerZ.oninput = function() {
    output_magnetometerZ.innerHTML = this.value;
}
slider_magnetometerZ.onmouseup = function() {
    console.log("magnetometer - Z: " + this.value)
    client.publish('clue_sliders', this.value)
}

// pressure
var slider_pressure = document.getElementById("press");
var output_pressure = document.getElementById("pressure");
output_pressure.innerHTML = slider_pressure.value;

slider_pressure.oninput = function() {
    output_pressure.innerHTML = this.value;
}
slider_pressure.onmouseup = function() {
    console.log("pressure: " + this.value)
    client.publish('clue_sliders', this.value)
}

// temperature
var slider_temperature = document.getElementById("temp");
var output_temperature = document.getElementById("temperature");
output_temperature.innerHTML = slider_temperature.value;

slider_temperature.oninput = function() {
    output_temperature.innerHTML = this.value;
}

slider_temperature.onmouseup = function() {
    console.log("Temperature: " + this.value)
    client.publish('clue_sliders', this.value)
}

// humidity
var slider_humidity = document.getElementById("humid");
var output_humidity = document.getElementById("humidity");
output_humidity.innerHTML = slider_humidity.value;

slider_humidity.oninput = function() {
    output_humidity.innerHTML = this.value;
}

slider_humidity.onmouseup = function() {
    console.log("Humidity: " + this.value)
    client.publish('clue_sliders', this.value)
}

// proximity
var slider_proximity = document.getElementById("proxim");
var output_proximity = document.getElementById("proximity");
output_proximity.innerHTML = slider_proximity.value;

slider_proximity.oninput = function() {
    output_proximity.innerHTML = this.value;
}

slider_proximity.onmouseup = function() {
    console.log("Proximity: " + this.value)
    client.publish('clue_sliders', this.value)
}

// color
// colorR
var slider_colorR = document.getElementById("colR");
var output_colorR = document.getElementById("colorR");
output_colorR.innerHTML = slider_colorR.value;

slider_colorR.oninput = function() {
    output_colorR.innerHTML = this.value;
}
slider_colorR.onmouseup = function() {
    console.log("color - R: " + this.value)
    client.publish('clue_sliders', this.value)
}

// colorG
var slider_colorG = document.getElementById("colG");
var output_colorG = document.getElementById("colorG");
output_colorG.innerHTML = slider_colorG.value;

slider_colorG.oninput = function() {
    output_colorG.innerHTML = this.value;
}
slider_colorG.onmouseup = function() {
    console.log("color - G: " + this.value)
    client.publish('clue_sliders', this.value)
}

// colorB
var slider_colorB = document.getElementById("colB");
var output_colorB = document.getElementById("colorB");
output_colorB.innerHTML = slider_colorB.value;

slider_colorB.oninput = function() {
    output_colorB.innerHTML = this.value;
}
slider_colorB.onmouseup = function() {
    console.log("color - B: " + this.value)
    client.publish('clue_sliders', this.value)
}

// colorC
var slider_colorC = document.getElementById("colC");
var output_colorC = document.getElementById("colorC");
output_colorC.innerHTML = slider_colorC.value;

slider_colorC.oninput = function() {
    output_colorC.innerHTML = this.value;
}
slider_colorC.onmouseup = function() {
    console.log("color - C: " + this.value)
    client.publish('clue_sliders', this.value)
}