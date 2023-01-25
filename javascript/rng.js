/********************************************************************************
                                                                                
                                   ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠤⠒⠒⠢⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀         
  rng - Random Numbers Generator   ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡯⠴⠶⠶⠒⠢⢇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀        
                                   ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡎⡤⠖⠂⡀⠒⡢⡌⢣⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀        
  By: ricajust                     ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣷⠯⢭⣵⠑⣯⡭⢹⡎⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀        
                                   ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⡆⠀⢠⣤⠄⠀⣸⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀        
                                   ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣷⢄⣈⣟⢁⢴⠿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀        
  Created: 2023/01/24 17:20:42     ⠀⠀⠀⠀⠀⠀⠀⣀⢴⠒⡝⠁⠬⠛⣚⡩⠔⠉⢻⠒⣦⢄⠀⠀⠀⠀⠀⠀⠀⠀       
  por ricajust                     ⠀⠀⠀⠀⠀⢀⢎⠁⡌⢰⠁⠀⠀⠀⠀⠀⠀⠀⢸⠀⡛⠀⡷⡀⠀⠀⠀⠀⠀⠀        
                                   ⠀⠀⠀⠀⣀⣾⣷⣠⠃⢸⠀⠀⠀⠀⠀⠀⠀⠀⣸⠀⢹⢰⠁⢳⠀⠀⠀⠀⠀⠀       
                                   ⠀⠀⠀⠀⢸⡿⠟⢿⢳⡏⠀⠀⠀⠀⠀⠀⠀⢠⡟⣶⣘⢞⡀⠘⡆             
  Updated: 2023/01/25 19:25:44     ⠀⠀⠀⠀⡼⢺⣯⢹⢰⡏⠒⠒⠒⠊⠀⠐⢒⣾⣹⣸⢹⣾⡇⠀⢣            
  por ricajus                      ⠀⠀⠀⠀⣏⣾⠃⠀⣼⡟⣢⣀⡠⠤⣀⡰⢋⡝⣱⣹⠇⣿⣧⣴⠸⡄          
                                   ⠀⠀⠀⠀⡏⡞⡆⢠⡇⣟⠭⡒⠭⠭⠤⠒⣡⠔⣽⡇⣂⣿⠟⠃⢀⡇          
                                   ⠀⠀⠀⠀⢧⡇⡧⢫⠃⣷⣽⣒⣍⣉⣈⡩⢴⠾⡳⢡⢸⣛⣪⡗⢴⠁          
                                   ⠀⠀⠀⠀⣼⢃⠷⣸⣤⣯⢞⡥⢍⣐⣂⠨⠅⠊⡠⢃⣟⢏⠹⣎⣆⡀          
                                   ⠀⡠⠶⠚⠛⠛⠽⢹⡟⡖⢓⠿⣝⠓⠒⠒⠒⠭⢤⠗⣯⣩⣽⣿⠷⣾⣿⢷⣆     
                                   ⠜⣌⠢⢄⣀⡀⠀⡞⢡⠘⢄⠑⠨⢉⣀⠉⣀⠄⢊⠜⡸⠛⣿⡍⠉⠉⠈⢁⠁⠇    
                                   ⠈⢯⡓⠦⠤⠬⠭⣵⠀⠱⢄⠑⠲⠤⠤⠤⠤⠒⢁⡔⠁⢠⣏⣡⣤⣤⡶⠜⣻⠃    
                                   ⠀⠈⠙⠛⠒⠛⠻⠯⠕⠤⣀⣉⣓⣒⣂⣒⣒⣊⣁⣠⠔⠛⠂⠒⠛⠓⠛⠚⠉     
                                                                                
********************************************************************************/


/**
 * @brief function that return any number from array size range
 * @param {*} mainArray array of numbers
 * @returns 
 */
const	generateRandomIndex = (mainArray) => {
	let	index;
	let	size;

	size = mainArray.length;
	index = Math.floor(Math.random() * size);
	return (index);
}

/**
 * @brief get a random number from main array
 * @param {*} mainArray array of numbers
 * @returns number
 */
const	getRandomNumber = (mainArray) => {
	return (mainArray[generateRandomIndex(mainArray)]);
}

const	selectionSort = (disorderlyArray) => {
	let	aux;

	for (let i = 0; i < disorderlyArray.length; i++) {
		for (let j = 0; j < disorderlyArray.length; j++) {
			if (disorderlyArray[i] > disorderlyArray[j + 1]) {
				aux = disorderlyArray[i];
				disorderlyArray[i] = disorderlyArray[j + 1];
				disorderlyArray[j + 1] = aux;
			}
		}
		orderlyArray = disorderlyArray;
	}
	return (orderlyArray);
}

/**
 * @brief create N games with X size
 * @param {*} mainArray array with numbers (choise user)
 * @param {*} qttGames how many games to generate (default is 3)
 * @param {*} sizeGame how size of each game (default is 6)
 * @returns 
 */
