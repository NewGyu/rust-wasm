# What's this
本来I/OをサポートしないWASMをWASIランタイム上で動かすとファイルRead/Writeできますよというサンプル

この[チュートリアル](https://github.com/bytecodealliance/wasmtime/blob/main/docs/WASI-tutorial.md#from-rust)

# Try it out

```shell
$ cargo build --target wasm32-wasi
```

テスト用のデータを作る
```shell
$ mkdir -p ./tmp
$ echo "hello world" > ./tmp/test.txt
```

実行してみる
```shell
$ wasmtime --dir=./tmp ./target/wasm32-wasi/debug/wasi-copy.wasm ./tmp/test.txt ./tmp/copied.txt
```

hello.wasmをWindowsに持っていって、Windows側のwasmtimeでも実行できる