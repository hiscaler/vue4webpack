<template>
    <section class="main">
        <input id="toggle-all" type="checkbox" class="toggle-all" @click="toggleAll()">
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list" v-show="showAll">
            <Item :todo="todo" v-for="(todo, index) of todoItems" :key="index"></Item>
        </ul>
    </section>
</template>
<script>
  import Item from './Item.vue'

  export default {
    props: {
      todoItems: {
        type: Array,
        required: true
      },
      // todo: {
      //   type: Object,
      //   required: true
      // }
    },
    data() {
      return {
        showAll: true
      }
    },
    components: {
      Item
    },
    methods: {
      addTodo() {

      },
      toggleAll() {
        this.showAll = !this.showAll
      }
    }
  }
</script>