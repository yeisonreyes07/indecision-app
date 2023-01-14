
<template>
	<div>
		<h1>Indesiciones</h1>
		<img v-if="img" :src="img" alt="gif">
		<div class="bg-dark"></div>
		<div class="indecision-container">

			<input type="text" name="" v-model="question"  placeholder="Hazme una pregunta">
			<p>Recuerda terminar con signo de interrogación</p>

			<div v-if="isValidQuestion">

				<h2>{{ question }}</h2>
				<h1>{{ answer }}</h1>


			</div>
		</div>
	</div>
  
</template>

<script>
export default {
	name: 'Indesiciones',
	data() {
		return {
			 question: null,
			 answer: null,
			 img: null,
			 isValidQuestion: false
		}
	},
	watch: {
		question(value , oldValue) {

			this.isValidQuestion = false

			if ( value.includes('?') ) 
			{
				this.isValidQuestion = true
				return this.getAnswer()
			}
		}
	},
	methods: {
		async getAnswer(){

			this.answer = 'Pensando...'

			const response = await fetch('https://yesno.wtf/api')
			const { answer, image } = await response.json()

			console.log(answer, image)
			this.answer = answer === 'yes' ? 'Si!' : 'No!'
			this.img = image
		}
	
	}

}
</script>

<style scoped>
   img, .bg-dark {
        height: 100vh;
        left: 0px;
        max-height: 100%;
        max-width: 100%;
        position: fixed;
        top: 0px;
        width: 100vw;
    }

    .bg-dark {
        background-color: rgba(0, 0, 0, 0.4);
    }

    .indecision-container {
        position: relative;
        z-index: 99;
    }
    
    input {
        width: 250px;
        padding: 10px 15px;
        border-radius: 5px;
        border: none;
    }
    input:focus {
        outline: none;
    }

    p {
        color: white;
        font-size: 20px;
        margin-top: 0px;
    }

    h1, h2 {
        color: white;
    }
    
    h2 {
        margin-top: 150px;
    }

</style>