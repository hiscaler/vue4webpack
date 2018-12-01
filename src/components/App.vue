<template>
    <div id="app" class="todoapp">
        <Header></Header>
        <Todo></Todo>
        <Tabs filter="filter"></Tabs>
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
        filter: 'All'
      }
    }
  }
</script>