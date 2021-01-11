<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Aprendendo Laravel - @yield("title")</title>

        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <link href="{{ asset('css/style.css') }}" rel="stylesheet">
        
    </head>
    <body>
        <script src="{{ asset('js/app.js') }}"></script>
        <script src="{{ asset('js/pages/'.Route::current()->getName().'.js')}}"></script>
        @include('components.block-ui')        
        @section('navbar')
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="{{route("home")}}">Aprendendo Laravel 8 - Shop</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                      <a class="nav-link" href="{{route("shop")}}">Comprar</a>
                    </li>                                
                  </ul>
                  <ul class="navbar-nav">                    
                    <li class="nav-item">
                      <a class="nav-link" href="{{route("cart")}}"><i class="fas fa-shopping-cart"></i></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Login</a>
                    </li>                  
                  </ul>
                </div>
              </div>
        </nav>
        @show
        <div class="container-fluid">                              
            <div class="mt-3">                    
                @yield('content')                    
            </div>            
        </div>    
    </body>
</html>
