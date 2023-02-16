// when creating local-scope alias of existing symbol,
// use format of existing identifier
// local alias must match the existing naming and format of the source
// for variables use const for local aliases
// for class fields use readonly attribute

const {Foo} = SomeType;
const CAPACITY = 5;

class Teapot {
  readonly BrewStateEnum = BrewStateEnum;
  readonly CAPACITY = CAPACITY;
}

// if creating alias to expose it to a template in framework of choice, remember to also apply the proper access modifiers