import getCategories from '../services/categories';
import getProducts from '../services/products';
import {URL} from '../helpers';

const imgPlaceholder = URL+"img/product-placeholder.jpg";

class Shop {       
    constructor(){
        this._categories = [];
        this._products = [];
        this.init()        
    }

    async init() {
        await getCategories()
        .then(response => {
            this.setCategories(response.data);
            this.initComponentCategories();
        });
        await getProducts()
        .then(response => {
            this.setProducts(response.data);
            this.setProductsComponent();
        });             
    }

    setCategories(data){
        this._categories = data;
    }

    setProducts(data){
        this._products = data;
    }
    
    get categories(){
        return this._categories;
    }

    get products(){
        return this._products;
    }

    initComponentCategories(){
        var categoryList = window.document.getElementById("category-list");   

        categoryList.innerHTML = "";

        this.categories.forEach(category => {
            let element = this.createCategoryItemList(category);
            categoryList.appendChild(element);                      
        });

        this.addCategoryItemClickEvents();  
    }

    createCategoryItemList(category){

        let element = window.document.createElement("li");
        let link = window.document.createElement("a");
        let title = window.document.createTextNode(category.name);       
        link.href="#"
        link.classList.add(["nav-item"],["category-item"]); 
        link.appendChild(title); 
        link.setAttribute("data-id",category.id);      
        element.appendChild(link);
        element.classList.add("list-group-item");               

        return element;
    }

    addCategoryItemClickEvents()
    {
        let elements = window.document.getElementsByClassName("category-item"); 

        const createCategoryItemClickEvent = (event) => {
            event.preventDefault();
            let el = event.target;
            let id = el.getAttribute('data-id');   
            let elementCategoryText = window.document.getElementById("category-text");    
            let category = this.categories.find(category => category.id == id);
            elementCategoryText.innerHTML = category.name;
                  
        } 

        Array.from(elements).forEach((el) => el.addEventListener('click',createCategoryItemClickEvent,false));

    }

    setProductsComponent(){

        var productList = window.document.getElementById("product-list");

        productList.innerHTML = "";

        this.products.forEach(product =>{
            let element = this.createProductItemList(product);
            productList.appendChild(element);
        });
    }

    createProductItemList(product){

        const createCol = () => {
            let el =  window.document.createElement("div");
            el.classList.add(["col-4"],["my-2"]);
            return el;
        }

        const createCard = () => {
            let el =  window.document.createElement("div");
            el.classList.add("card");
            return el;
        }

        const createCardImage = (url) => {

            let el = window.document.createElement("img");

            el.classList.add("card-img-top");
            el.src = url || imgPlaceholder;

            return el;
        }

        const createCardBody = () => {
            let el =  window.document.createElement("div");
            el.classList.add("card-body");
            return el;
        }

        const createCardTitle = (name) =>{
            let el =  window.document.createElement("h5");
            el.classList.add("card-title");
            let elText = window.document.createTextNode(name);
            el.appendChild(elText);
            return el;
        }

        const createCardText = (description) =>{
            let el =  window.document.createElement("p");
            el.classList.add("card-text");
            let elText = window.document.createTextNode(description);
            el.appendChild(elText);
            return el;

        }

        const createAddCardButtom = (id) => {
            let div = document.createElement("div");
            let link = window.document.createElement("a");
            let icon = window.document.createElement("i");
            div.classList.add("p-2");
            icon.classList.add(["fas"],["fa-cart-plus"]);       
            link.href="#"
            link.classList.add(["btn"], ["btn-primary"],["product-item"]); 
            link.appendChild(icon); 
            link.setAttribute("data-id",id);
            div.appendChild(link);
            return div;

        }

        const createCardFooter = (id,price) => {
            let el = window.document.createElement("div");
            let cardButton = createAddCardButtom(id);
            el.classList.add(["card-footer"],["bg-transparent"],["d-flex"],["align-items-center"]);
            let priceText = window.document.createElement("p");
            priceText.classList.add(["h5"],["p-2"],["mr-auto"])
            priceText.appendChild(window.document.createTextNode("R$"+price));
            el.appendChild(priceText);
            el.appendChild(cardButton);

            return el;
        }

        let column = createCol();
        let card = createCard();
        let cardImage = createCardImage(product.image);
        let cardBody = createCardBody();
        let cardTitle = createCardTitle(product.name);
        let cardText = createCardText(product.description);
        let cardFooter = createCardFooter(product.id, product.price);

        

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        

        card.appendChild(cardImage);
        card.appendChild(cardBody);
        card.appendChild(cardFooter);

        column.appendChild(card);


        return column;

    }


    addProductItemClickEvents(){

    }

    

}


window.document.addEventListener('DOMContentLoaded', function(){
    new Shop();  
});





