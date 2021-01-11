@extends("templates.basic")

@section("title","Loja")

@section("content")
<div class="container">
    <div class="row">
        <div class="col-2">
            <nav class="nav flex-column card">
                <div class="card-header bg-dark text-white">
                    Categorias
                  </div>
                  <ul id="category-list" class="list-group list-group-flush"></ul>               
            </nav>
        </div>
        <div class="col-8">
            <h1>Produtos</h1>
            <h5 id="category-text">Todos</h5>
            <div class="row product-list">
                <div class="col">
                    <div class="card">
                        <img class="card-img-top" src="{{asset('img/product-placeholder.jpg')}}" alt="Card image cap">
                        <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img class="card-img-top" src="{{asset('img/product-placeholder.jpg')}}" alt="Card image cap">
                        <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img class="card-img-top" src="{{asset('img/product-placeholder.jpg')}}" alt="Card image cap">
                        <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

