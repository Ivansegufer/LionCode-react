export const increaseDelay = (delay, increment) => {
    if(typeof delay === 'number' && typeof increment === 'number') {
        delay += increment;
        return delay;
    }
    else return 0;
}