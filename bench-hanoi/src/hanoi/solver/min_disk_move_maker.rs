use super::super::gamefield::{
    stick::StickName::{self, *},
    Move,
};
use super::HanoiSolver;

pub trait MinDiskMove {
    fn move_min_disk(&mut self) -> Move;
    fn calc_move_min(&mut self) -> Move;
}
impl MinDiskMove for HanoiSolver {
    fn move_min_disk(&mut self) -> Move {
        let mv = self.calc_move_min();
        self.game_field.move_disk(mv.from, mv.to);
        mv
    }
    fn calc_move_min(&mut self) -> Move {
        let current = self
            .game_field
            .sticks
            .iter()
            .find(|s| {
                if let Some(d) = s.1.top_disk() {
                    d.size == 1
                } else {
                    false
                }
            })
            .unwrap()
            .0
            .to_owned();

        Move {
            from: current,
            to: self.min_disk_move_storategy.next(),
        }
    }
}

pub struct MinDiskMoveStorategy {
    iter: Box<dyn Iterator<Item = StickName>>,
}
impl MinDiskMoveStorategy {
    pub fn new(num_of_disks: u16) -> Self {
        let steps = if num_of_disks % 2 == 0 {
            [Src, Work, Dst]
        } else {
            [Src, Dst, Work]
        };

        let mut iter = steps.into_iter().cycle();
        iter.next();
        Self {
            iter: Box::new(iter),
        }
    }

    fn next(&mut self) -> StickName {
        self.iter.next().unwrap()
    }
}

#[cfg(test)]
mod tests {
    use super::super::disk::DisksExt;
    use super::*;

    #[test]
    fn oddcase() {
        let mut stg = MinDiskMoveStorategy::new(3);
        assert_eq!(stg.next(), StickName::Dst);
        assert_eq!(stg.next(), StickName::Work);
        assert_eq!(stg.next(), StickName::Src);
        assert_eq!(stg.next(), StickName::Dst);
    }

    #[test]
    fn evencase() {
        let mut stg = MinDiskMoveStorategy::new(4);
        assert_eq!(stg.next(), StickName::Work);
        assert_eq!(stg.next(), StickName::Dst);
        assert_eq!(stg.next(), StickName::Src);
        assert_eq!(stg.next(), StickName::Work);
    }

    #[test]
    fn move_min_disk() {
        let mut solver = HanoiSolver::new(3);
        let mv = solver.move_min_disk();
        assert_eq!(mv, Move { from: Src, to: Dst });
        assert_eq!(solver.game_field.sticks[&Src].disks.to_disk_sizes(), [2, 3]);
        assert_eq!(solver.game_field.sticks[&Dst].disks.to_disk_sizes(), [1]);
        assert_eq!(solver.game_field.sticks[&Work].disks.to_disk_sizes(), []);

        let mv2 = solver.move_min_disk();
        assert_eq!(
            mv2,
            Move {
                from: Dst,
                to: Work
            }
        );
        assert_eq!(solver.game_field.sticks[&Src].disks.to_disk_sizes(), [2, 3]);
        assert_eq!(solver.game_field.sticks[&Dst].disks.to_disk_sizes(), []);
        assert_eq!(solver.game_field.sticks[&Work].disks.to_disk_sizes(), [1]);
    }
}
