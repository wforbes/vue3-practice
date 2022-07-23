<script setup lang="ts">
import { ref, Ref, watch } from 'vue'
import type { Task, RepeatableTask } from '@/types';
const props = defineProps({
	todoTasks: Array
})
const emit = defineEmits(['handle-new-task'])

const newTaskName: Ref<string> = ref("")
const repeatable: Ref<boolean> = ref(false);
const taken: Ref<boolean> = ref(false);
const errorMsg: Ref<string> = ref("")

watch(newTaskName, (newV, oldV) => {
	if (newV !== "") {
		const matches = props.todoTasks?.filter((t: any) => {
			return newV.includes(t.name)
		})
		if (matches && matches?.length > 0) {
			errorMsg.value = "That task name is already used"
			taken.value = true
			return;
		}
		errorMsg.value = ""
		taken.value = false
		
	}
})

function addNewTask() {
  if (newTaskName.value == "") return;
	const task = {
    id: 0,
    name: newTaskName.value,
    desc: "",
    done: false,
    createdDate: new Date()
	};
	emit('handle-new-task', (repeatable) ? {
		...task,
		completedDates: null
	}: {
		...task,
		completedDate: null
	})
  newTaskName.value = ""
	repeatable.value = false
}

</script>

<template>
	<div>
		<input v-model="newTaskName" placeholder="New Task Name" :class="((taken)? 'invalid ' : '') + 'txt mr-6 v-mid'" type="text" />
		<button class="btn v-mid" @click="addNewTask" :disabled="taken" style="display: inline">
			Add
		</button>
	</div>
	<div id="task-name-error">{{ errorMsg }}</div>
	<div id="new-task-options">
		<input v-model="repeatable" id="repeat-check" type="checkbox" />
		<label for="repeat-check">
			Repeatable
		</label>
	</div>
</template>

<style scoped>
#new-task-options {
	margin-top: 1em;
	text-align:left;
}
input#repeat-check {
	width: 1.4em;
	height: 1.4em;
	display:inline;
}
label[for=repeat-check] {
	display:inline;
	vertical-align:top;
}
#task-name-error {
	text-align: left;
	color: red;
	min-height: 1.5em;
}
</style>