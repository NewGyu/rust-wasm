#[cfg(all(target_arch = "wasm32", not(target_os = "wasi")))]
use wasm_bindgen::prelude::*;

#[cfg_attr(all(target_arch = "wasm32", not(target_os = "wasi")), wasm_bindgen)]
pub fn do_something(arg: u32) -> u32 {
    if let 0 = arg {
        println!("arg zero is given!!");
        100 + arg
    } else {
        panic!("other number!");
    }
}

#[cfg_attr(all(target_arch = "wasm32", not(target_os = "wasi")), wasm_bindgen)]
pub fn do_something_with_websys(arg: u32) -> u32 {
    console_error_panic_hook::set_once();
    if let 0 = arg {
        web_sys::console::log_1(&"arg zero is given!!".into());
        100 + arg
    } else {
        panic!("other number!");
    }
}
