const makeChange = (c) => {
  // your name here
  const quarters = Math.trunc(c / 25);
  const dimes = Math.trunc((c - (quarters * 25)) / 10);
  const nickles = Math.trunc((c - (quarters * 25) - (dimes * 10)) / 5);
  const pennys = Math.trunc((c - (quarters * 25) - (dimes * 10) - (nickles * 5)) / 1);
  return {"q": quarters, "d": dimes, "n": nickles, "p": pennys};
};


// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
