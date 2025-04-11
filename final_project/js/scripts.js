// Global Header
const header = `
  <header>
    <nav>
      <ul>
        <li><a href="home.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="product.html">Product</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </nav>
  </header>
`;

// Global Footer
const footer = `
  <footer>
    <p>&copy; 2025 Polaroid Cameras. All rights reserved.</p>
  </footer>
`;

// Put Header and Footer into Pages
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("header-placeholder").innerHTML = header;
  document.querySelector("footer-placeholder").innerHTML = footer;
});
