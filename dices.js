function serial(area) { 
    if (area.length === 1) {
        switch (area[0].face) {
            case 1: return 10;
            case 5: return 5;
        }
    } else if (new Set(area.map(a => a.face)).size === 1) {
        const ch = parseInt(area[0].face, 10);
        let multiplier = 10;
        if (ch === 1) multiplier = 100;

        switch (area.length) {
            case 3: return multiplier * ch;
            case 4: return multiplier * ch * 2;
            case 5: return multiplier * ch * 10;
        }
    } else {
        const facesString = area.map(a => a.face).join("");
        switch (facesString) {
            case "12345": return 125;
            case "23456": return 250;
        }
    }
    return 0;
}

function findCombo(area) {
    const allCombinations = [];

    area = [...area].sort((a, b) => a.face - b.face);

    for (let length = 1; length <= area.length; length++) {
        const combinations = getCombinations(area, length);
        allCombinations.push(...combinations);
    }

    return allCombinations
        .map(c => {
            const score = serial(c);
            return score !== 0 ? { dices: c, score } : null;
        })
        .filter(combo => combo !== null)
        .sort((a, b) => b.score - a.score);
}

function getCombinations(array, length) {
    if (length === 1) return array.map(item => [item]);
    const combinations = [];
    array.forEach((item, index) => {
        const smallerCombinations = getCombinations(array.slice(index + 1), length - 1);
        smallerCombinations.forEach(smallerCombination => {
            combinations.push([item, ...smallerCombination]);
        });
    });
    return combinations;
}
