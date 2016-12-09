
const timer = (seconds, tick, end) => {
  if (seconds > 0) {
    tick(seconds);
    seconds -= 1;
    setInterval(function () {
      timer(seconds, tick, end);
    }, 1000);
  } else {
    end();
  }
};

export default timer;
