import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export type Customer = {
  name: string;
  email: string;
  phone: string;
  address: string;
};

export async function addCustomer(customer: Customer) {
  return await prisma.customer.create({
    data: customer,
  });
}

export async function getCustomers(): Promise<Customer[]> {
  return await prisma.customer.findMany();
}

export async function getCustomerById(id: number): Promise<Customer | null> {
  return await prisma.customer.findUnique({
    where: { id },
  });
}

export async function updateCustomer(id: number, updatedCustomer: Customer) {
  return await prisma.customer.update({
    where: { id },
    data: updatedCustomer,
  });
}

export async function deleteCustomer(id: number) {
  return await prisma.customer.delete({
    where: { id },
  });
}
