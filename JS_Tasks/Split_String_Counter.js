function splitCount(s) {
  const n = s.length;
  //console.log(n);
  let count = 0;

  for (let i = 1; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const a = s.slice(0, i);
      //console.log("1", s.slice(0, i));
      const b = s.slice(i, j);
      //console.log("2", s.slice(i, j));
      const c = s.slice(j);
      //console.log("3", s.slice(j));
      if (a + b !== b + c && b + c !== c + a && c + a !== a + b) {
        count++;
      }
    }
  }

  return count;
}

const s = splitCount("xzxzx");
console.log("Count of splitting string:", s);
