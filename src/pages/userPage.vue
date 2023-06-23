<template>
  <div>
    <q-form class="row justify-center q-py-lg">
      <div class="row justify-center">
        <div class="q-px-md">First column</div>
        <div class="q-px-md">Second column</div>
        <div class="q-px-md">Third column</div>
        <div class="q-px-md">Forth column</div>
      </div>
    </q-form>
  </div>
  <div>
    <quasarTable />
  </div>
  <div>
    <q-btn flat to="/adress" label="adress"></q-btn>
  </div>
</template>

<script>
import quasarTable from "src/components/quasarTable.vue";
export default {
  setup() {
    return {};
  },
  components: { quasarTable },
};
</script>
