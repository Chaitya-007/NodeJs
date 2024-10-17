const EventEmitter = require("events");

class MyEventEmitter extends EventEmitter {}

const myEventEmitter = new MyEventEmitter();

myEventEmitter.on("WaterFull", () => {
  console.log("Please turn off the motor");
  setTimeout(() => {
    console.log("This is timeout");
  }, 3000);
});

myEventEmitter.emit("WaterFull");
console.log("The script is running");
