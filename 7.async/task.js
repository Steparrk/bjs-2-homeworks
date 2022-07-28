class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.timerId = null;
	}
	addClock(time, callback, id) {
		this.time = time;
		this.id = id;
		this.callback = callback;
		if(this.id === undefined) {
			throw new Error("error text");
		}
		if(this.alarmCollection.find(item => item.id === this.id)) {
			return console.error("Звонок уже существует");
		}
		return this.alarmCollection.push({'time': this.time, callback, 'id': this.id});
	}
	removeClock(id) {
		this.alarmCollection = this.alarmCollection.filter(item => item.id !== id);
	}
	getCurrentFormattedTime() {
		const currentDate = new Date();
		const hours = currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : `${currentDate.getHours()}`;;
		const minutes = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : `${currentDate.getMinutes()}`;
		return (`${hours}:${minutes}`);
	}
	start() {
		let currentTime = this.getCurrentFormattedTime();
		function checkClock(bell, timerId) {
			let t = 0;
			if(bell.time === currentTime && t !== bell.time){
				bell.callback();
				clearInterval(timerId);
			}
		}
		if(this.timerId === null) {
			this.timerId = setInterval(() => {
			this.alarmCollection.find(item => checkClock(item, this.timerId));
			}, 500)
		}
	}
	stop() {
		if(this.timerId !== null) {
			clearInterval(this.timerId);
			this.timerId = null;
		}
	}
	clearAlarms() {
		clearInterval(this.timerId);
		this.alarmCollection = [];
	}
}

	let clock = new AlarmClock();
	clock.addClock("23:14", () => console.log("Играет зыка"), 2)
clock.addClock("23:12", () => console.log("Поздно"), 1)
	clock.start();