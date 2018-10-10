namespace RecordsShowcase {
	interface Person {
		name: string;
		age: number;
		location: string;
	}

	type RecordPerson = Record<string, Person>;

	interface CheckedProperty{
		checked: boolean,
		index: number
	}

	type CheckedProperties = Record<string, CheckedProperty>

	let checkedProperties: CheckedProperties  = {
		'very-long-id-123123': {checked: false, index: 0},
		'very-long-id-3123123': {checked: true, index: 1},
	}
}
