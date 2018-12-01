<template>
    <div id="app" class="todoapp">
        <Header></Header>
        <Todo></Todo>
        <Footer></Footer>
    </div>
</template>
<script>
  import Header from './Header.vue'
  import Footer from './Footer.jsx'
  import Todo from './Todo.vue'

  export default {
    components: {
      Header,
      Footer,
      Todo
    },
    data() {
      return {
        text: 'Test'
      }
    }
  }
</script>
<style scoped>
    #test {
        color: red;
    }
</style>