use std::env;

use wasm_bench::{DebugPrintFn, GameField, HanoiSolver};
fn main() {
    let args: Vec<String> = env::args().collect();
    let n = if let Some(num_of_disks) = args.get(1) {
        num_of_disks.parse::<u16>().unwrap()
    } else {
        println!("no arg is specified, so default 3 is used.");
        3
    };
    let debug_print_fn: Option<DebugPrintFn> = match args.get(2) {
        Some(_) => Some(debug_print),
        None => None,
    };
    let r = HanoiSolver::new(n, debug_print_fn).solve();
    println!("finished. ({} round)", r);
}

fn debug_print(round: &u32, field: &GameField) {
    println!("round: {}", round);
    println!("{}", field.inspection());
}
