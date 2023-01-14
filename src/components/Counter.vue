<template>
	<div>
		<h1>{{ counter }} {{ setTitle }}</h1>
		<h2>{{ squaredCounter }}</h2>
	<button @click="counter++">+</button>
	<button @click="counter--">-</button>
  </div>
</template>

<script>
export default {
	props: 
	{	
		title: {
			type: String,
			default: 'Counter'
		},
		start: {
			type: Number,
			default: 0
		}
	},
	name: 'Counter',
	data() {
		return {
			counter: 0
		}
	},
	computed: {
		squaredCounter() {
			console.log('squaredCounter')
			return this.counter + this.start
		},
		setTitle(){
			console.log('setTitle')
			return this.title || 'Counter'
		}
	}

}
</script>

<style>
h1 {
	font-size: 100px;
}
button {
	padding:10px 20px;
	margin: 5px;
	font-size:18px;
}
div {
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	align-content: center;
	flex-direction: column;
	height: 100vh;
}
</style>