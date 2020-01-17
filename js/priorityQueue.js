"use strict";
/**
 * Priority Queue to follow dijkstra's algorithm, it will contain all visited GraphNodes with their distance to starting node.
 * As an element for the Queue, we can use GraphLink(s) an they have all required data on them, a destinationNode and a distance.
 */
/**
  * Simple priority queue implementation.
  */
var PriorityQueue = /** @class */ (function () {
    function PriorityQueue(baseQueue) {
        if (baseQueue) {
            this.queue = baseQueue;
        }
        else {
            this.queue = [];
        }
    }
    PriorityQueue.prototype.add = function (graphLink) {
        this.queue = this.queue.concat(graphLink);
        // this.queue.filter(Element=>JSON.stringify())
        this.queue.sort(function (a, b) { return a.distance - b.distance; });
    };
    PriorityQueue.prototype.info = function () {
        console.log("\n        Priority Queue Info\n        Elements:    " + this.queue.length + "\n        ");
        this.queue.forEach(function (Element) { return Element.info(); });
    };
    return PriorityQueue;
}());
