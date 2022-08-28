import { Creator, ConcreteCreatorLetter } from '../index'

let creator: Creator = new ConcreteCreatorLetter()
console.log('1 =', creator.char(1));
console.log('55 =', creator.char(55));
