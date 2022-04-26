# What's this

- https://developer.mozilla.org/ja/docs/WebAssembly/Rust_to_wasm

# Try it out

```shell
$ cargo install wasm-pack
```

```shell
$ wasm-pack build 
```

pkgディレクトリに色々作られる
```shell
$ ls -1 pkg/
hello_wasm_bg.js    ... WASMとJSのつなぎのコード
hello_wasm_bg.wasm  ... web用のWASM
hello_wasm_bg.wasm.d.ts
hello_wasm.d.ts
hello_wasm.js       ...
package.json
README.md
```

ローカルのhttpサーバーで試す
```shell
$ cargo install http-server
$ http-server
```

http://127.0.0.1:7878
