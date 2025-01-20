export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  storeId: number;
}

export const products = [
  {
    id: 1,
    name: "Producto 1",
    price: 10,
    description: "Descripción del producto 1",
    storeId: 1,
  },
  {
    id: 2,
    name: "Producto 2",
    price: 20,
    description: "Descripción del producto 2",
    storeId: 1,
  },
  {
    id: 3,
    name: "Producto 3",
    price: 30,
    description: "Descripción del producto 3",
    storeId: 1,
  },
  {
    id: 4,
    name: "Producto 4",
    price: 40,
    description: "Descripción del producto 4",
    storeId: 2,
  },
  {
    id: 5,
    name: "Producto 5",
    price: 50,
    description: "Descripción del producto 5",
    storeId: 2,
  },
  {
    id: 6,
    name: "Producto 6",
    price: 60,
    description: "Descripción del producto 6",
    storeId: 2,
  },
  {
    id: 7,
    name: "Producto 7",
    price: 70,
    description: "Descripción del producto 7",
    storeId: 3,
  },
  {
    id: 8,
    name: "Producto 8",
    price: 80,
    description: "Descripción del producto 8",
    storeId: 3,
  },
  {
    id: 9,
    name: "Producto 9",
    price: 90,
    description: "Descripción del producto 9",
    storeId: 3,
  },
];
