import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home";
import About from "./components/About";
import Books from "./components/Books/Books";
import StudentBooks from "./components/StudentBooks/StudentBooks";
import ForStudents from "./components/ForStudents/ForStudents";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/books",
            name: "books",
            component: Books
        },
        {
            path: "/student-books",
            name: "student-books",
            component: StudentBooks
        },
        {
            path: "/for-students",
            name: "for-students",
            component: ForStudents
        },
        {
            path: "/about",
            name: "about",
            component: About
        }
    ]
});
