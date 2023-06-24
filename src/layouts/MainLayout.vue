<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-info" elevated> </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

const linksList = [
  {
    title: "",
    style: "bg-info",
  },
  {
    title: "dashboard",

    icon: "dashboard",
    link: "https://quasar.dev",
  },
  {
    title: "Employee",

    icon: "people",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Manager",

    icon: "people",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Income",

    icon: "income",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Expenses",

    icon: "expense",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "documents",

    icon: "expense",
    link: "https://twitter.quasar.dev",
  },

  {
    title: "Logs",

    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];
export default defineComponent({
  name: "MainLayout",

  components: {},

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
