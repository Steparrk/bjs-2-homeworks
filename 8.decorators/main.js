let add2 = (a, b) => a + b;
    let add3 = (a, b, c) => a + b + c;

    upgAdd2 = cachingDecoratorNew(add2);
      upgAdd3 = cachingDecoratorNew(add3);

      upgAdd3(1, 2, 3)
      upgAdd3(1, 2, 4)
      upgAdd3(1, 2, 4)
      upgAdd3(1, 2, 5)
      upgAdd3(1, 2, 6)
      upgAdd3(1, 2, 7)
      upgAdd3(1, 2, 8)
      upgAdd3(1, 2, 8)
      upgAdd3(1, 2, 3)
      	const sendSignal = () => {
      		console.log("Сигнал отправлен");
      		console.timeLog();
      	}

		const upgradedSendSignal = debounceDecorator2(sendSignal, 2000);
		console.time();
		setTimeout(upgradedSendSignal); // Сигнал отправлен
		setTimeout(upgradedSendSignal, 300); // проигнорировано так как от последнего вызова прошло менее 2000мс (300 - 0 < 2000)
		setTimeout(upgradedSendSignal, 900); // проигнорировано так как времени от последнего вызова прошло: 900-300=600 (600 < 2000)
		setTimeout(upgradedSendSignal, 1200); // проигнорировано так как времени от последнего вызова прошло: 1200-900=300 (300 < 2000)
		setTimeout(upgradedSendSignal, 2300); // проигнорировано так как времени от последнего вызова прошло: 2300-1200=1100 (1100 < 2000)
		setTimeout(upgradedSendSignal, 4400); // Сигнал отправлен так как времени от последнего вызова прошло: 4400-2300=2100 (2100 > 2000)
		setTimeout(upgradedSendSignal, 4500);
		const sendCount = () => {
      		console.log(upgradedSendSignal.history);
      		console.timeLog();
      	}
		setTimeout(sendCount, 5000)