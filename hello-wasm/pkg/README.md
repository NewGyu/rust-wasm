# What's this
wasm-packでビルドされたものをWebブラウザ上で動かすサンプル
- https://developer.mozilla.org/ja/docs/WebAssembly/Rust_to_wasm

# Try it out

```shell
$ cargo install wasm-pack
```

```shell
$ wasm-pack build --target web
```

pkgディレクトリにnpmパッケージの体で色々作られる
```shell
$ ls -1 pkg/
hello_wasm_bg.wasm          ...コンパイルされたWASM
hello_wasm_bg.wasm.d.ts
hello_wasm.d.ts
hello_wasm.js               ...つなぎのJSコード
package.json
README.md

$ cat pkg/package.json 
{
  "name": "hello-wasm",
  "version": "0.1.0",
  "files": [
    "hello_wasm_bg.wasm",
    "hello_wasm.js",
    "hello_wasm.d.ts"
  ],
  "module": "hello_wasm.js",
  "types": "hello_wasm.d.ts",
  "sideEffects": false
}
```

[index.html](index.html)をローカルのhttpサーバーで動かす
```
$ cargo install miniserve
$ miniserve
Available at (non-exhaustive list):
    http://127.0.0.1:8080
```

# Note

MDNの英語サイトにだけ`--target web`でビルドする手順が載っていて、こちらのほうが圧倒的に簡単だった。
