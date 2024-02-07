class apiQueue {
  constructor() {
    this.queue = [];
    this.busy = false;
  }

  //for enqueue:::::::::::::::::::::::::::::::::::::::::::::::::
  enqueue(url) {
    const task = async () => {
      try {
        this.busy = true;
        const response = await fetch(url);
        const data = await response.json();
        //this.queue.push(data);
        console.log('Fetched data:', data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    }

    //push data in queue::::::::::::::::::::::::::::::::::::::::
    this.queue.push(setTimeout(() => task, 1000));
    console.log("this.queue after push ::", this.queue);

    if (!this.busy) {
      this.dequeue();
    }
  }

  //for dequeue :::::::::::::::::::::::::::::::::::::::::::::::::::
  dequeue() {
    if (this.queue.length === 0 || this.busy === true) {
      console.log('Queue is empty or busy...');
      return false;
    }
    //  else {
    this.queue.shift();
    console.log("this.queue after shift ::::::", this.queue);
    console.log("Task completed successfully...")
    this.dequeue();

    //}
  }
}

const apiqueue = new apiQueue();
apiqueue.enqueue('https://jsonplaceholder.typicode.com/posts/1');
apiqueue.enqueue('https://jsonplaceholder.typicode.com/todos/1');
//apiqueue.enqueue('https://jsonplaceholder.typicode.com/todos/2');

console.log("Final queue:::", apiqueue.queue);