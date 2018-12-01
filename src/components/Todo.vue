<template>
    <section class="main">
        <input id="toggle-all" type="checkbox" class="toggle-all">
        <label for="toggle-all">Mark all as complete</label>
        <ul>
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
        }
      }
    },
    components: {
      Item
    },
    methods: {
      addTodo() {

      }
    }
  }
</script>