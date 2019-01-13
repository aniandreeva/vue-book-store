<template>
    <nav class="navbar navbar-expand-lg navbar-dark">

        <div class="logo mr-auto">
            <a href="/">
                <span>Book</span>
                <img alt="Vue Logo" src="../assets/logo.png">
                <span>Store</span>
            </a>
        </div>

        <a class="navbar-brand" href="#">Книги</a>

        <form class="form-inline">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        </form>
    </nav>
</template>

<style scoped>
    .navbar-dark {
        background-color: #000;
    }

    .navbar-dark .logo a {
        color: #fff;
    }

    .navbar-dark .logo a:hover {
        text-decoration: none;
    }

    .navbar-dark .logo img {
        width: 40px;
        height: auto;
    }

</style>
