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

上記の続きブラウザのDeveloperツールのConsoleで試す。
```shell
dummy.do_something_with_websys(0)
wasm_stdlib.js:174 arg zero is given!!
100
```

do_something_with_websys は以下のように書き換えてある
- printf! -> [web_sys::console::log_1](https://rustwasm.github.io/wasm-bindgen/examples/console-log.html)
- panic! -> [console_error_panic_hook](https://rustwasm.github.io/docs/wasm-pack/tutorials/npm-browser-packages/template-deep-dive/src-utils-rs.html#2-what-is-console_error_panic_hook) を使ってhookしてconsole.errorに流す
