import Vue from "vue";
import VueRouter from "vue-router";
import home from "../views/home";
import clients from "../views/clients";
import products from "../views/products";

Vue.use(VueRouter);

const routes = [
    {
        path: "/gui",
        name: "Home",
        component: home
    },
    {
        path: "/gui/clients",
        name: "Clients",
        component: clients
    },
    {
        path: "/gui/products",
        name: "Products",
        component: products
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;