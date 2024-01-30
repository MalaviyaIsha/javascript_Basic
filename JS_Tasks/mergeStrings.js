function mergeStrings(s1, s2) {
  //Count occurrences of characters in each string
  const countStr1 = getCount(s1);
  const countStr2 = getCount(s2);
  let result = "";

  // Merge strings based on merge function rules
  let i = 0, j = 0;
  while (i < s1.length && j < s2.length) {
    const char1 = s1[i];
    const char2 = s2[j];

    const count1 = countStr1[char1];
    const count2 = countStr2[char2];

    if (count1 < count2 || (count1 === count2 && char1 <= char2)) {
      result += char1;
      i++;
    } else {
      result += char2;
      j++;
    }
  }

  // Append the remaining characters from s1 and s2
  result += s1.substring(i) + s2.substring(j);
  return result;
}

//count the occurrences of charactor in the string 
function getCount(str) {
  const countNum = {};
  for (const char of str) {
    if (countNum[char]) {
      countNum[char]++;
    } else {
      countNum[char] = 1;
    }
  }
 // console.log("countNum :", countNum)
  return countNum;

}

const s1 = "dce";
const s2 = "cccbd";
console.log(mergeStrings(s1, s2));

const s3 = "super";
const s4 = "tower";
console.log(mergeStrings(s3, s4)); 
