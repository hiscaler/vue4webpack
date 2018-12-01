<template>
    <header class="header">
        <h1>Todo</h1>
        <input
                type="text"
                class="new-todo"
                autofocus="autofocus"
                placeholder="Where are you going?"
                @keyup.enter="addTodo"
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
      addTodo(e) {
        const content = e.target.value.trim()
        if (content === '') {
          alert('Please input todo content.')
        } else {
          this.todoItems.unshift({
            id: this.todoItems.length + 1,
            content: content,
            completed: false,
          })
          e.target.value = ''
        }
      }
    },
    computed: {}
  }
</script>