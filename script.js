let cartCount = 0;

const buttons = document.querySelectorAll('button');
const cartIndicator = document.createElement('span');

cartIndicator.style.marginLeft = "10px";
cartIndicator.style.background = "red";
cartIndicator.style.color = "#fff";
cartIndicator.style.padding = "2px 6px";
cartIndicator.style.borderRadius = "50%";
cartIndicator.textContent = cartCount;

document.querySelector('.navbar nav').appendChild(cartIndicator);

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    cartCount++;
    cartIndicator.textContent = cartCount;
    alert("Item added to cart!");
  });
});

document.getElementById('searchBox').addEventListener('input', function () {
  const searchTerm = this.value.toLowerCase();
  document.querySelectorAll('.product-card').forEach(card => {
    const title = card.querySelector('h4').textContent.toLowerCase();
    card.style.display = title.includes(searchTerm) ? 'block' : 'none';
  });
});

const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-category');
    document.querySelectorAll('.product-card').forEach(card => {
      const match = category === 'all' || card.getAttribute('data-category') === category;
      card.style.display = match ? 'block' : 'none';
    });
  });
});
