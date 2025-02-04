export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
};

export const products = [
  // 1. Laptops
  { id: 1, name: "Gaming Laptop X100", category: "Laptops", price: 1500 },
  { id: 2, name: "Ultrabook Z5", category: "Laptops", price: 1200 },
  { id: 3, name: "Laptop Pro 15", category: "Laptops", price: 1800 },
  { id: 4, name: "Budget Laptop G1", category: "Laptops", price: 800 },
  { id: 5, name: "Convertible Laptop Flex", category: "Laptops", price: 1400 },
  { id: 6, name: "Lightweight Laptop S", category: "Laptops", price: 1100 },
  { id: 7, name: "High-Performance Laptop M", category: "Laptops", price: 1600 },
  { id: 8, name: "Student Laptop K", category: "Laptops", price: 700 },
  { id: 9, name: "Laptop Pro Max 17", category: "Laptops", price: 2000 },
  { id: 10, name: "Eco-Friendly Laptop E", category: "Laptops", price: 1300 },

  // 2. Smartphones
  { id: 11, name: "Smartphone Ultra S", category: "Smartphones", price: 1000 },
  { id: 12, name: "Gaming Phone G7", category: "Smartphones", price: 900 },
  { id: 13, name: "Camera Phone Pro", category: "Smartphones", price: 1200 },
  { id: 14, name: "5G Smartphone Z", category: "Smartphones", price: 850 },
  { id: 15, name: "Flagship Phone Y1", category: "Smartphones", price: 1300 },
  { id: 16, name: "Budget Smartphone X", category: "Smartphones", price: 600 },
  { id: 17, name: "Smartphone Compact C", category: "Smartphones", price: 750 },
  { id: 18, name: "Durable Phone D1", category: "Smartphones", price: 950 },
  { id: 19, name: "Luxury Smartphone L", category: "Smartphones", price: 2000 },
  { id: 20, name: "Eco Smartphone Green", category: "Smartphones", price: 700 },

  // 3. Accessories
  { id: 21, name: "Wireless Mouse Pro", category: "Accessories", price: 50 },
  { id: 22, name: "Mechanical Keyboard K10", category: "Accessories", price: 120 },
  { id: 23, name: "Bluetooth Headphones H2", category: "Accessories", price: 150 },
  { id: 24, name: "USB-C Docking Station", category: "Accessories", price: 200 },
  { id: 25, name: "External SSD 1TB", category: "Accessories", price: 150 },
  { id: 26, name: "Gaming Controller G2", category: "Accessories", price: 80 },
  { id: 27, name: "Laptop Stand Adjustable", category: "Accessories", price: 70 },
  { id: 28, name: "Portable Charger 20k mAh", category: "Accessories", price: 60 },
  { id: 29, name: "Wireless Earbuds TWS", category: "Accessories", price: 100 },
  { id: 30, name: "4K Webcam Pro", category: "Accessories", price: 180 },

  // 4. Smart Home Devices
  { id: 31, name: "Smart Thermostat T1", category: "Smart Home Devices", price: 300 },
  { id: 32, name: "Smart Doorbell Camera", category: "Smart Home Devices", price: 200 },
  { id: 33, name: "Smart Speaker Home", category: "Smart Home Devices", price: 150 },
  { id: 34, name: "Smart Light Bulb RGB", category: "Smart Home Devices", price: 40 },
  { id: 35, name: "Smart Plug Energy Monitor", category: "Smart Home Devices", price: 50 },
  { id: 36, name: "Smart Lock Secure", category: "Smart Home Devices", price: 250 },
  { id: 37, name: "Home Security Camera S", category: "Smart Home Devices", price: 350 },
  { id: 38, name: "Smart Vacuum Cleaner V1", category: "Smart Home Devices", price: 400 },
  { id: 39, name: "Smart Coffee Maker C3", category: "Smart Home Devices", price: 180 },
  { id: 40, name: "Smart Hub Controller", category: "Smart Home Devices", price: 220 },

  // 5. Wearable Technology
  { id: 41, name: "Fitness Tracker F1", category: "Wearable Technology", price: 120 },
  { id: 42, name: "Smartwatch Series 7", category: "Wearable Technology", price: 400 },
  { id: 43, name: "VR Headset Pro", category: "Wearable Technology", price: 700 },
  { id: 44, name: "Smart Glasses Vision", category: "Wearable Technology", price: 800 },
  { id: 45, name: "Health Monitor Band", category: "Wearable Technology", price: 150 },
  { id: 46, name: "Gaming AR Headset", category: "Wearable Technology", price: 1000 },
  { id: 47, name: "Hybrid Smartwatch X", category: "Wearable Technology", price: 300 },
  { id: 48, name: "Sleep Tracker Band", category: "Wearable Technology", price: 100 },
  { id: 49, name: "Sports GPS Watch", category: "Wearable Technology", price: 350 },
  { id: 50, name: "Heart Rate Monitor Pro", category: "Wearable Technology", price: 250 },
];
