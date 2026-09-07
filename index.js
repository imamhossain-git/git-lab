// Simple Node.js app for learning GitHub Actions
export function add(a, b) {
  return a + b;
}

export function greet(name) {
  return `Hello, ${name}!`;
}

// Run when called directly: node index.js
if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(greet("GitHub Actions"));
  console.log(`2 + 3 = ${add(2, 3)}`);
}
