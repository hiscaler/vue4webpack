<template>
    <footer class="footer" style="">
        <span class="todo-count"><strong>{{count}}</strong> items left</span>
        <ul class="filters">
            <li
                    v-for="tab in tabs"
                    :key="tab"
                    @click="toggleFilter(tab)"
            >
                <a :class="[filter===tab?'selected': '']">{{tab}}</a>
            </li>
        </ul>
        <button
                class="clear-completed"
                v-show="finishedTodoItemsLength"
                @click="handleClearAllCompleted"
        >
            Clear completed
        </button>
    </footer>
</template>
<script>
  export default {
    props: {
      filter: {
        type: String,
        required: true
      },
      count: {
        type: Number,
        required: true
      },
      finishedTodoItemsLength: Number
    },
    data() {
      return {
        tabs: [
          'All', 'Active', 'Completed'
        ]
      }
    },
    methods: {
      toggleFilter(tab) {
        this.$emit('toggle', tab)
      },
      handleClearAllCompleted() {
        this.$emit('handleClearAllCompleted')
      }
    }
  }
</script>