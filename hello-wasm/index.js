/*
import * as wasm from "./pkg/hello_wasm.js";

wasm.then(js => {
    js.greet("WebAssembly!");
})
*/

const js = import("./node_modules/@yournpmusername/hello-wasm/hello_wasm.js");
js.then(js => {
    js.greet("WebAssembly");
});