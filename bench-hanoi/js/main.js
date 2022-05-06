#!/usr/bin/env node

import { HanoiSolver } from "./hanoi.js";
import { solve_hanoi } from "./lib.js"

if (process.argv.length < 3)
    throw new Error("arg number of disks is required.");

const debug = process.argv.length > 3;
const n = parseInt(process.argv[2]);

solve_hanoi(n, debug);