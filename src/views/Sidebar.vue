<template>
    <div id="sidebar-wrapper">
        <ul class="sidebar-nav">
            <li class="sidebar-brand">
                <a href="#">
                    Bookstore
                </a>
            </li>
            <li>
                <router-link to="/books" active-class="active">Книги</router-link>
            </li>
            <li>
                <router-link to="/student-books" active-class="active">Учебни помагала</router-link>
            </li>
            <li>
                <router-link to="/for-students" active-class="active">Ученически пособия</router-link>
            </li>
            <li>
                <router-link to="/about" active-class="active">За нас</router-link>
            </li>
        </ul>
    </div>
</template>

<style scoped>
    #sidebar-wrapper {
        z-index: 1000;
        position: fixed;
        left: 250px;
        height: 100%;
        margin-left: -250px;
        overflow-y: auto;
        background: #000;
        -webkit-transition: all 0.5s ease;
        -moz-transition: all 0.5s ease;
        -o-transition: all 0.5s ease;
        transition: all 0.5s ease;
    }

    #wrapper.toggled #sidebar-wrapper {
        width: 250px;
    }

    /* Sidebar Styles */

    .sidebar-nav {
        position: absolute;
        top: 0;
        width: 250px;
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .sidebar-nav li {
        text-indent: 20px;
        line-height: 40px;
    }

    .sidebar-nav li a {
        display: block;
        text-decoration: none;
        color: #999999;
    }

    .sidebar-nav li a.active,
    .sidebar-nav li a:hover {
        text-decoration: none;
        color: #fff;
        background: rgba(255, 255, 255, 0.2);
    }

    .sidebar-nav li a:active, .sidebar-nav li a:focus {
        text-decoration: none;
    }

    .sidebar-nav > .sidebar-brand {
        height: 65px;
        font-size: 18px;
        line-height: 60px;
    }

    .sidebar-nav > .sidebar-brand a {
        color: #999999;
    }

    .sidebar-nav > .sidebar-brand a:hover {
        color: #fff;
        background: none;
    }

    @media (min-width: 768px) {
        #sidebar-wrapper {
            width: 0;
        }

        #wrapper.toggled #sidebar-wrapper {
            width: 250px;
        }
    }
</style>
