function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}


const n: number = getFirstElement<number>([1, 2, 3]);                 
const s: string = getFirstElement<string>(["a", "b", "c"]);           
const b: boolean = getFirstElement<boolean>([true, false, true]);      


const mixedOk: string | number = getFirstElement<string | number>([1, "two"]); 