class ApiQueue {
  constructor() {
    this.queue = [];
    this.busy = false;
  }

  async enqueue(urls) {
    try {
      this.busy = true;

      for (const url of urls) {
        const response = await fetch(url);
        const data = await response.json();
        this.queue.push(data);
        // console.log('Fetched data:', data);
      }

      console.log('Queue with data:', this.queue);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      this.busy = false;
      if (!this.busy) {
        this.dequeue();
      }
    }
  }

  async dequeue() {
    if (this.queue.length === 0) {
      console.log('Queue is empty...');
      return false;
    }
    else if (this.busy === true) {
      console.log('Queue is busy...');
      return false;
    }

    const task = this.queue.shift();
    console.log('Processing task:', task);
    // Perform any processing on the task as needed

    console.log('Task completed successfully...');
    console.log("final queue : ", this.queue)
    this.dequeue();
  }
}

const apiqueue = new ApiQueue();
apiqueue.enqueue([
  'https://jsonplaceholder.typicode.com/posts/1',
  'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/todos/2'
]);
