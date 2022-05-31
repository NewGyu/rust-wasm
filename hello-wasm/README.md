# What's this

This is an example for trying to run wasm with `npm start`.
- https://developer.mozilla.org/ja/docs/WebAssembly/Rust_to_wasm

# Try it out

```shell
$ cargo install wasm-pack
```

```shell
$ cd rust
$ wasm-pack build --target nodejs
```

The following npm package will be generated.
```shell
$ ls -1 pkg/
hello_wasm_bg.wasm
hello_wasm_bg.wasm.d.ts
hello_wasm.d.ts
hello_wasm.js
package.json
```

Run with `npm`.
```shell
$ cd ../js
$ npm install
$ npm start

> awesome-js@1.0.0 start
> node index.js

Hello, hello wasm!!!!!
```