pub mod disk;
pub mod stick;

use self::stick::*;

pub struct GameField {
    pub num_of_disks: u16,
    pub sticks: SetOfSticks,
}

impl GameField {
    pub fn new(num_of_disks: u16) -> Self {
        GameField {
            num_of_disks,
            sticks: init_set_of_sticks(num_of_disks),
        }
    }

    pub fn move_disk(&mut self, from: StickName, to: StickName) {
        if let Ok(d) = self.sticks[&from].take_from_top() {
            self.sticks[&to].put_onto_top(d);
        }
    }

    pub fn inspection(&self) -> String {
        let mut str = String::new();
        use std::fmt::Write;
        for x in &self.sticks {
            writeln!(
                str,
                "{}: {:?}",
                x.0,
                x.1.disks.iter().map(|d| d.size).collect::<Vec<_>>()
            )
            .unwrap();
        }
        str
    }

    pub fn is_completed(&self) -> bool {
        self.sticks[&StickName::Src].disks.is_empty()
            && self.sticks[&StickName::Work].disks.is_empty()
    }
}

#[derive(PartialEq, Eq, Debug)]
pub struct Move {
    pub from: StickName,
    pub to: StickName,
}

#[cfg(test)]
mod tests {
    use super::{disk::*, stick::StickName::*, *};

    #[test]
    fn test_new() {
        let f = GameField::new(3);
        assert_eq!(f.sticks[&Src].disks.to_disk_sizes(), vec![1, 2, 3]);
        assert_eq!(f.sticks[&Work].disks.to_disk_sizes(), vec![]);
        assert_eq!(f.sticks[&Dst].disks.to_disk_sizes(), vec![]);
        assert!(!f.is_completed());
    }

    #[test]
    fn test_move() {
        let mut f = GameField::new(3);
        f.move_disk(Src, Dst);
        assert_eq!(f.sticks[&Src].disks.to_disk_sizes(), [2, 3]);
        assert_eq!(f.sticks[&Work].disks.to_disk_sizes(), []);
        assert_eq!(f.sticks[&Dst].disks.to_disk_sizes(), [1]);

        f.move_disk(Src, Work);
        f.move_disk(Dst, Work);
        f.move_disk(Src, Dst);
        assert_eq!(f.sticks[&Src].disks.to_disk_sizes(), vec![]);
        assert_eq!(f.sticks[&Work].disks.to_disk_sizes(), vec![1, 2]);
        assert_eq!(f.sticks[&Dst].disks.to_disk_sizes(), vec![3]);
        assert!(!f.is_completed());

        f.move_disk(Work, Src);
        f.move_disk(Work, Dst);
        f.move_disk(Src, Dst);
        assert!(f.is_completed());
    }
}
