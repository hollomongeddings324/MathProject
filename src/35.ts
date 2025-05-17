function getRandomInt(min: number = 0, max: number = 100): number {
    const range = max - min + 1;
    return Math.floor(Math.random() * range) + min;
}
