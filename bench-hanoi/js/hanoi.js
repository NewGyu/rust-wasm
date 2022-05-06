class Disk {
    constructor(size) {
        this.size = size;
    }
}

class Stick {
    disks = [];

    topDisk() {
        return this.disks[0];
    }

    take() {
        if (this.disks.length === 0)
            throw new Error("No disk.");
        return this.disks.shift();
    }

    put(disk) {
        const topDisk = this.topDisk();
        if (topDisk && topDisk.size < disk.size)
            throw new Error("The disk is larger than tha base.");
        this.disks.unshift(disk);
    }
}

class GameField {
    STICK_NAMES = ["src", "dst", "work"];
    sticks = {
        src: new Stick(),
        dst: new Stick(),
        work: new Stick()
    }

    constructor(disks) {
        this.sticks.src.disks = Array(disks).fill(0).map((v, i) => new Disk(i + 1));
    }

    moveDisk(from, to) {
        const d = this.sticks[from].take();
        this.sticks[to].put(d);
    }

    printf() {
        for (const s in this.sticks) {
            console.log(`${s}: ${this.sticks[s].disks.map(d => d.size)}`);
        }
    }

    isCompleted() {
        return this.sticks.src.disks.length === 0
            && this.sticks.work.disks.length === 0;
    }
}

export class HanoiSolver {
    constructor(numOfDisks) {
        this.numOfDisks = numOfDisks;
        this.gameField = new GameField(numOfDisks);
        this.minDiskMoveSteps = numOfDisks % 2 === 0
            ? ["work", "dst", "src"]    //even case
            : ["dst", "work", "src"];   //odd case
    }

    solve(debug) {
        const traceUnit = this.numOfDisks < 11 ? 100 : 100 * Math.pow(2, (this.numOfDisks - 10));
        let round = 0;
        do {
            if (debug && round % traceUnit === 0)
                debugPrint(round, this.gameField);
            round++;
            this.moveMinDisk();
            if (this.gameField.isCompleted())
                break;
            round++;
            this.moveOtherAvailableDisk();
        } while (true)
        debugPrint(round, this.gameField);
    }

    moveMinDisk() {
        const currentStickName = this.gameField.STICK_NAMES.find(name => {
            const d = this.gameField.sticks[name].topDisk();
            return d && d.size === 1;
        });
        const moveToStickIndex = this.minDiskMoveSteps.findIndex(e => e === currentStickName) + 1;
        const moveToStickName = this.minDiskMoveSteps[moveToStickIndex > 2 ? 0 : moveToStickIndex];
        this.gameField.moveDisk(currentStickName, moveToStickName);
    }

    moveOtherAvailableDisk() {
        const mv = this.gameField.STICK_NAMES.reduce((sum, curr) => {
            const d = this.gameField.sticks[curr].topDisk();
            if (!d) {  //the stick has no disk
                sum.to = curr;
            } else if (d.size === 1) {
                //nothing to do
            } else if (sum && sum.from) {
                if (d.size < this.gameField.sticks[sum.from].topDisk().size) {
                    sum.to = sum.from;
                    sum.from = curr;
                } else {
                    sum.to = curr;
                }
            } else {
                sum.from = curr;
            }
            return sum;

        }, { from: null, to: null });
        this.gameField.moveDisk(mv.from, mv.to);
    }
}

function debugPrint(round, gameField) {
    console.log(round);
    gameField.printf();
}