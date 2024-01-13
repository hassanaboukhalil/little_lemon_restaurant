function random_nb(){
    // it return random nb between 0 (inclusive) and 1 (inclusive)
    let random = Math.random() * (1 - 0) + 0;
    return random
}

export function fetchAPI(date) {
    let result = [];

    for(let i = 17; i < 23; i++) {
        if(random_nb() < 0.5) {
            result.push(i + ':00');
        }
    }
    return result;
};
export function submitAPI(formData) {
    return true;
};