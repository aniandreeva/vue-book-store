<template>
    <div id="wrapper" class="toggled">

        <app-sidebar></app-sidebar>

        <div id="page-content-wrapper">
            <div class="container-fluid">

                <app-navbar></app-navbar>

                <div class="content">
                    <router-view></router-view>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
    import Sidebar from './views/Sidebar';
    import Navbar from './views/Navbar';

    export default {
        components: {
            appSidebar: Sidebar,
            appNavbar: Navbar
        }
    }
</script>

<style>
    body {
        overflow-x: hidden;
    }

    .container-fluid {
        padding-left: 0;
        padding-right: 0;
    }

    .content {
        padding: 20px;
    }

    #wrapper {
        padding-left: 0;
        -webkit-transition: all 0.5s ease;
        -moz-transition: all 0.5s ease;
        -o-transition: all 0.5s ease;
        transition: all 0.5s ease;
    }

    #wrapper.toggled {
        padding-left: 250px;
    }


    #page-content-wrapper {
        width: 100%;
        position: absolute;
    }

    #wrapper.toggled #page-content-wrapper {
        position: absolute;
        margin-right: -250px;
    }

    @media (min-width: 768px) {
        #wrapper {
            padding-left: 0;
        }

        #wrapper.toggled {
            padding-left: 250px;
        }

        #page-content-wrapper {
            position: relative;
        }

        #wrapper.toggled #page-content-wrapper {
            position: relative;
            margin-right: 0;
        }
    }
</style>
