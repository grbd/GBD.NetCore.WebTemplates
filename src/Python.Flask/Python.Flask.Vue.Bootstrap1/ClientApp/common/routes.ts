// Setup the routes for the different pages
const routes = [
    { path: "/", component: require("../components/pages/home.vue").default },
    { path: "/test1", component: require("../components/pages/test1/test1.vue").default },
    { path: "/counter", component: require("../components/pages/counter/counter.vue").default },
    { path: "/fetchdata", component: require("../components/pages/fetchdata/fetchdata.vue").default },
];

export { routes };
