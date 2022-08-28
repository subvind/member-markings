import { Product, ConcreteProductLetter, ConcreteProductNumber, ConcreteProductSymbol } from './products'

/**
 * The Creator class declares the factory method that is supposed to return an
 * object of a Product class. The Creator's subclasses usually provide the
 * implementation of this method.
 */
export abstract class Creator {
  /**
   * Note that the Creator may also provide some default implementation of the
   * factory method.
   */
  public abstract factoryMethod(): Product;

  /**
   * Also note that, despite its name, the Creator's primary responsibility is
   * not creating products. Usually, it contains some core business logic that
   * relies on Product objects, returned by the factory method. Subclasses can
   * indirectly change that business logic by overriding the factory method
   * and returning a different type of product from it.
   */
  public char(place: number): string {
    // Call the factory method to create a Product object.
    const product = this.factoryMethod();
    // Now, use the product.
    // return `Creator: The same creator's code has just worked with ${product.char()}`;
    return product.char(place)
  }
}

/**
 * Concrete Creators override the factory method in order to change the
 * resulting product's type.
 */
export class ConcreteCreatorLetter extends Creator {
  /**
   * Note that the signature of the method still uses the abstract product
   * type, even though the concrete product is actually returned from the
   * method. This way the Creator can stay independent of concrete product
   * classes.
   */
  public factoryMethod(): Product {
    return new ConcreteProductLetter();
  }
}

export class ConcreteCreatorNumber extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProductNumber();
  }
}

export class ConcreteCreatorSymbol extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProductSymbol();
  }
}