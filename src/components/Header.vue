<template>
    <header class="header">
        <h1>Todo</h1>
        <input
                type="text"
                class="new-todo"
                autofocus="autofocus"
                placeholder="Where are you going?"
                @keyup.enter="handleAddTodo"
        >
    </header>
</template>
<script>
  export default {
    props: {
      todoItems: {
        type: Array,
        required: true
      }
    },
    methods: {
      handleAddTodo(e) {
        this.$emit('handleAddTodo', e)
      }
    },
    computed: {}
  }
</script>