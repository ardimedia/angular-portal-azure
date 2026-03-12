import { Injectable } from '@angular/core';
import { Customer } from './customer.model';

@Injectable({ providedIn: 'root' })
export class DemoDataService {
  private customers: Customer[] = [
    { id: 1, name: 'Ardimedia AG', email: 'info@ardimedia.com', city: 'Vaduz', bladePath: 'customers/detail' },
    { id: 2, name: 'Muster GmbH', email: 'info@muster.ch', city: 'Zürich', bladePath: 'customers/detail' },
    { id: 3, name: 'Test AG', email: 'test@test.li', city: 'Schaan', bladePath: 'customers/detail' },
    { id: 4, name: 'Demo Corp', email: 'demo@demo.com', city: 'Triesen', bladePath: 'customers/detail' },
    { id: 5, name: 'Alpha GmbH', email: 'alpha@alpha.at', city: 'Wien', bladePath: 'customers/detail' },
  ];

  getCustomers(): Promise<Customer[]> {
    return new Promise((resolve) =>
      setTimeout(() => resolve(this.customers.map((c) => ({ ...c }))), 300),
    );
  }

  getCustomer(id: number): Promise<Customer> {
    return new Promise((resolve, reject) =>
      setTimeout(() => {
        const customer = this.customers.find((c) => c.id === id);
        if (customer) resolve({ ...customer });
        else reject({ message: `Customer ${id} not found`, status: 404 });
      }, 200),
    );
  }

  saveCustomer(customer: Customer): Promise<Customer> {
    return new Promise((resolve) =>
      setTimeout(() => {
        const index = this.customers.findIndex((c) => c.id === customer.id);
        if (index >= 0) this.customers[index] = { ...customer };
        resolve({ ...customer });
      }, 500),
    );
  }

  deleteCustomer(id: number): Promise<void> {
    return new Promise((resolve) =>
      setTimeout(() => {
        this.customers = this.customers.filter((c) => c.id !== id);
        resolve();
      }, 400),
    );
  }
}
