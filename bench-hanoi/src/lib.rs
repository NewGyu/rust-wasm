mod hanoi;
#[cfg(all(target_arch = "wasm32", not(target_os = "wasi")))]
mod wasm;

pub use hanoi::GameField;
pub use hanoi::{DebugPrintFn, HanoiSolver};
#[cfg(all(target_arch = "wasm32", not(target_os = "wasi")))]
pub use wasm::solve_hanoi;
