
function handleSearch() {
    const searchInput = document.querySelector('.search');
    const searchValue = searchInput.value;
    
    console.log('Search value:', searchValue);
  }
  
  function handleShopNow() {
    console.log('Shop Now button clicked');
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.querySelector('.rightbox .search');
    const shopNowButton = document.querySelector('.homeText button');
  
    searchButton.addEventListener('click', handleSearch);
    shopNowButton.addEventListener('click', handleShopNow);
  });
  