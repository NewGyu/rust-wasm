use std::env;

fn main() {
    let args: Vec<String> = env::args().collect();
    wasm_stdlib::do_something(args[1].parse().unwrap());
}
