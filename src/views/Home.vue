<template>
	<!-- <div v-if="showAddTask">
		 v-show="showAddTask"
		 <AddTask @add-task="addTask" /> 
	</div> -->
	<AddTask @add-task="addTask" v-show="showAddTask" />
	<Tasks
		:tasks="tasks"
		@delete-task="deleteTask"
		@toggle-reminder="toggleReminder"
	/>
</template>

<style scoped></style>

<script>
import Tasks from '../components/Tasks.vue';
import AddTask from '../components/AddTask.vue';

export default {
	name: 'Home',
	props: {
		showAddTask: Boolean,
	},
	components: {
		Tasks,
		AddTask,
	},
	data() {
		return {
			tasks: [],
		};
	},
	async created() {
		this.tasks = await this.fetchTasks();
	},
	methods: {
		async addTask(task) {
			const res = await fetch('http://localhost:5000/tasks', {
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify(task),
			});

			const data = await res.json();
			this.tasks = [...this.tasks, data];
		},
		async deleteTask(id) {
			if (confirm('You are about to delete a task')) {
				const res = await fetch(`http://localhost:5000/tasks/${id}`, {
					method: 'DELETE',
				});

				res.status === 200
					? (this.tasks = this.tasks.filter(task => task.id !== id))
					: alert('Error deleting Task');
			}
		},
		async toggleReminder(id) {
			const taskToToggle = await this.fetchTask(id);

			const updateTask = {
				...taskToToggle,
				reminder: !taskToToggle.reminder,
			};
			const res = await fetch(`http://localhost:5000/tasks/${id}`, {
				method: 'PUT',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify(updateTask),
			});

			const data = await res.json();

			this.tasks = this.tasks.map(task =>
				task.id == id ? { ...task, reminder: data.reminder } : task
			);
		},
		async fetchTasks() {
			const res = await fetch('http://localhost:5000/tasks');
			const tasks = await res.json();

			return tasks;
		},
		async fetchTask(id) {
			const res = await fetch(`http://localhost:5000/tasks/${id}`);
			const task = await res.json();

			return task;
		},
	},
};
</script>