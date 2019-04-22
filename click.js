var robot = require('robotjs');
const process = require('process');

const args = process.argv;
args.forEach((v, i) => {  //check args passed into script
  console.log(`${i}: ${v}`);
});

let duration = parseInt(args[2]);
let interval = parseInt(args[3]);

function autoClick(duration, interval) {
  const start = Date.now();
  let randomDelay;
  while ((Date.now() - start) < duration) {
    randomDelay = parseInt(Math.random() * 1000);
    robot.setMouseDelay(interval + randomDelay);
    robot.mouseClick();
  }
  return;
}

autoClick(duration, interval);


