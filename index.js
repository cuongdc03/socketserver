const WebSocket = require('ws');

const socket = new WebSocket('ws://3.25.190.4:8000/ws');

socket.on('open', function(event) {
    console.log('WebSocket is connected.');
    // Gửi dữ liệu đến server
    socket.send('Activate Cam');
});

socket.on('message', function(data) {
    // Chuyển đổi buffer sang chuỗi
    const message = data.toString('utf8');
    console.log('Received message from server:', message);
});

socket.on('error', function(error) {
    console.error('WebSocket error:', error);
});

socket.on('close', function(event) {
    console.log('WebSocket is closed.');
});
