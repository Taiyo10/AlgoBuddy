export class TransitionQueue{
    constructor(speed) {
        this.queue = [];
        this.speed = speed;
        this.running = false;
    }

    enqueue(transition) {
        this.queue.push(transition);
        this.run();
    }

    async run() {
        if (this.running || this.queue.length == 0) return;
        this.running = true;

        const next = this.queue.shift();
        await next();
        await this.sleep(this.speed/3);

        this.running = false;
        this.run();
    }

    sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    clearQueue() {
        this.running = false;
        this.queue = [];
    }

    getLength() {
        return this.queue.length;
    }
}