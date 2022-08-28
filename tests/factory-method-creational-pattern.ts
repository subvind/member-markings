import { Creator, ConcreteCreatorLetter, ConcreteCreatorNumber, ConcreteCreatorSymbol } from '../index'

/**
 * The client code works with an instance of a concrete creator, albeit through
 * its base interface. As long as the client keeps working with the creator via
 * the base interface, you can pass it any creator's subclass.
 */
function demo(creator: Creator) {
  // ...
  console.log('1 =', creator.char(1));
  console.log('2 =', creator.char(2));
  console.log('52 =', creator.char(52));
  // ...
}

/**
* The Application picks a creator's type depending on the configuration or
* environment.
*/
console.log('Letters:');
demo(new ConcreteCreatorLetter());
console.log('');

console.log('Numbers:');
demo(new ConcreteCreatorNumber());
console.log('');

console.log('Symbols:');
demo(new ConcreteCreatorSymbol());