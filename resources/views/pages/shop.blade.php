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
            <div id="product-list" class="row">       
                
                
            </div>
        </div>
    </div>
</div>
@endsection

