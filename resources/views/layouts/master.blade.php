<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no" name="viewport">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>@yield('title')</title>

    <!-- General CSS Files -->
    <link rel="stylesheet" href="{{mix('css/app.css')}}">
    <link rel="stylesheet" href="{{mix('css/components.css')}}">
    <link rel="stylesheet" href="{{mix('css/style.css')}}">
    <link rel="stylesheet" href="{{mix('css/vendor/ionicons201.css')}}">
    <link rel="stylesheet" href="{{mix('css/vendor/weathericons.css')}}">
    @yield('style')
    <style>
        .judul{
            color: rgba(255, 255, 255, 0.8);
            font-weight: 600;
            margin: 0;
        }
        .theme-secondary .judul{
            color: #0f172a;
        }
    </style>
</head>

<body>
    @include('layouts.settings')
    <div id="app">
        <div class="main-wrapper">
            <div class="navbar-bg" style="height: 70px;"></div>
            <nav class="navbar navbar-expand-lg main-navbar" style="top: 0;">
                <ul class="navbar-nav mr-3">
                    <li>
                        <a href="#" data-toggle="sidebar" class="nav-link nav-link-lg">
                            <i class="fas fa-bars"></i>
                        </a>
                    </li>
                </ul>
                <div class="navbar-nav w-100 text-center text-capitalize d-none d-lg-block">
                    <label class="judul">Selamat datang, di aplikasi chat otomax.</label>
                </div>
            </nav>
            <div class="main-sidebar">
                <aside id="sidebar-wrapper">
                    {{-- sidebar logo --}}
                    <div class="sidebar-brand mt-2">
                        <a href="javascript:void(0);">Chat Otomax</a>
                    </div>
                    <div class="sidebar-brand sidebar-brand-sm mt-2">
                        <a href="javascript:void(0);">CO</a>
                    </div>
                    {{-- end sidebar logo --}}
                    @include('layouts.menu')
                </aside>
            </div>

            <!-- Main Content -->
            <div class="main-content">
                @yield('content')
            </div>
            <footer class="main-footer position-absolute mt-0 d-none d-lg-block" style="bottom: 0">
                <div class="footer-left">
                    Copyright &copy; 2018 <div class="bullet"></div> Design By <a href="https://nauval.in/">Muhamad Nauval Azhar</a>
                </div>
                <div class="footer-right">{{env('APP_VERSION')}}</div>
            </footer>
        </div>

    </div>


    <!-- General JS Scripts -->
    <script src="{{mix('js/app.js')}}"></script>
    <script src="{{mix('js/stisla.js')}}"></script>
    <script src="{{mix('js/scripts.js')}}"></script>
    <script src="{{mix('js/custom.js')}}"></script>
    @yield('script')
</body>

</html>
