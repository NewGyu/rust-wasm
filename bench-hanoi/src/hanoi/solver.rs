mod min_disk_move_maker;
mod other_disks_move_maker;

use super::gamefield::*;
use min_disk_move_maker::*;
use other_disks_move_maker::*;

pub struct HanoiSolver {
    game_field: GameField,
    min_disk_move_storategy: MinDiskMoveStorategy,
}

impl HanoiSolver {
    pub fn new(num_of_disks: u16) -> Self {
        HanoiSolver {
            game_field: GameField::new(num_of_disks),
            min_disk_move_storategy: MinDiskMoveStorategy::new(num_of_disks),
        }
    }
    pub fn solve(&mut self) {
        loop {
            self.move_min_disk();
            self.game_field.printf();
            if self.game_field.is_completed() {
                break;
            }
            self.move_movable_other_disk();
        }
    }
}
