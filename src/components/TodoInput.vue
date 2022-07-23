<script setup lang="ts">
import { ref, Ref } from 'vue'
import type { Task, RepeatableTask } from '@/types';

const emit = defineEmits(['handle-new-task'])

const newTaskName: Ref<string> = ref("")

function addNewTask() {
  if (newTaskName.value == "") return;
  const newTask: Task = {
    id: 0,
    name: newTaskName.value,
    desc: "",
    done: false,
    createdDate: new Date(),
    completedDate: null
  }
  emit('handle-new-task', newTask)
  newTaskName.value = ""
}

</script>

<template>
	<input v-model="newTaskName" placeholder="New Task Name" class="txt mr-6 v-mid" type="text" />
	<button class="btn v-mid" @click="addNewTask">Add</button>
</template>