
interface PavingSlab {
    // название моделей
}

interface Cobblestone {
    // название моделей
}

interface Curb {
    // название моделей(прессованя и литье)
}


export interface IProduct {
    paving_slab: PavingSlab; // Тротуарная плитка
    cobblestone: Cobblestone; // Брусчатка
    curb: PavingSlab; // Бордюр
}
