/**
 * Priority Queue to follow dijkstra's algorithm, it will contain all visited GraphNodes with their distance to starting node.
 * As an element for the Queue, we can use GraphLink(s) an they have all required data on them, a destinationNode and a distance.
 */

/**
  * Simple priority queue implementation.
  */
class PriorityQueue {
    queue : any[];
    constructor(baseQueue? : any[]) {
        if (baseQueue) {
            this.queue = baseQueue;
        } else {
            this.queue = [];
        }
    }

    add(graphLink : any | any[]) {
        this.queue = this.queue.concat(graphLink);
        // this.queue.filter(Element=>JSON.stringify())
        this.queue.sort((a, b) => a.distance - b.distance);
    }

    info() {
        console.log(`
        Priority Queue Info
        Elements:    ${
            this.queue.length
        }
        `);
        this.queue.forEach(Element => Element.info());
    }
}
