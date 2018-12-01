<template>
    <section class="main">
        <input id="toggle-all" type="checkbox" class="toggle-all" @click="toggleAll()">
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list" v-show="showAll">
            <Item :todo="todo"></Item>
        </ul>
    </section>
</template>
<script>
  import Item from './Item.vue'

  export default {
    data() {
      return {
        todo: {
          id: 0,
          content: 'this is todo',
          completed: false
        },
        showAll: false
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