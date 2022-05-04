use std::{collections::HashMap, fmt, ops::IndexMut};

use super::disk::Disk;

pub struct Stick {
    pub disks: Vec<Disk>,
}

impl Stick {
    pub fn new() -> Self {
        Stick { disks: vec![] }
    }

    pub fn with_disks(disks: Vec<Disk>) -> Self {
        Stick { disks }
    }

    pub fn top_disk(&self) -> Option<&Disk> {
        self.disks.first()
    }

    pub fn take_from_top(&mut self) -> Result<Disk, String> {
        if self.top_disk().is_some() {
            Ok(self.disks.remove(0))
        } else {
            Err("No disk.".to_string())
        }
    }

    pub fn put_onto_top(&mut self, disk: Disk) {
        self.disks.insert(0, disk)
    }
}

impl Default for Stick {
    fn default() -> Self {
        Self::new()
    }
}

pub type SetOfSticks = HashMap<StickName, Stick>;
impl IndexMut<&StickName> for SetOfSticks {
    fn index_mut(&mut self, key: &StickName) -> &mut Stick {
        self.get_mut(key).unwrap()
    }
}
pub fn init_set_of_sticks(num_of_disks: u16) -> SetOfSticks {
    HashMap::from([
        (
            StickName::Src,
            Stick::with_disks(Disk::new_array(num_of_disks)),
        ),
        (StickName::Dst, Stick::new()),
        (StickName::Work, Stick::new()),
    ])
}

#[cfg(test)]
mod tests {
    use crate::hanoi::gamefield::disk::DisksExt;

    use super::*;

    #[test]
    fn test_new() {
        let mut s = Stick::new();
        assert_eq!(s.disks.len(), 0);
        assert!(s.take_from_top().is_err());
    }

    #[test]
    fn test_put_and_take() {
        let mut s = Stick::new();
        s.put_onto_top(Disk { size: 3 });
        s.put_onto_top(Disk { size: 2 });
        s.put_onto_top(Disk { size: 1 });
        assert_eq!(s.disks.to_disk_sizes(), [1, 2, 3]);
        let d = s.take_from_top().unwrap();
        assert_eq!(d.size, 1);
        assert_eq!(s.disks.to_disk_sizes(), [2, 3]);
    }

    #[test]
    fn test_init_set_of_sticks() {
        let sticks = init_set_of_sticks(3);
        assert_eq!(sticks[&StickName::Src].disks.to_disk_sizes(), [1, 2, 3]);
        assert_eq!(sticks[&StickName::Dst].disks.to_disk_sizes(), []);
        assert_eq!(sticks[&StickName::Work].disks.to_disk_sizes(), []);
    }
}

#[derive(Debug, PartialEq, Eq, Hash, Clone, Copy)]
pub enum StickName {
    Src,
    Dst,
    Work,
}

impl fmt::Display for StickName {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self {
            Self::Src => write!(f, "src"),
            Self::Dst => write!(f, "dst"),
            Self::Work => write!(f, "work"),
        }
    }
}
