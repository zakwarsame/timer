const arg = process.argv.slice(2);

for (let t of arg) {
  if (Math.sign(t) >= 0) {
    setTimeout(() => {
      console.log(`${t} second(s)! \x07`);
    }, t * 1000);
  }
}
