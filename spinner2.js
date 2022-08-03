const characters = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];

let time = 100;

for (let char of characters) {
  setTimeout(() => {
    process.stdout.write(`\r${char}`);
  }, time);
  time = time + 200;
}