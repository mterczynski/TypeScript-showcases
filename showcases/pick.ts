namespace PickShowcase {
  let person = {
    name: 'John',
    age: 36,
    gender: 'male'
  }

  declare function pick<T, K extends keyof T>(obj: T, ...keys: K[]): Pick<T, K>;

  const nameAndAgeOnly = pick(person, "name", "age");  // { name: string, age: number }
}
