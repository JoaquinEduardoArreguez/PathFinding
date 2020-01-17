"use strict";
/**
 * Node on weighted graph.
 */
var GraphNode = /** @class */ (function () {
    function GraphNode(nombre) {
        this.nombre = nombre;
        this.outgoingLinks = []; // Initialized as empty, to be filled if necessary.
    }
    GraphNode.prototype.addLinks = function (outgoingLinks) {
        this.outgoingLinks = outgoingLinks;
    };
    GraphNode.prototype.createLink = function (destinationNode, distance) {
        this.outgoingLinks.push(new GraphLink(destinationNode, distance));
    };
    GraphNode.prototype.info = function () {
        console.log("\n        GraphNode Info: " + this.nombre + "\n        Outgoing Links : " + this.outgoingLinks.length + "\n        ");
        this.outgoingLinks.forEach(function (Element) { return Element.info(); });
        console.log("End of " + this.nombre + " info.-----------------------");
    };
    return GraphNode;
}());
/**
 * Link on weighted graph.
 */
var GraphLink = /** @class */ (function () {
    function GraphLink(destinationNode, distance) {
        this.distance = distance;
        this.destinationNode = destinationNode;
    }
    GraphLink.prototype.info = function () {
        console.log("\n        ->Link to " + this.destinationNode.nombre + " distance " + this.distance);
    };
    return GraphLink;
}());
/*
let A = new GraphNode("A");
let B = new GraphNode("B");*/
var C = new GraphNode("C");
var D = new GraphNode("D");
var E = new GraphNode("E");
var F = new GraphNode("F");
// C links to E and D with 33 and 20 distances respectively.
C.createLink(E, 33);
C.createLink(D, 20);
// D links with E and F with 20 and 2 distances respectively.
D.createLink(E, 20);
D.createLink(F, 2);
E.createLink(F, 1);
// F has no outgoing links
var _priorityQ = new PriorityQueue();
function dijkstra(initialNode) {
    var _a;
    _priorityQ.add(new GraphLink(initialNode, 0));
    while (_priorityQ.queue.length) {
        var actualNode = _priorityQ.queue.shift();
        (_a = actualNode) === null || _a === void 0 ? void 0 : _a.info();
    }
}
dijkstra(C);
