function Stopwatch() {
  this._startTime = null;
  this._endTime = null;
  this._running = false;
  this._duration = 0;
}

/*
  Gợi ý: Khi chuyển method ra prototype, các method này không truy cập được các biến cục bộ (running, startTime...) vì chúng nằm trong scope của function constructor. Để truy cập được cần phải lưu trữ dưới dạng public property (thêm this).
*/

Stopwatch.prototype.start = function () {
  if (this._running) {
    throw new Error("Stopwatch has already started.");
  }
  this._running = true;
  this._startTime = Date.now();
};

Stopwatch.prototype.stop = function () {
  if (!this._running) {
    throw new Error("Stopwatch is not started.");
  }
  this._running = false;
  this._endTime = Date.now();

  this._duration += (this._endTime - this._startTime) / 1000;
};

Stopwatch.prototype.reset = function () {
  this._startTime = null;
  this._endTime = null;
  this._running = false;
  this._duration = 0;
};

Object.defineProperty(Stopwatch.prototype, "duration", {
  get: function () {
    return this._duration;
  }
});

const sw = new Stopwatch();
sw.duration = 100; // not setter

sw.duration; // 0
sw.start();
sw.stop();
sw.duration; // ~ số giây
