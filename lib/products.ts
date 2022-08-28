
/**
 * The Product interface declares the operations that all concrete products must
 * implement.
 */
export interface Product {
  family: string;
  char(place: number): string;
}

/**
 * Concrete Products provide various implementations of the Product interface.
 */
export class ConcreteProductLetter implements Product {
  family: string = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz';

  public char(place: number): string {
    let c = this.family.split('')
    place = (place - 1) % c.length // limit boundry to family length
    return c[place];
  }
}

export class ConcreteProductNumber implements Product {
  family: string = ')0!1@2#3$4%5^6&7*8(9';

  public char(place: number): string {
    let c = this.family.split('')
    place = (place - 1) % c.length
    return c[place];
  }
}

export class ConcreteProductSymbol implements Product {
  family: string = '~`_-+={[}]|\:;"\'<,>.?/';

  public char(place: number): string {
    let c = this.family.split('')
    place = (place - 1) % c.length
    return c[place];
  }
}