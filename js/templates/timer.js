const timer = (seconds, end) => {
  if (seconds > 0) {
    seconds--;
    console.log(seconds);
  } else {
    end();
  }
};

export default timer;
