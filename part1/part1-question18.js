for (let cars in statistics) {
    if (cars.charAt(0) == 'r' || statistics[cars] % 2 == 1) {
        console.log(cars);
    }
}