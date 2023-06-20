<template>
  <q-page class="flex flex-center">
    <q-card class="my-card" style="width:600px">
      <q-card-section>
        <div class="bg-secondary rounded-borders">
          <div class="text-negative text-center q-py-md ">ToDo App</div>
        </div>
      </q-card-section>

      <q-card-section>
        <div class="row justify-center ">
          <div class="col-8">
            <q-input v-model="todoTask" :dense="dense" label="Input" place-holder="write here" >
              <template v-slot:after>
          <q-btn round dense flat icon="send" @click.stop.prevent="addItem"></q-btn>
        </template>
            </q-input>
          </div>
          
        </div>
      </q-card-section>

      <q-separator class="bg-secondary"></q-separator>

      <q-card-section v-if="todoList.length>0">
        <div class="row justify-center" v-for=" (item,index) in todoList" :key="index">
          <div class="col-8 q-py-md">
            {{ item.value }}
          </div>
          <div class="col-auto q-py-md">
              <q-btn round dense flat icon="delete" @click="deleteItem(index)"></q-btn>
          </div>
        </div>
      </q-card-section>
      <q-card-section v-else>
           <div class="text-center">
              Empty
            </div>
      </q-card-section >
      <q-card-section class="row justify-center">
        <div @click="clearAll()" class="mt-4">
        <q-btn class="text-negative ">
          Clear all
        </q-btn>
      </div>
      </q-card-section >

    </q-card>

  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  data(){
    return {
       todoTask: '',
        todoList: [ 
          
          
        ]
    }
  },
  methods:{
    addItem() {
      this.todoList.push({ value : this.todoTask})
    },
    deleteItem(index){
      this.todoList.splice(index, 1)
    },
    clearAll(){
      this.todoList=[]
  }
}
}
)
</script>
