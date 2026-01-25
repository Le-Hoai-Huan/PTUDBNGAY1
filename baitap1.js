
// Câu 1: Constructor Product

function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}


// Câu 2: Mảng products (ít nhất 6 sản phẩm, >= 2 danh mục)

const products = [
  new Product(1, "iPhone 15 Pro", 35000000, 10, "Electronics", true),
  new Product(2, "MacBook Pro M3", 52000000, 5, "Electronics", true),
  new Product(3, "AirPods Pro", 6500000, 0, "Accessories", true),
  new Product(4, "Apple Watch Ultra", 21000000, 7, "Accessories", true),
  new Product(5, "Samsung Galaxy S24", 28000000, 3, "Electronics", false),
  new Product(6, "USB-C Cable", 500000, 50, "Accessories", true)
];

// Câu 3: Mảng mới chỉ chứa name & price

const nameAndPrice = products.map(p => ({
  name: p.name,
  price: p.price
}));
console.log("Câu 3:", nameAndPrice);

// Câu 4: Lọc sản phẩm còn hàng (quantity > 0)
const inStockProducts = products.filter(p => p.quantity > 0);
console.log("Câu 4:", inStockProducts);


// Câu 5: Kiểm tra có sản phẩm giá > 30.000.000 không

const hasExpensiveProduct = products.some(p => p.price > 30000000);
console.log("Câu 5:", hasExpensiveProduct);


// Câu 6: Kiểm tra tất cả sản phẩm Accessories có đang bán không

const allAccessoriesAvailable = products
  .filter(p => p.category === "Accessories")
  .every(p => p.isAvailable === true);

console.log("Câu 6:", allAccessoriesAvailable);


// Câu 7: Tính tổng giá trị kho hàng

const totalInventoryValue = products.reduce(
  (total, p) => total + p.price * p.quantity,
  0
);
console.log("Câu 7: Tổng giá trị kho =", totalInventoryValue.toLocaleString(), "VND");


// Câu 8: for...of in ra Tên - Danh mục - Trạng thái

console.log("Câu 8:");
for (const product of products) {
  const status = product.isAvailable ? "Đang bán" : "Ngừng bán";
  console.log(`${product.name} - ${product.category} - ${status}`);
}

// Câu 9: for...in in ra tên thuộc tính & giá trị

console.log("Câu 9:");
for (const key in products[0]) {
  console.log(`${key}:`, products[0][key]);
}


// Câu 10: Tên sản phẩm đang bán và còn hàng

const sellingAndInStockNames = products
  .filter(p => p.isAvailable && p.quantity > 0)
  .map(p => p.name);

console.log("Câu 10:", sellingAndInStockNames);
