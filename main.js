//menu en Desktop 
const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

//menu en Mobile 
const menu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

//Resumen de shopping-cart
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart')
const shoppingCartResume = document.querySelector('.product-detail')
const productDetail = document.querySelector('.product-detail-aside')

//Menu Principal
const cardsContainer = document.querySelector('.cards-container');

//Crear un Array de Productos
const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    name: 'Laptop',
    price: 2000,
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    name: 'Computer',
    price: 1570,
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

navEmail.addEventListener('click', showDesktopMenu);
menu.addEventListener('click', showMobileMenu);
shoppingCartIcon.addEventListener('click', showShoppingCart);
renderProducts(productList);


function renderProducts(arr){
    for(product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image)
        // productImg.addEventListener('click', openProductDetail);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$ ' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.append(productName, productPrice);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './assets/icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
        productInfo.append(productInfoDiv, productInfoFigure);
        productCard.append(productImg, productInfo);
        cardsContainer.appendChild(productCard);
    
    }
}

function showDesktopMenu() {
    shoppingCartResume.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}


function showMobileMenu() {
    shoppingCartResume.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

function showShoppingCart() {
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetail.classList.add('inactive');
    shoppingCartResume.classList.toggle('inactive');
}


