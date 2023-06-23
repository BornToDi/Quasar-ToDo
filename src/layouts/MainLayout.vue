<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-info" elevated>
      <q-toolbar>
        <q-btn
          flat
          @click="leftDrawerOpen = !leftDrawerOpen"
          round
          dense
          icon="menu"
        />

        <div class="row col-12">
          <div class="col-9 q-pt-md">
            <div class="text-h4">
              Control Panel
              <q-badge
                transparent
                align="middle"
                color="green text-black text-weight-bold"
              >
                BRAVE INDICATOR SDN. BHD.
              </q-badge>
            </div>
          </div>
          <!--avator-->
          <div class="col-3 flex">
            <div class="">
              <q-btn-dropdown
                class="q-ma-sm"
                split
                color="positive"
                push
                no-caps
                @click="onMainClick"
              >
                <template v-slot:label>
                  <div class="row items-center no-wrap q-px-md">
                    <div class="text-center text-black">
                      Custom <br />Content
                    </div>
                  </div>
                </template>
              </q-btn-dropdown>
            </div>
            <div class="q-gutter-sm q-pt-md">
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar.png" />
              </q-avatar>
            </div>
          </div>
          <!--finish-->
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="rounded-borders"
    >
      <q-list>
        <q-item-label header> </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

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

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
