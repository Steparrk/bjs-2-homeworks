class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.timerId = null;
	}
	addClock(time, callback, id) {
		this.time = time;
		this.id = id;
		this.callback = callback;
		if(!id) {
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
		let getCurrentTime = this.getCurrentFormattedTime;
		function checkClock(bell) {
			if(getCurrentTime() === bell.time) {
				bell.callback();
			}
		}
			if(this.timerId === null) {
				this.timerId = setInterval(() => {
				this.alarmCollection.find(item => checkClock(item));
				}, 1000)
		}
	}
	stop() {
		if(this.timerId !== null) {
			clearInterval(this.timerId);
			this.timerId = null;
		}
	}
	printAlarms() {
		console.log(`⏰ Всего установлено ${this.alarmCollection.length}${this.alarmCollection.length ? ':' : '.'}`);
		this.alarmCollection.forEach(
		(item) => console.log(`Будильник №${item.id} заведён на ${item.time}`)
		)
	}
	clearAlarms() {
		this.alarmCollection = [];
	}
}

function testCase() {

	const alarm = new AlarmClock();
	const currentTime = alarm.getCurrentFormattedTime();

	const addTime = (start, interval) => {
		const timer = new Date();
		const startTime = start.split(':');
		timer.setHours(startTime[0]);
		timer.setMinutes(Number(startTime[1]) + interval);
		return timer.toTimeString().slice(0, 5);
	}

	alarm.addClock(
		currentTime,
		() => {
		console.log('Пора вставать');
		},
		1
	);
	alarm.addClock(
		addTime(currentTime, 1),
		() => {
			console.log('Давай уже, вставай!');
			alarm.removeClock(2);
		},
		2
	);
	alarm.addClock(
		addTime(currentTime, 2),
		() => {
			console.log('Вставай, а то проспишь');
			alarm.clearAlarms();
			alarm.printAlarms();
		},
		3
		);
	alarm.addClock(
		addTime(currentTime, 1),
		() => {
			console.log('Вставай, а то проспишь');
		},
		1
		); 
	 try {
	alarm.addClock(
		addTime(currentTime, 1),
		() => {
			console.log('Иди умываться!');
		});
	} catch (e) {
		console.error(e);
	}
	alarm.printAlarms();
	alarm.start();
}

testCase();