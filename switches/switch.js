// var client  = mqtt.connect({ host:'test.mosquitto.org', port: 8081})
// or
// var client  = mqtt.connect('wss://test.mosquitto.org:8081/mqtt')

// var client  = mqtt.connect({ host:'mqtt.eclipse.org/mqtt', port: 443})
// or
// var client  = mqtt.connect('wss://mqtt.eclipse.org:443/mqtt')

var broker = 'wss://mqtt.eclipse.org:443/mqtt';
var client  = mqtt.connect(broker);

var status_header = document.getElementById('status-header')

client.on('connect', function () {
    status_header.innerHTML = 'Connected to '+broker; 
    console.log('Connected to '+broker)
    client.subscribe('junrey/messages', function (err) {
        if (!err) {
            client.publish('junrey/messages', 'Hello mqtt')
        }
    })
})

// client.on('message', function (topic, message) {
//   // message is Buffer
//   console.log(message.toString())
// //   client.end()
// })

// var pub_button = document.getElementById('pub-button');
// var pub_input = document.getElementById('pub-input');
// pub_button.addEventListener('click', () => {
//   // console.log('clicked');
//   // console.log(pub_input.value);
//   client.publish('junrey/messages', pub_input.value)
//   pub_input.value = "";
// })

var pub_switch = document.getElementById('pub-switch1');
pub_switch.onclick = () => {
    console.log(pub_switch.checked)
    client.publish('switches', pub_switch.checked ? "true" : "false")
}
var pub_switch2 = document.getElementById('pub-switch2');
pub_switch2.onclick = () => {
    console.log(pub_switch2.checked)
    client.publish('switches', pub_switch2.checked ? "true1" : "false1")
}
var pub_switch3 = document.getElementById('pub-switch3');
pub_switch3.onclick = () => {
    console.log(pub_switch3.checked)
    client.publish('switches', pub_switch3.checked ? "true2" :"false2")
}