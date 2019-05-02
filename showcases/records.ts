namespace RecordsShowcase {
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
