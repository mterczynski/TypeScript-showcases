namespace PartialsShowcase {
	interface Person {
		name: string;
		age: number;
		location: string;
	}

	type PartialPerson = Partial<Person>;

	let partialPerson: PartialPerson = {
		name: 'Johnny'
	}
}
