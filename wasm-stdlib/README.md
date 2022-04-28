# What's this

本来WASMではサポートされないprintf!(標準出力)、panic!（プロセス異常終了）が、WASI, WASMでどうなるかを試すもの

# Try it out

## WASI
## WASM on WebBrowser

```shell
$ wasm-pack build --target web
```

```
$ miniserve .
Available at (non-exhaustive list):
    http://127.0.0.1:8080
```


## WASM on WebBrowser + web-sys