function minimumPlanes(airports) {
    if (airports.length === 1)
        return 0;

    let currFuel = airports[0];
    let planesCount = 1;

    for (let i = 1; i < airports.length; i++) {

        if (currFuel < i) {
            return -1;
        } else if (currFuel >= airports.length - 1) {
            return planesCount;
        } else {
            let maxReach = airports[i] + i;
            if (currFuel < maxReach) {
                currFuel = maxReach;
                planesCount++;
            }
        }
    }
    return -1;
}

let airports = [1, 6, 3, 4, 5, 0, 0, 0, 6];
let minPlanes = minimumPlanes(airports);
console.log("Minimum No. of Planes required: " + minPlanes);

