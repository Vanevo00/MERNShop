const products = [
  {
    name: "test12",
    price: 12
  },
  {
    name: "test10",
    price: 10
  }
]

export default {
  Query: {
    getProducts: () => products,
  },
}
