<template>
    <footer class="footer" style="">
        <span class="todo-count"><strong>{{todoItems.length}}</strong> items left</span>
        <ul class="filters">
            <li
                    v-for="tab in tabs"
                    :key="tab"
                    @click="toggleFilter(tab)"
            >
                <a href="" :class="[filter===tab?'selected': '']">{{tab}}</a>
            </li>
        </ul>
        <button class="clear-completed" style="display: none;" @click="clearAllCompleted">
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
      todoItems: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        tabs: [
          'All', 'Active', 'Completed'
        ]
      }
    },
    methods: {
      toggleFilter() {

      },
      clearAllCompleted() {

      }
    }
  }
</script>