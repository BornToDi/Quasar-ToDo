<template>
  <q-page class="flex flex-center">
    <q-card class="my-card" style="width: 400px">
      <q-card-section>
        <div class="bg-info rounded-borders">
          <div class="text-dark text-center q-py-md text-lg text-weight-bold">
            Registration
          </div>
        </div>
      </q-card-section>

      <!--username-->
      <q-card-section>
        <div class="row justify-center">
          <div class="col-6">
            <q-input v-model="text" :dense="dense" label="Username" />
          </div>
        </div>
      </q-card-section>
      <!--registration-->
      <q-card-section>
        <div class="row justify-center">
          <div class="col-6">
            <q-input v-model="text" :dense="dense" label="E-mail" />
          </div>
        </div>
      </q-card-section>
      <!--password-->
      <q-card-section>
        <div class="row justify-center">
          <div class="col-6">
            <q-input v-model="text" :dense="dense" label="Password" />
          </div>
        </div>
      </q-card-section>

      <q-separator class="bg-secondary"></q-separator>

      <q-card-section>
        <div class="row justify-center">
          <div class="col-2 cursor-inherit">
            <q-btn flat style="color: #ff0080" label="Done" />
          </div>
          <div class="col-2 cursor-inherit">
            <q-btn
              flat
              style="color: #112a98"
              @click="$router.replace('/login')"
              label="login"
            />
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",

  data() {
    return {};
  },
});
</script>
