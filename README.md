```shell
$ cargo build --target wasm32-wasi
$ wasmtime ./target/wasm32-wasi/debug/hello.wasm
```

hello.wasmをWindowsに持っていって、Windows側のwasmtimeでも実行できる