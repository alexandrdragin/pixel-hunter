
function timer(seconds, tick, end) {
  if (seconds > 0) {
    tick(seconds);
    seconds -= 1;
    setTimeout(function () {
      timer(seconds, tick, end);
    }, 1000);
  } else {
    end();
  }
}

export default timer;
