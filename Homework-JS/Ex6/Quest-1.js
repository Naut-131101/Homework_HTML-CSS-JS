function Stopwatch() { 
  let startTime, endTime, running, duration = 0; 
 
  this.start = function() { 
    if (running) throw new Error('Stopwatch has already started.'); 
    running = true; 
    startTime = Date.now(); 
  }; 
 
  this.stop = function() { 
    if (!running) throw new Error('Stopwatch is not started.'); 
    running = false;
    endTime = Date.now(); 
    duration += (endTime - startTime) / 1000; 
  }; 
 
  this.reset = function() { 
    startTime, endTime, running, duration = 0;
  }; 
 
  Object.defineProperty(this, 'duration', { 
    get: function() { return duration; } 
  }); 
}

const sw = new Stopwatch(); // undefined

sw.duration; // 0

sw.start(); // undefined
sw.start(); // Error: Stopwatch has already started.

sw.stop();  // undefined
sw.stop();  // Error: Stopwatch is not started.

sw.duration;  // số giây đã chạy

sw.reset(); // undefined
sw.duration; // 0
