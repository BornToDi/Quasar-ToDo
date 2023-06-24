<template>
  <div class="">
    <q-layout
      view="hHh Lpr lff"
      container
      style="height: 100vh"
      class="shadow-2 rounded-borders"
    >
      <q-header elevated :class="$q.dark.isActive ? 'bg-primary' : 'bg-white'">
        <q-toolbar>
          <q-btn
            class="bg-black"
            flat
            @click="drawer = !drawer"
            round
            dense
            icon="menu"
          />
          <!--<q-toolbar-title>Header</q-toolbar-title>-->
          <div class="row col-12">
            <div class="col-9 q-pt-md">
              <div class="text-h4 text-black">
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
              <div class="q-ml-lg">
                <q-btn-dropdown
                  class="q-ma-sm"
                  split
                  color="info"
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
              <div class="q-gutter-sm q-pt-md q-pr-lg fixed-right">
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
        class="shadow-2"
        v-model="drawer"
        show-if-above
        :width="200"
        :breakpoint="500"
      >
        <q-scroll-area class="fit">
          <q-list padding class="menu-list">
            <div class="q-pa-md example-column-row-width">
              <div class="column">
                <div class="col-8">
                  <q-item clickable v-ripple>
                    <q-item-section avatar>
                      <q-icon name="inbox" />
                    </q-item-section>

                    <q-item-section> Dashboard </q-item-section>
                  </q-item>

                  <q-item active clickable v-ripple>
                    <q-item-section avatar>
                      <q-icon name="star" />
                    </q-item-section>

                    <q-item-section> Employee </q-item-section>
                  </q-item>

                  <q-item clickable v-ripple>
                    <q-item-section avatar>
                      <q-icon name="send" />
                    </q-item-section>

                    <q-item-section> Manager </q-item-section>
                  </q-item>

                  <q-item clickable v-ripple>
                    <q-item-section avatar>
                      <q-icon name="drafts" />
                    </q-item-section>

                    <q-item-section> Income </q-item-section>
                  </q-item>

                  <q-item clickable v-ripple>
                    <q-item-section avatar>
                      <q-icon name="drafts" />
                    </q-item-section>

                    <q-item-section> Expenses </q-item-section>
                  </q-item>

                  <q-item clickable v-ripple>
                    <q-item-section avatar>
                      <q-icon name="drafts" />
                    </q-item-section>

                    <q-item-section> Documents </q-item-section>
                  </q-item>

                  <q-item clickable v-ripple>
                    <q-item-section avatar>
                      <q-icon name="drafts" />
                    </q-item-section>

                    <q-item-section> Logs </q-item-section>
                  </q-item>
                </div>

                <div
                  class="fixed-bottom q-pa-sm flex flex-center border q-pa-xs"
                >
                  <q-btn outline color="black">
                    <q-item clickable v-ripple>
                      <q-item-section avatar>
                        <q-icon name="logout" />
                      </q-item-section>

                      <q-item-section>Log Out</q-item-section>
                    </q-item>
                  </q-btn>
                </div>
              </div>
            </div>
          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <q-page padding>
          <div class="row">
            <div class="col-3 q-px-sm">
              <q-card class="row bg-primary">
                <div class="col-3 q-pa-md">
                  <q-icon
                    class="bg-white rounded-borders"
                    name="print"
                  ></q-icon>
                </div>
                <div class="col-9 q-py-xs text-white">
                  <div>0</div>
                  <div>Total Income</div>
                </div>
              </q-card>
            </div>

            <div class="col-3 q-px-sm">
              <q-card class="row bg-secondary">
                <div class="col-3 q-pa-md">
                  <q-icon
                    class="bg-white rounded-borders"
                    name="print"
                  ></q-icon>
                </div>
                <div class="col-9 q-py-xs text-white">
                  <div>0</div>
                  <div>Total Expenses</div>
                </div>
              </q-card>
            </div>

            <div class="col-3 q-px-sm">
              <q-card class="row bg-warning">
                <div class="col-3 q-pa-md">
                  <q-icon
                    class="bg-white rounded-borders"
                    name="print"
                  ></q-icon>
                </div>
                <div class="col-9 q-py-xs text-white">
                  <div>0</div>
                  <div>Visa Expired Usres</div>
                </div>
              </q-card>
            </div>

            <div class="col-3 q-px-sm">
              <q-card class="row bg-deep-orange">
                <div class="col-3 q-pa-md">
                  <q-icon
                    class="bg-white rounded-borders"
                    name="print"
                  ></q-icon>
                </div>
                <div class="col-9 q-py-xs text-white">
                  <div>0</div>
                  <div>Passport Expired Users</div>
                </div>
              </q-card>
            </div>
          </div>

          <!---->
          <div
            class="row q-py-md q-px-md rounded-borders justify-around"
            style="height: 270px"
          >
            <div class="rounded-borders col-6 shadow-2 q-pr-sm">
              <div class="q-pa-md example-column-row-width">
                <div class="column" style="height: 220px">
                  <div class="col text-weight-bold">Overall Incomes</div>

                  <div class="col-8">
                    <div class="flex flex-center">
                      <q-knob
                        disable
                        v-model="value"
                        show-value
                        size="90px"
                        :thickness="0.22"
                        color="primary"
                        track-color="grey-3"
                        class="text-primary q-ma-md"
                      />
                    </div>
                  </div>

                  <div class="col" style="text-align: center">
                    mail ck visa renewal
                  </div>
                </div>
              </div>
            </div>

            <div class="col-6 shadow-2 q-pr-sm">
              <div class="q-pa-md example-column-row-width">
                <div class="column" style="height: 220px">
                  <div class="col text-weight-bold">Overall Incomes</div>

                  <div class="col-8">
                    <div class="q-pa-md flex flex-center">
                      <q-knob
                        disable
                        v-model="value"
                        show-value
                        size="90px"
                        :thickness="0.22"
                        color="primary"
                        track-color="grey-3"
                        class="text-primary q-ma-md"
                      />
                    </div>
                  </div>

                  <div class="col"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-6 q-pa-sm">Overview</div>
            <div class="col-6 position-right">
              <div class="row">
                <div class="col-9"></div>
                <div class="col-3 flex q-pa-sm" style="font-size: large">
                  <div class="q-px-xs"><q-icon name="today" /></div>
                  <div class="q-px-xs"><q-icon name="print" /></div>
                  <div class="q-px-xs"><q-icon name="font_download" /></div>
                </div>
              </div>
            </div>
          </div>

          <!---->
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      drawer: ref(false),
      value: 71,
    };
  },
};
</script>

<style lang="sass" scoped>
.menu-list .q-item
  border-radius: 0 32px 32px 0
</style>