const	generateGame = (mainArray, qttGames, sizeGame) => {
	let	games = [];
	let	number;
	
	if (!mainArray || !qttGames || !sizeGame) {
		modal.title = "Ocorreu um problema interno";
		modal.message = `Por favor entre em contato com o administrador do sistema e informe o código 500.`
		openModal(modal);
	}
	for (let i = 0; i < qttGames; i++) {
		let	game = [];
		for (let j = 0; j < sizeGame; j++) {
			number = getRandomNumber(mainArray);
			while (game.indexOf(number) >= 0)
				number = getRandomNumber(mainArray);
			game.push(number);
		}
		game = selectionSort(game);
		games[i] = game;
	}
	return (games);
}

/**
 * @brief print a result in console
 * @param {*} games array with random games
 */
const	printGames = (games) => {
	let	i;

	i = 0;
	while (i < games.length) {
		console.log(`${i + 1}º Jogo: ${games[i]}\n`);
		i++;
	}
}

/**
 * @brief convert a raw string in array of number
 * @param {*} raw string with numbers
 * @returns array
 */
const	converterRawToArray = (raw) => {
	let	mainArrayString = [];
	let	mainArrayNumber = [];
	mainArrayString = raw.split(",");
	for (let i = 0; i < mainArrayString.length; i++) {
		mainArrayNumber[i] = parseInt(mainArrayString[i]);
	}
	return mainArrayNumber;
}

/**
 * @brief the main function
 * @param {*} rawArray string with numbers
 * @param {*} quantityGames numbers of games
 * @param {*} numberPerGame quantity of numbers for a game
 */
const	main = (rawArray, quantityGames, numberPerGame) => {
	mainArray = converterRawToArray(rawArray);
	const games = generateGame(mainArray, quantityGames, numberPerGame);
	printGames(games);
}

/**
 * @brief get form values
 * @returns formValues object with quatity games, number per game, raw array and checkbox value
 */
const	getFormValues = () => {
	let formValues = {};

	formValues.quantityGames = document.getElementById("iptGameQtt").value;
	formValues.numberPerGame = document.getElementById("iptNumberQtt").value;
	formValues.remember = document.getElementById("chkRemember").checked;
	formValues.rawArray = document.getElementById("iptNumbers").value;
	return (formValues);
}

/**
 * @brief get local storage values and print in screen (if exists)
 */
const	getLocalStorageValues = () => {
	rawArray = localStorage.getItem("rawArray");
	numberPerGame = localStorage.getItem("numberPerGame");
	quantityGames = localStorage.getItem("quantityGames");
	remember = localStorage.getItem("remember");
	if (rawArray && numberPerGame && quantityGames) {
		document.getElementById("iptNumbers").value = rawArray;
		document.getElementById("iptGameQtt").value = quantityGames;
		document.getElementById("iptNumberQtt").value = numberPerGame;
		document.getElementById("chkRemember").value = remember;
	}
}

/**
 * @brief set values in local storage, if remember is checked else clear local storage
 * @param {*} formValues object with form values (array in string format, quantity games number format, number per game number format and remember boolean format)
 */
const	setLocalStorageValues = (formValues) => {
	if (formValues.remember) {
		localStorage.clear();
		localStorage.setItem("rawArray", formValues.rawArray);
		localStorage.setItem("numberPerGame", formValues.numberPerGame);
		localStorage.setItem("quantityGames", formValues.quantityGames);
		localStorage.setItem("remember", formValues.remember);
	} else {
		localStorage.clear();
	}
}

/**
 * @brief function to open bootstrap modal with corresponding messages
 * @param {*} modal warning messages
 * @returns 
 */
const	openModal = (modal) => {
	var myModal = new bootstrap.Modal(document.getElementById("staticBackdrop"), {});
	document.getElementById("staticBackdropLabel").innerHTML  = modal.title;
	document.getElementById("message").innerHTML  = modal.message;
	myModal.show();
	return;
}

/**
 * @brief validate form
 * @param {*} formValues form values
 * @param {*} modal warning messages
 */
const	formValidator = (formValues, modal) => {
	if (!formValues.quantityGames) {
		modal.title = "Quantidade de jogos inválida";
		modal.message = `Por favor entre com a quantidade de jogos!\nPor exemplo, uma cartela da Mega Sena tem três jogos cada um com seis jogos como padrão (podendo ser mais números)`
		openModal(modal);
	} else if (!formValues.numberPerGame) {
		modal.title = "Quantidade de números por jogos inválida";
		modal.message = `Por favor entre com a quantidade de números que você quer por jogo!\nPor padrão a Mega Sena tem seis jogos, mas você pode escolher mais ou menos números)`
		openModal(modal);
	} else if (!formValues.rawArray) {
		modal.title = "Números para sorteio inválido";
		modal.message = `Por favor entre com os números que você deseja que seja sorteados, pode haver repetição de números, exemplo: 31, 5, 6, 60, 5, ...`
		openModal(modal);
	} else {
		setLocalStorageValues(formValues);
		main(formValues.rawArray, formValues.quantityGames, formValues.numberPerGame);
	}
}

/**
 * @brief trigger to execute the rng
*/
document.querySelector("#btnGenerateGame").addEventListener("click", () => {
	let formValues = {};
	const modal = {
		show: false,
		message: ""
	};
	
	formValues = getFormValues();
	formValidator(formValues, modal);
});

getLocalStorageValues();