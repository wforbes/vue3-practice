
<script setup lang="ts">
import { ref } from 'vue'

type Task = {
  id: number,
  name: string,
  desc: string,
  done: boolean,
  createdDate: Date,
  completedDate: Date
};

type RepeatableTask = {
  id: number,
  name: string,
  desc: string,
  createdDate: Date,
  completedDates: Date[]
};

const todoItems: Task[] | RepeatableTask[] = [];

</script>

<template>
  <div class="card">
    <input class="txt mr-6 v-mid" type="text" placeholder="New Task Name" />
    <button class="btn v-mid">Add</button>
  </div>
  <div>
    <ul class="todo-list">
      <li v-for="item of todoItems" :key="item.id">
      </li>
      <li v-if="todoItems.length === 0" class="br-2">
        Get started by adding a new item in the text field and hitting the 'Add' button.
      </li>
    </ul>
  </div>
</template>

<style scoped>
.v-mid {
  vertical-align: middle;
}
.mr-6 {
  margin-right: 6px;
}
.br-2 {
  border-radius: 0.2em;
}
.txt {
  padding: 0.15em;
  border: 0.1em solid darkmagenta;
  outline: none;
  border-radius: 0.4em;
  font-size: 2em;
}
.txt:focus {
  border: 0.1em solid magenta;
  outline: none;
}

.txt::placeholder {
  opacity: 35%;
}
.btn {
  background-color: gainsboro;
  color: darkmagenta;
  border-radius: 0.4em;
  border: 0.1em solid darkmagenta;
  font-size: 1.5em;
  padding: 0.3em;
}
.btn:focus {
  outline: none;
  border-color: magenta;
}
.todo-list {
  list-style: none;
  padding-left: 0;
}
.todo-list > li {
  border: 0.1em solid grey;
  
  padding: 1em;
}
</style>
