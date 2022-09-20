import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LessonsSchedule from "@/views/LessonsSchedule";
import VideosView from "@/views/VideosView";
import GalleryView from "@/views/GalleryView";
import CoachingStaff from "@/views/CoachingStaff";
import KyokushinkaiView from "@/views/KyokushinkaiView";
// Kyokushinkai children
import PhilosophyView from "@/views/Kyokushinkai/PhilosophyView";
import MasOyama from "@/views/Kyokushinkai/MasOyama";
import KumiteKata from "@/views/Kyokushinkai/KumiteKata";
import TheTrainingProcessOfMasutatsuOyama from "@/views/Kyokushinkai/TheTrainingProcessOfMasutatsuOyama";
///
import ContactsView from "@/views/ContactsView";
// import NotFound from "@/components/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    logo:" background-image: url('../assets/img/logo_white.svg');",
  },
  {
    path: "/lessons-schedule",
    name: "LessonsSchedule",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: LessonsSchedule,
  },
  {
    path: "/videos",
    name: "VideosView",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: VideosView,
  },
  {
    path: "/gallerys",
    name: "GalleryView",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: GalleryView,
  },
  {
    path: "/coaching-staff",
    name: "CoachingStaff",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: CoachingStaff,
  },
  {
    path: "/kyokushinkai",
    name: "KyokushinkaiView",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: KyokushinkaiView,
    children: [
      {
        path: "",
        name: "PhilosophyView",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: PhilosophyView,
      },
      {
        path: "/mas-oyama",
        name: "MasOyama",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: MasOyama,
      },
      {
        path: "/kumite-kata",
        name: "KumiteKata",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: KumiteKata,
      },
      {
        path: "/the-training-process-0f-masutatsu-oyama",
        name: "TheTrainingProcessOfMasutatsuOyama",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: TheTrainingProcessOfMasutatsuOyama,
      },
    ],
  },
  {
    path: "/contacts",
    name: "ContactsView",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ContactsView,
  },
  // {
  //   path: "*/*",
  //   name: "notFound",
  //   component: NotFound,
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
