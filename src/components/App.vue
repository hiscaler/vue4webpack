<template>
    <div id="app">
       <Header></Header>
        <Footer></Footer>
    </div>
</template>
<script>
  import Header from './Header.vue'
  import Footer from './Footer.jsx'

  export default {
    components: {
      Header,
      Footer
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