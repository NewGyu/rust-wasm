import { HanoiSolver } from "./hanoi.js";

export function solve_hanoi(num_of_disks, debug) {
  const r = new HanoiSolver(num_of_disks).solve(debug);
  console.log("finished. (%s round)", r);
}