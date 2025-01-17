function plus(x: number | string, y: number | string): number | string | undefined {
    if (typeof x === "number" && typeof y === "number") {
      return x + y;  
    }
   
    else if (typeof x === "string" && typeof y === "string") {
      return x + y;  // Concatenate the strings if both are strings
    }
    return undefined;
  }
  
  console.log(plus(2025, 1));            
  console.log(plus(undefined as any, 21));
  console.log(plus("StackUp", "Learn"));
  