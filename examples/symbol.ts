import { Creator, ConcreteCreatorSymbol } from '../index'

let creator: Creator = new ConcreteCreatorSymbol()
console.log('1 =', creator.char(1));
console.log('33 =', creator.char(33));
