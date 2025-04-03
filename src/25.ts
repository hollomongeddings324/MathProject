function calculateArea(shape) {
  switch (shape) {
    case 'rectangle':
      return shape.length * shape.width;
    case 'circle':
      return Math.PI * shape.radius ** 2;
    default:
      throw new Error('Invalid shape');
  }
}

// Example usage
const rectangle = { length: 5, width: 3 };
const circle = { radius: 4 };

console.log(`Area of the rectangle is ${calculateArea(rectangle)}.`);
console.log(`Area of the circle is ${calculateArea(circle)}.`);
