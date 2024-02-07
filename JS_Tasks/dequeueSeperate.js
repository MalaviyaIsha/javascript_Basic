class apiQueue {
  constructor() {
    this.queue = [];
    this.busy = false;
    this.time = null;
  }

  //for enqueue:::::::::::::::::::::::::::::::::::::::::::::::::
  async enqueue(url) {
    try {
      this.busy = true;
      const response = await fetch(url);
      const data = await response.json();
      this.queue.push(data);
      // console.log('Fetched data:', data);
      console.log("queue with data... ", this.queue);
    } catch (error) {
      console.error(`Error fetching url:${url}`, error);
    }

    clearTimeout(this.time);
    this.time = setTimeout(() => {
      this.busy = false;
      if (!this.busy) {
        this.dequeue();
      }
    }, 1000);
  }

  //for dequeue :::::::::::::::::::::::::::::::::::::::::::::::::::
  dequeue() {
    if (this.queue.length === 0) {
      console.log('Queue is empty or busy...');
      return false;
    }
    else if (this.busy === true) {
      return false;
    }
    //  else {
    const task = this.queue.shift();
    console.log('Processing task:', task);
   
    console.log('Task completed successfully...');
    console.log("Queue after shift : ", this.queue)
    this.dequeue();

    //}
  }
}

const apiqueue = new apiQueue();
apiqueue.enqueue('https://jsonplaceholder.typicode.com/todos/1');
apiqueue.enqueue('https://jsonplaceholder.typicode.com/todos/2');
apiqueue.enqueue('https://jsonplaceholder.typicode.com/todos/3');




