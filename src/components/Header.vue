<template>
    <header class="header">
        <h1>Todo</h1>
        <input
                type="text"
                class="new-todo"
                autofocus="autofocus"
                placeholder="干啥去？"
                @keyup.enter="addTodo"
        >
    </header>
    <!--<ul>-->
        <!--<li v-for="(menu, index) of menus">-->
            <!--<a href="">{{index}}{{menu.label}}</a>-->
        <!--</li>-->
    <!--</ul>-->
</template>
<script>
  // export default {
  //   data() {
  //     return {
  //       menus: [
  //         {
  //           label: 'Homepage',
  //         },
  //         {
  //           label: 'About'
  //         }
  //       ]
  //     }
  //   }
  // }
</script>