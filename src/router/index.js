import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import AddNote from "../pages/AddNote";
import FavoritePage from "../pages/FavoritePage";
import EditPage from "../pages/EditPage";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/add",
    name: "AddNote",
    component: AddNote,
  },
  {
    path: "/favorite",
    name: "Favorite",
    component: FavoritePage,
  },
  {
    path: "/edit/:id",
    name: "EditPage",
    component: EditPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.VUE_APP_BASE_URL),
  routes,
});

export default router;
