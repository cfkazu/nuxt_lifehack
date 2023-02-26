<template>
    <div>

        <p>{{ $auth.user }}</p>
        <li v-for="todo in todos">
            {{ todo.item }}
        </li>
        <input type="text" v-model="newItem">
        <form v-on:submit.prevent>
            <button v-on:click="addItem">add</button>
        </form>
        <button @click.prevent="$auth.logout()">Logout</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            newItem: '',
            todos: ["a"]
        }
    },
    methods: {
        addItem: function (event) {
            var todo = {
                item: this.newItem
            };
            this.todos.push(todo)
        }
    }
}
</script>