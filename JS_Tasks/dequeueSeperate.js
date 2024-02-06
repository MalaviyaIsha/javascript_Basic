class apiQueue {
  constructor() {
    this.queue = [];
    this.busy = false;
  }

  //for enqueue:::::::::::::::::::::::::::::::::::::::::::::::::
  async enqueue(url) {
    try {
      this.busy = true;
      const response = await fetch(url);
      // for(let i=0 ; i< response.length ;i++){

      // }
      const data = await response.json();
      this.queue.push(data);
      console.log('Fetched data:', data);
      console.log("queue with data... ", this.queue);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
    finally {
      this.busy = false;
      if (!this.busy) {
        this.dequeue();
      }
    }

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
    // Perform any processing on the task as needed

    console.log('Task completed successfully...');
    console.log("final queue : ", this.queue)
    this.dequeue();

    //}
  }
}

const apiqueue = new apiQueue();
apiqueue.enqueue('https://jsonplaceholder.typicode.com/posts/1');
apiqueue.enqueue('https://jsonplaceholder.typicode.com/todos/1');
apiqueue.enqueue('https://jsonplaceholder.typicode.com/todos/2');

//console.log("Final queue:::", apiqueue.queue);