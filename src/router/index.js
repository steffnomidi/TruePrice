import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
    {
        path: "/",
        name: "Home Page",
        component: HomePage,
    },
    {
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: NotFound
    },
];

const router = createRouter({
    mode: "history",
    history: createWebHistory(),
    routes: routes,
    scrollBehavior() {
        // always scroll to top
        window.scrollTo({ top: 0 });
        return false;
    }
});

export default router;