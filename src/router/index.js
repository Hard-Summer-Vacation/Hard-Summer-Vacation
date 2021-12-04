import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import Checker from "../views/Checker.vue"
import Question from "../views/Question.vue"
import Result from "../views/Result.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/checker",
    name: "Checker",
    component: Checker,
  },
  {
    path: "/question",
    name: "Question",
    component: Question,
  },
  {
    path: "/result",
    name: "Result",
    component: Result,
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
