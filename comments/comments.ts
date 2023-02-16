// comments and documentation

// JSDoc vs comments

// two types of comments: JSDoc (/** ... */)  [ documentation ] ...follow Javascript style
// and ordinary comments (// ... or /* ... */) [ implementation comments]

// omit comments that are redundant w/ Typescript
// do note declare types in @param or @return blocks
// do not write @implements, @enum, @private, @override on code that
// uses the implements, enum, private, overrride keywords


// avoid comments that restate parameter name and type

//@param and @return are only required when they add info
/**
 * POSTs the request to start coffee brewing.
 * @param amountLitres The amount to brew. Must fit the pot size!
 */
brew(amountLitres: number, logger: Logger) {
  // ...
}

// parameter property is a constructor parameter that is prefixed
// by one of the modifiers private, protected, public, or readonly
// constructor(private readonly foo: Foo) declares the constructor takes a parameter foo,
// but also declares a private readonly property foo, 
// and assigns the parameter into that property before executing the remainder of the constructor


/** This class demonstrates how parameter properties are documented. */
class ParamProps {
  /**
   * @param percolator The percolator used for brewing.
   * @param beans The beans to brew.
   */
  constructor(
    private readonly percolator: Percolator,
    private readonly beans: CoffeeBean[]) {}
}

/** This class demonstrates how ordinary fields are documented. */
class OrdinaryClass {
  /** The bean that will be used in the next call to brew(). */
  nextBean: CoffeeBean;

  constructor(initialBean: CoffeeBean) {
    this.nextBean = initialBean;
  }
}

// comments when calling a function

// Inline block comments for parameters that'd be hard to understand:
new Percolator().brew(/* amountLitres = */ 6);
// Also consider using named arguments and destructuring parameters (in brew's declaration):
new Percolator().brew({amountLitres: 5});

/** An ancient {@link CoffeeBrewer} */
export class Percolator implements CoffeeBrewer {
  /**
   * Brews coffee.
   * @param amountLitres The amount to brew. Must fit the pot size!
   */
  brew(amountLitres: number) {
    // This implementation creates terrible coffee, but whatever.
    // TODO(b/12345): Improve percolator brewing.
  }
}

// do not write JsDoc between Decorator and decorated statement
@Component({
  selector: 'foo',
  template: 'bar',
})
/** Component that prints "bar". */
export class FooComponent {}

// write it before
/** Component that prints "bar". */
@Component({
  selector: 'foo',
  template: 'bar',
})
export class FooComponent {}