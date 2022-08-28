import { Creator, ConcreteCreatorNumber } from '../index'

let creator: Creator = new ConcreteCreatorNumber()
console.log('1 =', creator.char(1));
console.log('22 =', creator.char(22));
