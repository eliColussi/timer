const args = process.argv.slice(2); //slice at terminal input

const timer = ((args) => {
  for (const num of args) { //loop through inputs
    if (num < 0 && num !== NaN) {
      continue;
    };

    if (num === 0) {
      continue;
    };

    setTimeout(() => { //set timeout to beep at user inputed time
      process.stdout.write('\x07');
    }, num * 1000);
  }
});
  
  

timer(args); //call the function









