<template>
    <div>
        <h2>Ученически пособия</h2>

        <div class="clearfix mt-3">
            <form @submit.prevent="handleSubmit">
                <div class="float-left">
                    <input v-model="searchTerm"
                           class="form-control"
                           placeholder="Въведете заглавие...">
                </div>
                <div class="float-left ml-2">
                    <button class="btn btn-outline-success">Търси</button>
                </div>
            </form>
        </div>

        <div v-if="!books || !books.length" class="text-center">
            Няма намерени ученически пособия.
        </div>
        <div class="row mt-3">
            <div v-for="book in books"
                 v-bind:key="book.id"
                 class="col-md-4">
                <div class="card">
                    <div class="card-body">
                        <div class="clearfix">
                            <div class="card-left">
                                <div class="card-img-holder">
                                    <img class="card-img" :src="book.imageUrl" :alt="book.title">
                                </div>
                            </div>

                            <div class="card-right">
                                <h5 class="card-title">{{book.title}}</h5>
                                <p class="card-text">
                                    <span class="font-weight-bold">Производител:</span> <span> {{book.producer}}</span>
                                </p>
                            </div>
                        </div>

                        <div class="clearfix mt-2">
                            <div class="card-left">
                                <span class="font-weight-bold">Цена</span> <span> {{book.price}}лв</span>
                            </div>
                            <div class="card-right text-right">
                                <button class="btn btn-outline-success">Купи</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                books: [],
                searchTerm: ''
            }
        },

        methods: {
            handleSubmit() {
                axios.get(`http://localhost:3000/for-students?title_like=` + this.searchTerm)
                    .then(response => {
                        this.books = response.data;
                    });
            }
        },

        // Fetches data when the component is created.
        created() {
            axios.get(`http://localhost:3000/for-students`)
                .then(response => {
                    this.books = response.data;
                });
        }
    }
</script>

<style>
    .card-left {
        float: left;
        width: 30%;
    }

    .card-right {
        float: right;
        width: 65%;
    }
</style>
