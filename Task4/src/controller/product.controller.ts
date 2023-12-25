import { Request, Response } from 'express';
import { Product } from '../models/product.model';

let products: Product[] = [
  { id: 1, name: 'Product 1', description: 'Description 1', price: 10 },
  { id: 2, name: 'Product 2', description: 'Description 2', price: 20 },
];

let productIdCounter: number = products.length + 1;

export const getAllProducts = (_req: Request, res: Response): void => {
  res.send(products);
  
};

export const getProductById = (req: Request, res: Response): void => {
  const productId = parseInt(req.params.id);
  const product = products.find((p) => p.id === productId);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product not found' });
  }
};

export const createProduct = (req: Request, res: Response): void => {
  const { name, description, price }: Product = req.body;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
  const newProduct: Product = {
    id: productIdCounter++,
    name,
    description,
    price,
  };
  products.push(newProduct);
  res.status(201).send(newProduct);
};

export const updateProduct = (req: Request, res: Response): void => {
    try{
  const productId = parseInt(req.params.id);
  const updatedProduct: Partial<Product> = req.body;
  const productIndex = products.findIndex((p) => p.id === productId);
  if (productIndex !== -1) {
    products[productIndex] = { ...products[productIndex], ...updatedProduct };
    res.send(products[productIndex]);
  } else {
    res.status(404).send({ message: 'Product not found' });
  }
}catch(err){
    res.status(500).send(err as Error );
}
};

export const deleteProduct = (req: Request, res: Response): void => {
  const productId = parseInt(req.params.id);
  const initialLength = products.length;
  products = products.filter((p) => p.id !== productId);
  if (products.length !== initialLength) {
    res.send({ message: 'Product deleted successfully' });
  } else {
    res.status(404).send({ message: 'Product not found' });
  }
};



