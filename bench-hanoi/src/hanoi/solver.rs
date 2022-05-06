mod min_disk_move_maker;
mod other_disks_move_maker;

use super::gamefield::*;
use min_disk_move_maker::*;
use other_disks_move_maker::*;

pub struct HanoiSolver {
    num_of_disks: u16,
    game_field: GameField,
    min_disk_move_storategy: MinDiskMoveStorategy,
    debug_print: DebugPrintFn,
}

impl HanoiSolver {
    pub fn new(num_of_disks: u16, debug_print: Option<DebugPrintFn>) -> Self {
        HanoiSolver {
            num_of_disks,
            game_field: GameField::new(num_of_disks),
            min_disk_move_storategy: MinDiskMoveStorategy::new(num_of_disks),
            debug_print: match debug_print {
                Some(f) => f,
                _ => dummy_debug,
            },
        }
    }
    pub fn solve(&mut self) -> u32 {
        let trace_unit: u32 = if self.num_of_disks < 11 {
            100
        } else {
            100 * (2u32.pow(self.num_of_disks as u32 - 10))
        };
        let mut round: u32 = 0;
        loop {
            if round % trace_unit as u32 == 0 {
                (self.debug_print)(&round, &self.game_field);
            }
            round += 1;
            self.move_min_disk();
            if self.game_field.is_completed() {
                break;
            }
            round += 1;
            self.move_movable_other_disk();
        }
        (self.debug_print)(&round, &self.game_field);
        round
    }
}

pub type DebugPrintFn = fn(&u32, &GameField);

fn dummy_debug(_r: &u32, _gf: &GameField) {
    //do nothing
}
