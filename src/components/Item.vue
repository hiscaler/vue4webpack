<template>
    <li class="todo">
        <div :class="['view', todo.completed?'completed': '']">
            <input type="checkbox"
                   class="toggle"
                   v-model="todo.completed"
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
      }
    }
  }
</script>