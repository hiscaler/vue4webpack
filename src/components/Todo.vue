<template>
    <section class="main">
        <input id="toggle-all" type="checkbox" class="toggle-all" @click="toggleAll()">
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list" v-show="showAll">
            <Item
                    :todo="todo"
                    :index="index"
                    v-for="(todo, index) of todoItems"
                    :key="index"
                    @handleDeleteTodo="deleteTodo"
            ></Item>
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
      }
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
      deleteTodo(index) {
        this.todoItems.splice(index, 1)
      },
      toggleAll() {
        this.showAll = !this.showAll
      }
    }
  }
</script>