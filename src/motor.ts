import {
    partida,
    Estado
} from "./modelo"

export const dameCarta = () : number => {
    const aleatorio : number = Math.floor(Math.random() * 11);
    return aleatorio > 7 ? aleatorio + 2 : aleatorio;
};

const puntosCarta = (carta: number) : number  => {
    return carta <= 7 ? carta : 0.5;
};

export const sumarPuntuacion = (carta: number) => {
    partida.puntos += puntosCarta(carta);
};

export const gameOver = () : boolean => 
    partida.puntos > 7.5;

export const ganarPartida = () : boolean =>
    partida.puntos === 7.5;

export const comprobarMePlanto = (puntos: number) : Estado => {
        if (puntos < 4) {
            return "MENOR_QUE_4";
        }
        if (puntos === 5 ) {
            return "HA_SIDO_5";
        }
        if (puntos >= 6 && puntos <= 7) {
            return "HA_SIDO_6_O_7";
        }
        return "NINGUN_ESTADO";
};