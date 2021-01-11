import getCategories from '../services/categories';

class Shop {       
    constructor(){
        this._categories = [];
        this.init()
        
    }

    async init() {
        await getCategories()
        .then(response => {
            this.setCategories(response.data);
            this.initComponents();
        });       
    }

    setCategories(data){
        this._categories = data;
    }
    
    get categories(){
        return this._categories;
    }

    initComponents(){
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

    

}


window.document.addEventListener('DOMContentLoaded', function(){
    new Shop();  
});





