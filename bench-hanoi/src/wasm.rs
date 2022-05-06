use super::*;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn solve_hanoi(num_of_disks: u16, debug: Option<bool>) {
    let debug_print_fn: Option<DebugPrintFn> = match debug {
        Some(true) => Some(debug_print),
        _ => None,
    };
    let r = HanoiSolver::new(num_of_disks, debug_print_fn).solve();
    web_sys::console::log_1(&format!("finished. ({} round)", r));
}

fn debug_print(round: &u32, field: &GameField) {
    web_sys::console::log_1(&format!("round {}", round).into());
    web_sys::console::log_1(&field.inspection().into());
}
