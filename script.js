document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
  
  const buttons = document.querySelectorAll('.add-to-cart');
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      alert('Added to cart!');
    });
  });
  