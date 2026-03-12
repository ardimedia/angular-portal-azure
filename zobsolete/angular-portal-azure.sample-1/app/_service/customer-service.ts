namespace Sample1 {
    export class CustomerService {
        constructor() { }

        getAll(): Customer[] {
            let list: Customer[] = [];

            list.push(new Customer(1, 'Evi', 'Pfleger'));
            list.push(new Customer(2, 'Harry', 'Pfleger'));
            list.push(new Customer(3, 'Niklas', 'Pfleger'));
            list.push(new Customer(4, 'Julia', 'Pfleger'));

            return list;
        }

        getById(id): Customer {
            return this.getAll()[id];
        }
    }
}
