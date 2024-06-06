import { NextApiRequest, NextApiResponse } from 'next';
import { addCustomer, getCustomers } from '../../../lib/customer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, phone, address } = req.body;
    try {
      const customer = await addCustomer({ name, email, phone, address });
      res.status(200).json({ message: 'Customer registered successfully', customer });
    } catch (error) {
      res.status(500).json({ message: 'Failed to register customer', error });
    }
  } else if (req.method === 'GET') {
    try {
      const customers = await getCustomers();
      res.status(200).json(customers);
    } catch (error) {
      res.status(500).json({ message: 'Failed to retrieve customers', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
