let div_root = document.querySelector('.root');

async function fetchProducts(){
    let url = "https://dummyjson.com/products";
    let response = await fetch(url);
    let data = await response.json();
   render(data.products);

}

function render(data){
    let product_container = document.createElement('div');
    product_container.className = 'product_container';

    for(let elem of data){
        let product_item = document.createElement('div');
        product_item.className = 'product_item';

        let product_img = document.createElement('img');
        product_img.className = 'product_img';
        product_img.src = elem.images[0];

        let product_desc = document.createElement('div');
        product_desc.className = 'prodact_desc';

        let product_name = document.createElement('p');
        product_name.className = 'product_name';
        product_name.innerText = elem.title;

        let product_price = document.createElement('p');
        product_price.className = 'product_price';
        product_price.innerText = elem.price;

        product_desc.append(product_name, product_price, rating(elem.rating));
        product_item.append(product_img, product_desc);
        product_container.append(product_item);
    }
    div_root.append(product_container);
}

function rating(num){
    let count_stars = Math.round(num);
    let div_rating = document.createElement('div');
    div_rating.className = 'stars_wrapper';

    for(let i = 0; i < 5; i++){
        let span_elem = document.createElement('span');
        if(count_stars > i){
            span_elem.className = 'fa fa-star active';
        } else {
            span_elem.className = 'fa fa-star';
        }
        div_rating.append(span_elem)
    }
    return div_rating;
}

fetchProducts()