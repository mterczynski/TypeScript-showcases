namespace ProxiesShowcase {
	interface Person {
		name: string;
		age: number;
	}

	type Proxify<T> = {
		[P in keyof T]: { get(): T[P]; set(v: T[P]): void }
	};

	type ProxifiedPerson = Proxify<Person>

	let proxifiedPerson: ProxifiedPerson = {
		name: {
			get(){
				return ''
			},
			set(name: string){
				this.name = name
			}
		},

		age: {
			get(){
				return 35;
			},
			set(age: number){
				this.age = age;
			}
		}
	}
}
