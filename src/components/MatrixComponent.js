export default class Matrixcomponent {
    #matrix
    constructor(rows,columns,matrixElem, matrixStates, interval = 1000){
        matrixElem.style.setProperty("grid-template-columns", `repeat(${columns},1fr)`);
        matrixElem.style.setProperty("grid-template-rows", `repeat(${rows},1fr)`);
    }
}