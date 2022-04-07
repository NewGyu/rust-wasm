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
$ wasmtime --dir=. target/wasm32-wasi/debug/hello.wasm tmp/test.txt tmp/wasmtime.txt
```

hello.wasmをWindowsに持っていって、Windows側のwasmtimeでも実行できる