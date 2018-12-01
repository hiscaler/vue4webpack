<template>
    <div id="app" class="todoapp">
        <Header v-bind:todo-items="todoItems"></Header>
        <Todo v-bind:todo-items="todoItems"></Todo>
        <Tabs v-bind:filter="filter" v-bind:count="todoItems.length"></Tabs>
        <Footer></Footer>
    </div>
</template>
<script>
  import Header from './Header.vue'
  import Footer from './Footer.jsx'
  import Todo from './Todo.vue'
  import Tabs from './Tabs.vue'

  export default {
    components: {
      Header,
      Footer,
      Todo,
      Tabs
    },
    data() {
      return {
        "filter": 'All',
        id: 0,
        todoItems: [
          {
            id: 1,
            content: 'test 1',
            completed: false
          },
          {
            id: 2,
            content: 'test 2',
            completed: false
          },
          {
            id: 3,
            content: 'test 3',
            completed: false
          },
          {
            id: 4,
            content: 'test 4',
            completed: false
          }
        ],
      }
    },
    methods: {
      addTodo(e) {
        alert('dd')
        this.todoItems.unshift({
          id: this.id++,
          content: e.target.value.trim(),
          completed: false,
        })
      }
    }
  }
</script>