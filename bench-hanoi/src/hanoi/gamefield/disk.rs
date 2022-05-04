pub struct Disk {
    pub size: u16,
}

impl Disk {
    pub fn new_array(num_of_disks: u16) -> Vec<Self> {
        (1..=num_of_disks)
            .map(|n| Disk { size: n })
            .collect::<Vec<_>>()
    }
}

pub trait DisksExt {
    fn to_disk_sizes(&self) -> Vec<u16>;
}

impl DisksExt for Vec<Disk> {
    fn to_disk_sizes(&self) -> Vec<u16> {
        self.iter().map(|d| d.size).collect::<Vec<_>>()
    }
}

#[cfg(test)]
mod disk_tests {
    use crate::hanoi::gamefield::disk::DisksExt;

    use super::Disk;
    #[test]
    fn test_new() {
        let disks = Disk::new_array(5);
        assert_eq!(disks.len(), 5);
        assert_eq!(disks.to_disk_sizes(), vec![1, 2, 3, 4, 5])
    }
}
