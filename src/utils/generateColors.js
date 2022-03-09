import { generateRandomColor } from "./generateRandomColor";
import { shuffle } from "./shuffle";

export const generateColors = (arr) => {

    const textColor = generateRandomColor(arr);

    const copy = [...arr];
    copy.splice(copy.indexOf(textColor), 1);
    const styleColor = generateRandomColor(copy);

    const buttonColors = [textColor, styleColor];
    while (buttonColors.length < 4){
        const randomButtonColor = generateRandomColor(copy);
        if (!buttonColors.includes(randomButtonColor)){
            buttonColors.push(randomButtonColor);
        }
    }

    return {
        textColor: textColor,
        styleColor: styleColor,
        buttonColors: shuffle(buttonColors)
    };
}
