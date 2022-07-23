
<script setup lang="ts">
import { ref, Ref } from 'vue'

import type { Task, RepeatableTask } from '@/types';
import TodoInput from './TodoInput.vue';

const todoItems: Ref<(Task | RepeatableTask)[]> = ref([])

function handleNewTask(newTask: Task) {
  newTask.id = todoItems.value.length;
  todoItems.value.push(newTask);
}


</script>

<template>
  <div class="card">
    <TodoInput @handle-new-task="handleNewTask" />
  </div>
  <div>
    <ul class="todo-list">
      <li v-for="item of todoItems" :key="item.id">
        {{ item.name}}
      </li>
      <li v-if="todoItems.length === 0" class="br-2">
        Get started by adding the name for task; <br />
        Then, hit the 'Add' button.
      </li>
    </ul>
  </div>
</template>

<style>
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
  border: 0.1em solid darkgreen;
  outline: none;
  border-radius: 0.4em;
  font-size: 2em;
}
.txt:focus {
  border: 0.1em solid lightgreen;
  outline: none;
}

.txt::placeholder {
  opacity: 35%;
}
.btn {
  background-color: gainsboro;
  color: darkgreen;
  border-radius: 0.4em;
  border: 0.1em solid darkgreen;
  font-size: 1.5em;
  padding: 0.3em;
}
.btn:focus {
  outline: none;
  border-color: lightgreen;
  color: green;
}
.todo-list {
  list-style: none;
  padding-left: 0;
}
.todo-list > li {
  border: 0.1em solid grey;
  padding: 1em;
  margin-bottom: 0.25em;
}
</style>
