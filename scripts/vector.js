const vector = {
    magnitudeOfVector: (pointA, pointB) => {
        return Math.sqrt(
            Math.pow(pointB.x - pointA.x, 2) + 
            Math.pow(pointB.y - pointB.x, 2))
    }
}

module.exports = vector
