function SimplePromise(executor) {
    this.state = 'pending';
    this.value = undefined;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];
  
    const resolve = (value) => {
      if (this.state === 'pending') {
        this.state = 'fulfilled';
        this.value = value;
        this.onFulfilledCallbacks.forEach((callback) => callback(value));
      }
    };
  
    const reject = (reason) => {
      if (this.state === 'pending') {
        this.state = 'rejected';
        this.value = reason;
        this.onRejectedCallbacks.forEach((callback) => callback(reason));
      }
    };
  
    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }
  
  SimplePromise.prototype.then = function (onFulfilled, onRejected) {
    return new SimplePromise((resolve, reject) => {
      const handleFulfilled = (value) => {
        try {
          if (typeof onFulfilled === 'function') {
            resolve(onFulfilled(value));
          } else {
            resolve(value);
          }
        } catch (error) {
          reject(error);
        }
      };
  
      const handleRejected = (reason) => {
        try {
          if (typeof onRejected === 'function') {
            resolve(onRejected(reason));
          } else {
            reject(reason);
          }
        } catch (error) {
          reject(error);
        }
      };
  
      if (this.state === 'fulfilled') {
        handleFulfilled(this.value);
      } else if (this.state === 'rejected') {
        handleRejected(this.value);
      } else if (this.state === 'pending') {
        this.onFulfilledCallbacks.push(handleFulfilled);
        this.onRejectedCallbacks.push(handleRejected);
      }
    });
  };
  
  SimplePromise.prototype.catch = function (onRejected) {
    return this.then(null, onRejected);
  };
  
  // Example usage
  const myPromise = new SimplePromise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber > 0.5) {
        resolve('Success!');
      } else {
        reject('Failed!');
      }
    }, 1000);
  });
  
  myPromise
    .then((result) => console.log('Fulfilled:', result))
    .catch((error) => console.error('Rejected:', error));
  