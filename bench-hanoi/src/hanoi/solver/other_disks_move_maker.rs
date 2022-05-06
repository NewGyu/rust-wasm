use super::{disk::Disk, stick::StickName, HanoiSolver, Move};

pub trait OtherDisksMove {
    fn move_movable_other_disk(&mut self) -> Move;
    fn calc_move_other(&mut self) -> Move;
}

impl OtherDisksMove for HanoiSolver {
    fn move_movable_other_disk(&mut self) -> Move {
        let mv = self.calc_move_other();
        self.game_field.move_disk(mv.from, mv.to);
        mv
    }
    fn calc_move_other(&mut self) -> Move {
        let others = self
            .game_field
            .sticks
            .iter()
            .map(|s| StickSummary {
                name: s.0.to_owned(),
                top_disk: s.1.top_disk(),
            })
            .filter(|s| match s.top_disk {
                Some(d) => d.size > 1,
                _ => true,
            })
            .collect::<Vec<_>>();

        match (others[0].top_disk, others[1].top_disk) {
            (None, None) => panic!("both sticks have no disk!"),
            (Some(_), None) => Move {
                from: others[0].name,
                to: others[1].name,
            },
            (None, Some(_)) => Move {
                from: others[1].name,
                to: others[0].name,
            },
            (Some(d0), Some(d1)) => {
                if d0.size < d1.size {
                    Move {
                        from: others[0].name,
                        to: others[1].name,
                    }
                } else {
                    Move {
                        from: others[1].name,
                        to: others[0].name,
                    }
                }
            }
        }
    }
}

struct StickSummary<'a> {
    name: StickName,
    top_disk: Option<&'a Disk>,
}

#[cfg(test)]
mod tests {
    use super::super::disk::DisksExt;
    use super::super::stick::StickName::*;
    use super::*;
    use crate::hanoi::solver::min_disk_move_maker::MinDiskMove;

    #[test]
    fn move_other_disk() {
        let mut solver = HanoiSolver::new(3, None);
        let mv1 = solver.move_min_disk();
        let mv2 = solver.move_movable_other_disk();

        assert_eq!(mv1, Move { from: Src, to: Dst });
        assert_eq!(
            mv2,
            Move {
                from: Src,
                to: Work
            }
        );
        assert_eq!(solver.game_field.sticks[&Src].disks.to_disk_sizes(), [3]);
        assert_eq!(solver.game_field.sticks[&Dst].disks.to_disk_sizes(), [1]);
        assert_eq!(solver.game_field.sticks[&Work].disks.to_disk_sizes(), [2]);
    }
}
