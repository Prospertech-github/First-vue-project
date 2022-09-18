<script>
import Header from './components/Header.vue';
import Tasks from './components/Tasks.vue';
import AddTask from './components/AddTask.vue';

export default {
	name: 'App',
	components: {
		Header,
		Tasks,
		AddTask,
	},

	data() {
		return {
			tasks: [],
			showAddTask: false,
		};
	},
	created() {
		this.tasks = [
			{
				id: 1,
				text: 'Doctors Appointment',
				day: 'March 1st at 2:30pm',
				reminder: true,
			},
			{
				id: 2,
				text: 'Meeting at School',
				day: 'March 3rd at 1:30pm',
				reminder: true,
			},
			{
				id: 3,
				text: 'Food Shopping',
				day: 'March 3rd at 11:00am',
				reminder: false,
			},
		];
	},
	methods: {
		addTask(task) {
			this.tasks = [...this.tasks, task];
		},
		deleteTask(id) {
			if (confirm('You are about to delete a task')) {
				this.tasks = this.tasks.filter(task => task.id !== id);
			}
		},
		toggleReminder(id) {
			this.tasks = this.tasks.map(task =>
				task.id == id ? { ...task, reminder: !task.reminder } : task
			);
		},
		toggleAddTask() {
			this.showAddTask = !this.showAddTask;
		},
	},
};
</script>

<template>
	<div class="container">
		<Header
			title="Task Tracker"
			@toggle-add-task="toggleAddTask"
			:showAddForm="showAddTask"
		/>

		<div v-if="showAddTask">
			<!-- v-show="showAddTask" -->
			<AddTask @add-task="addTask" />
		</div>
		<Tasks
			:tasks="tasks"
			@delete-task="deleteTask"
			@toggle-reminder="toggleReminder"
		/>
	</div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	max-width: 500px;
	margin: 30px auto;
	overflow: auto;
	min-height: 300px;
	border: 1px solid steelblue;
	padding: 30px;
	border-radius: 5px;
}

.btn {
	display: inline-block;
	background: #000;
	color: #fff;
	border: none;
	padding: 10px 20px;
	margin: 5px;
	border-radius: 5px;
	cursor: pointer;
	text-decoration: none;
	font-size: 15px;
	font-family: inherit;
}
.btn:focus {
	outline: none;
}
.btn:active {
	transform: scale(0.98);
}
.btn-block {
	display: block;
	width: 100%;
}
</style>