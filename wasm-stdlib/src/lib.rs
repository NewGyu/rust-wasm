use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn do_something(arg:u32) -> u32{
    if let 0 = arg {
        println!("arg zero is given!!");
        100 + arg
    } else {
        panic!("other number!");
    }
}