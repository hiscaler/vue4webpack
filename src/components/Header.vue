<template>
    <header class="header">
        <h1>Todo</h1>
        <input
                type="text"
                class="new-todo"
                autofocus="autofocus"
                placeholder="Where are you going?"
                @keyup.enter="addTodo"
        >
    </header>
</template>