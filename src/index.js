module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const newMap = new Map(bracketsConfig);

  for (let char of str) {
    if (newMap.has(char)){
      if (newMap.get(char) !== char){
        stack.push(char);
      } else {
        if (stack.length === 0 || stack[stack.length - 1] !== char){
          stack.push(char)
        } else{
          stack.pop()
        }
      }
    } else{
      const lastChar = stack.pop();
      if (newMap.get(lastChar) !== char){
        return false;
      }
    }
  }
  return !stack.length
};

