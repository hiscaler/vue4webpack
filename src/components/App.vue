<template>
    <div id="app" class="todoapp">
        <Header
                v-bind:todo-items="todoItems"
                @handleAddTodo="addTodo"
        ></Header>
        <Todo v-bind:todo-items="filteredTodoItems"></Todo>
        <Tabs
                v-bind:filter="filter"
                v-bind:count="unFinishedTodoItemsLength"
                v-bind:finishedTodoItemsLength="finishedTodoItemsLength"
                @toggle="toggleTabFilter"
                @handleClearAllCompleted="clearAllCompleted"
        ></Tabs>
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
        filter: 'All',
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
      },
      toggleTabFilter(tab) {
        this.filter = tab
      },
      clearAllCompleted() {
        this.todoItems = this.todoItems.filter(todo => !todo.completed)
      }
    },
    computed: {
      filteredTodoItems() {
        if (this.filter === 'All') {
          return this.todoItems
        }
        const isCompleted = this.filter !== 'Active'
        return this.todoItems.filter(todo => todo.completed === isCompleted)
      },
      // 未完成的 todo 数量
      unFinishedTodoItemsLength() {
        return this.todoItems.filter(todo => !todo.completed).length;
      },
      finishedTodoItemsLength() {
        return this.todoItems.filter(todo => todo.completed).length;
      }
    }
  }
</script>