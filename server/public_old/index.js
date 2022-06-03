let app = new Vue({
	el: '#app',
	data: {
		message: null
	},
	mounted: async function() {
		try {
			let result = await ky('/message').json();
			this.message = result.message;
		} catch (error) {
			console.error(error);
		}
	}
});
