# What's this

本来WASMではサポートされないprintf!(標準出力)、panic!（プロセス異常終了）が、WASI, WASMでどうなるかを試すもの。
[hello-wasmチュートリアル](../hello-wasm/README.md)を先に見ておくこと。

* 引数に0を与えるとprintf!でstdoutにメッセージ
* 0以外の場合はpanic!でstderrにメッセージ+スタックトレース

# Try it out

## WASI
```shell
$ cargo build --target wasm32-wasi
$ wasmtime ./target/wasm32-wasi/debug/main.wasm 0
arg zero is given!!
```

## WASM on WebBrowser

```shell
$ wasm-pack build --target web
$ miniserve .
Available at (non-exhaustive list):
    http://127.0.0.1:8080
```

ブラウザのDeveloperツールのConsoleで試す。
```shell
> dummy.do_something(0)
100
```
※ dummyグローバルオブジェクトの属性としてdo_something関数をバインドしてある

* console.logには何も出ず、戻り値がコンソールに出る
* panic!メッセージはでない

## WASM on WebBrowser + web-sys