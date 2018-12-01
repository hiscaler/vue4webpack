<template>
    <li :class="['todo', todo.completed?'completed': '']">
        <div class="view">
            <input type="checkbox"
                   class="toggle"
                   v-model="todo.completed"
                   @click="handleCompleteTodo(index)"
            >
            <label>{{todo.content}}</label>
            <button class="destroy" @click="handleDeleteTodo(index)"></button>
        </div>
    </li>
</template>
<script>
  export default {
    props: {
      index: Number,
      todo: Object
    },
    methods: {
      handleDeleteTodo(index) {
        this.$emit('handleDeleteTodo', index)
      },
      handleCompleteTodo(index) {
        this.$emit('handleCompleteTodo', index)
      }
    }
  }
</script>