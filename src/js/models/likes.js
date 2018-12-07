export default class Likes {
	constructor () {
		this.likes = [];
	}

	addLike (id, title, author, img) {
		const like = { id, title, author, img };
		this.likes.push(like);

		// Persist data into localstorage
		this.persistData();

		return like;
	}

	deleteLike (id) {
		const index = this.likes.findIndex((el) => el.id === id);
		this.likes.splice(index, 1);

		// Persist data into localstorage
		this.persistData();
	}

	isLiked (id) {
		return this.likes.findIndex((el) => el.id === id) !== -1;
	}

	getNumLikes (id) {
		return this.likes.length;
	}

	persistData () {
		localStorage.setItem('likes', JSON.stringify(this.likes));
	}

	readStorage () {
		const storage = JSON.parse(localStorage.getItem('likes'));

		// Restore likes from localStorage
		if (storage) this.likes = storage;
	}
}
