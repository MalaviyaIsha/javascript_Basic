class apiQueue {
  constructor() {
    this.queue = [];
    this.busy = false;
  }

  //for enqueue:::::::::::::::::::::::::::::::::::::::::::::::::
  async enqueue(url) {
    const task = async () => {
      this.busy = true;
      try {
        const response = await fetch(url);
        const data = await response.json();
        this.queue.push(data);
        //  console.log('Fetched data:', data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
      finally {
        this.dequeue();
      }

    }
    // const tasks = this.queue.push(task);
    // console.log("task : ",tasks)

    //push data in queue::::::::::::::::::::::::::::::::::::::::
    this.queue.push(task);
    console.log("this.queue ::", this.queue);

    this.dequeue(task);
    //console.log("this.dequeue ::::", this.dequeue(task));
  }

  //for dequeue :::::::::::::::::::::::::::::::::::::::::::::::::::
  async dequeue() {
    if (this.queue.length === 0 || this.busy === true) {
      console.log('false:::');
      return false;
    }
    else {
      this.queue.shift();
      //  console.log("this.dequeue::::::", this.dequeue(task));
    }
  }
}
const apiqueue = new apiQueue();
apiqueue.enqueue('https://jsonplaceholder.typicode.com/posts/1');
apiqueue.enqueue('https://jsonplaceholder.typicode.com/todos/1');
//apiqueue.enqueue('https://jsonplaceholder.typicode.com/todos/2');

console.log("apiQueue.queue:::", apiqueue.queue);