<template>
	<header>
		<h1>{{ title }}</h1>
		<Buttons v-show="homePage"
			:text="showAddForm ? 'Close Form' : 'Open Form'"
			:color="showAddForm ? '#000' : 'green'"
			@btn-click="this.$emit('toggle-add-task')"
		/>
	</header>
</template>

<style scoped>
header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 20px;
}
</style>

<script>
import Buttons from './Buttons.vue';

export default {
	name: 'Header',
	props: {
		title: String,
		showAddForm: Boolean,
	},
	components: { Buttons },
	emits: ['toggle-add-task'],
	computed: {
		homePage() {
			if (this.$route.path === '/') {
				return true
			} else {
				return false
			}
		}
	}
	/*
      props: {
      
        One of the ways to define props
        title: {
          type: String,
          default: 'Task Tracker Props'
        }
      
        Another way is
        props: ['title']
      }
      */
};
</script>
