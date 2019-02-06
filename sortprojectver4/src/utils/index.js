class SortFactory {
    swap(arr, i, j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    sortFruits(arr, key, operator) {
        for (let i = 0; i < arr.length -1; i++) {
            for (let j = 0; j < arr.length -1; j++){
                let a = arr[j][key];
                let b = arr[j + 1][key];
                switch (operator) {
                    case "Asc":
                        if (a > b) this.swap(arr, j, j + 1)
                        break;
                    case 'Dsc':
                        if (a < b) this.swap(arr, j, j + 1)
                        break;
                    default:
                        break;
                }
            }
        }
        return arr;
    }
}

export default SortFactory;