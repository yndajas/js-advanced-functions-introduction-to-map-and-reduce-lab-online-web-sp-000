// Your code here

function mapToNegativize(sourceArray) {
    const mutatedArray = [];
    for (const element of sourceArray) {
        mutatedArray.push(element * -1);
    }
    return mutatedArray;
}

function mapToNoChange(sourceArray) {
    return sourceArray;
}

function mapToDouble(sourceArray) {
    const mutatedArray = [];
    for (const element of sourceArray) {
        mutatedArray.push(element * 2);
    }
    return mutatedArray;
}

function mapToSquare(sourceArray) {
    const mutatedArray = [];
    for (const element of sourceArray) {
        mutatedArray.push(element * element);
    }
    return mutatedArray;
}

function reduceToTotal(sourceArray, startingPoint = 0) {
    for (const element of sourceArray) {
        startingPoint += element;
    }
    return startingPoint;
}

function reduceToAllTrue(sourceArray) {
    let allTrue = true;
    for (const element of sourceArray) {
        if (!!element === false) {
            allTrue = false;
        }
    }
    return allTrue;
}

function reduceToAnyTrue(sourceArray) {
    let anyTrue = false;
    for (const element of sourceArray) {
        if (!!element === true) {
            anyTrue = true;
        }
    }
    return anyTrue;
}