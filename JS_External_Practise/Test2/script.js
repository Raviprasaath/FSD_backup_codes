const productsList = document.getElementsByClassName('products')[0];
const shoppingCart = document.getElementsByClassName('shopping-cart')[0];
console.log("out");

const products = [
    { name: "Product 1", price: 10.0 },
    { name: "Product 2", price: 5.0 },
    { name: "Product 3", price: 20.0 },
    { name: "Product 4", price: 15.0 },
    { name: "Product 5", price: 2.5 },
];

const cart = [];

function initialLoad() {
    products.map((item) => {
        productsList.innerHTML += `
        <div class="product">
            <span class="product-name">Product ${item.name}</span><br>
            <span class="product-price bottom-content">$${item.price}</span><br>
            <button class="add-to-cart">Add to Cart</button>
        </div>
        `;
    });

    const sections = document.querySelectorAll('.product');
    sections.forEach(item => {
        const addToCart = item.querySelector('.add-to-cart');
        const bottomContent = item.querySelector('.bottom-content');
        const productName = item.querySelector('.product-name');

        addToCart.addEventListener('click', () => {
            let obj = {};
            let price = bottomContent.textContent.slice(1);
            let name = productName.textContent;
            let name2 = (name.slice(8));
            obj.price = price;
            obj.name = name2;
            let count = 1;
            if (cart.length === 0) {
                obj.count = 1;
                cart.push(obj)
            } else {
                cart.map((item)=> {
                    if (item.name === name2) {
                        count++;
                        obj.count = count;
                        console.log("ckec");
                    } else {
                        count = 1;
                    }
                    return obj.count = count;
                })
            }
            console.log(cart);
        });
    });
    cartSum();
}

initialLoad();


function cartSum() {
    if (cart.length === 0) {
        shoppingCart.innerHTML = "Cart items will be displayed here"
    } else {
        cart.map((item)=> {
            shoppingCart.innerHTML += `
                <div>
                    <span>
                        
                    </span>
                </div>
            `
        })
    }
}

