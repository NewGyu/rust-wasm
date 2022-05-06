# What's this

計算量O(2n)のハノイの塔を題材にしてベンチマークを取るためのもの。
- コマンドライン
    - Node.js
    - ネイティブバイナリ
    - WASI
- ブラウザ
    - JS
    - WASM

# Try it out

## CLI Node.js
## CLI ネイティブバイナリ
```shell
$ cargo build --release
$ time ./target/release/wasm-bench 25
finished. (33554431 round)

real    0m2.289s
user    0m2.289s
sys     0m0.000s
```
## CLI WASI
```shell
$ cargo build --release --target wasm32-wasi
$ time wasmtime ./target/wasm32-wasi/release/wasm-bench.wasm 25 
finished. (33554431 round)

real    0m4.283s
user    0m4.284s
sys     0m0.000s
```
## Browser JS
## Browser WASI