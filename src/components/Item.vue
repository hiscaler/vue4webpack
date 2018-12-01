<template>
    <li class="todo">
        <div :class="['view', todo.completed?'completed': '']">
            <input type="checkbox"
                   class="toggle"
                   v-model="todo.completed"
            >
            <label>{{todo.content}}</label>
            <button class="destroy" @click="deleteTodo(todo)"></button>
        </div>
    </li>
</template>
<script>
  export default {
    props: {
      todo: {
        type: Object,
        required: true
      }
    },
    methods: {
      deleteTodo(todo) {

      }
    }
  }
</script>