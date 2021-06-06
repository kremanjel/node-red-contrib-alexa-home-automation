module.exports = function(RED) {
    function AlexaHubNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            node.send(msg);
        });
    }

    RED.nodes.registerType("Alexa Hub", AlexaHubNode);

    function AlexaDeviceNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            node.send(msg);
        });
    }

    RED.nodes.registerType("Alexa Device", AlexaDeviceNode);
}
