import { sqrt } from "mathjs";

function areaOfTriangle(base: number, height: number): number {
  return 0.5 * base * height;
}

function main() {
  console.log(areaOfTriangle(3, 4)); // Output: 6.0
}
