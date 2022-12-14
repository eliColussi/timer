const args = process.argv.slice(2);

const timer = ((args) => {
  for (const num of args) {
    if (num < 0) {
      continue;
    };

    if (num === 0) {
      continue;
    };

    if (isNaN(num)) {
      continue;
    };
    setTimeout(() => {
      process.stdout.write('\x07');
    }, num * 1000);
  }
});
  
  

timer(args);









