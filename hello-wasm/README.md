# What's this
wasm-packでビルドされたものをWebブラウザ上で動かすサンプル
- https://developer.mozilla.org/ja/docs/WebAssembly/Rust_to_wasm

# Try it out

```shell
$ cargo install wasm-pack
```

```shell
$ wasm-pack build 
```

pkgディレクトリにnpmパッケージの体で色々作られる
```shell
$ ls -1 pkg/
hello_wasm_bg.js    ... WASMとJSのつなぎのコード
hello_wasm_bg.wasm  ... web用のWASM
hello_wasm_bg.wasm.d.ts
hello_wasm.d.ts
hello_wasm.js       ...
package.json
README.md

$ cat pkg/package.json 
{
  "name": "hello-wasm",
  "version": "0.1.0",
  "files": [
    "hello_wasm_bg.wasm",
    "hello_wasm.js",
    "hello_wasm_bg.js",
    "hello_wasm.d.ts"
  ],
  "module": "hello_wasm.js",
  "types": "hello_wasm.d.ts",
  "sideEffects": false
}
```

webpackで上記のnpmパッケージを取り込んでバンドルする形で動かす。
```shell
$ cd testsite/
$ npm i
$ npm run serve

> testsite@1.0.0 serve
> webpack-dev-server

<i> [webpack-dev-server] Project is running at:
<i> [webpack-dev-server] Loopback: http://localhost:8080/
  :
```

# Note

MDNサイトのサンプルはWebpack 4.x系（deprecated）だったのでWebpack 5.xに合わせて一部調整

* testsite/package.jsonのwebpackバージョン指定
* testsite/webpack.config.jsにて、
    * experiments.asyncWebAssembly = true
    * pluginsにHtmlWebpackPluginを導入

あとは下記が気持ち悪かったので普通にimportするように変更
```js
const js = import("./node_modules/@yournpmusername/hello-wasm/hello_wasm.js");
js.then(js => {
  js.greet("WebAssembly");
});
```
