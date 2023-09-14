function evalRPN(tokens: string[]): number {
  // create stack
  const stack: number[] = [];

  // iterate through token array
  for (let token of tokens) {
      // perform the appropriate operation
      if (token === "+") {
          stack.push(stack.pop() + stack.pop());
      } else if (token === "-") {
          let a = stack.pop();
          let b = stack.pop();
          stack.push(b - a);
      } else if (token === "/") {
          let a = stack.pop();
          let b = stack.pop();
          stack.push(Math.trunc(b / a));
      } else if (token === "*") {
          stack.push(stack.pop() * stack.pop());
      // if the current token is a number, add it to the stack
      } else {
          stack.push(parseInt(token));
      }
  }

  // return the the final value in the stack
  return stack[0];
};