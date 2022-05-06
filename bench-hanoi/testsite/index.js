import { solve_hanoi as wasm_ver } from "hanoi-wasm";
import { solve_hanoi as js_ver } from "hanoi-js";


window["hanoi"] = {
    "solve_with_wasm": (num_of_disks, debug) => {
        console.time("wasm_ver");
        wasm_ver(num_of_disks, debug);
        console.timeEnd("wasm_ver");
    },
    "solve_with_js": (num_of_disks, debug) => {
        console.time("js_ver");
        js_ver(num_of_disks, debug);
        console.timeEnd("js_ver");
    }
}