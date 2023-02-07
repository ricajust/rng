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
  Updated: 2023/01/26 10:06:33     ⠀⠀⠀⠀⡼⢺⣯⢹⢰⡏⠒⠒⠒⠊⠀⠐⢒⣾⣹⣸⢹⣾⡇⠀⢣            
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
 * @brief find a number in selected context
 * @param {*} context a context to search
 * @param {*} number a number to find
 * @returns boolean (true if find number, otherwise false)
 */
const	findNumber = (context, number) => {
	for (let i = 0; i < context.length; i++) {
		if (context[i] == number)
			return (true);
	}
	return (false);
}

/**
 * @brief function that return any number from array size range
 * @param {*} mainArray array of numbers
 * @returns 
 */
const	getRandomNumber = (mainArray) => {
	let	selectedNumber;
	let	storageNumbers = [];
	let	size;
	let	index;

	size = mainArray.length;
	storageNumbers = JSON.parse(localStorage.getItem("storageNumbers")) ? JSON.parse(localStorage.getItem("storageNumbers")) : [];
	do {
		if (size > 1) 
			index = Math.floor(Math.random() * size);
		else
			index = 0;
		selectedNumber = mainArray[index];
	} while (storageNumbers && selectedNumber && findNumber(storageNumbers, selectedNumber));
	storageNumbers.push(selectedNumber);
	localStorage.setItem("storageNumbers", JSON.stringify(storageNumbers));
	return (selectedNumber);
}

/**
 * @brief a selection sort algorithm to sort each game
 * @param {*} disorderlyArray a single game array
 * @returns a sorted array
 */
const	selectionSort = (disorderlyArray) => {
	let	aux;
	let	i;

	i = 0;
	while (i < disorderlyArray.length - 1) {
		for (let j = i + 1; j < disorderlyArray.length; j++) {
			if (disorderlyArray[i] > disorderlyArray[j]) {
				aux = disorderlyArray[i];
				disorderlyArray[i] = disorderlyArray[j];
				disorderlyArray[j] = aux;
			}
		}
		i++;
	}
	
	return (disorderlyArray);
}

const	removeNumberFromArray = (arr, number) => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == number) {
			arr.splice(i, 1);
		}
	}
	return arr;
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
	let	copyArray = [];
	let	number;

	if (!mainArray || !qttGames || !sizeGame) {
		handleErrors(
			"Ocorreu um problema interno",
			"Por favor entre em contato com o administrador do sistema e informe o código 500."
		)
	}
	for (let i = 0; i < qttGames; i++) {
		copyArray = structuredClone(mainArray);
		let	game = [];
		for (let j = 0; j < sizeGame; j++) {
			number = getRandomNumber(copyArray);
			while (game.indexOf(number) >= 0)
				number = getRandomNumber(copyArray);
			game.push(number);
			copyArray = removeNumberFromArray(copyArray, number);
		}
		game = selectionSort(game);
		games[i] = game;
		localStorage.setItem("storageNumbers", null);
	}
	return (games);
}

/**
 * @brief print a result in screen and console
 * @param {*} games array with random games
 * @param {*} rawArray string with numbers
 */
const	printGames = (games, rawArray) => {
	let	i;
	let	templates = "";

	i = 0;
	while (i < games.length) {
		console.log(`${i + 1}º Jogo: ${games[i]}\n`);
		let template = `
			<div class="col">
				<div class="card mb-4 rounded-3 shadow-sm">
					<div class="card-header py-3 text-bg-primary border-primary">
						<h4 class="my-0 fw-normal">Jogo ${i + 1}</h4>
					</div>
					<div class="card-body">
						<h1 class="card-title pricing-card-title">${games[i]}</h1>
						<p>Resultado gerado a partir dos valores: ${rawArray}</p>
					</div>
				</div>
			</div>
		`;
		templates += template
		i++;
	}
	document.getElementById("results").innerHTML = templates;
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

const	removeDuplicity = (oldArray) => {
	return oldArray.filter((item, index) => {
		oldArray.indexOf(item) === index;
	});
}

/**
 * @brief the main function
 * @param {*} rawArray string with numbers
 * @param {*} quantityGames numbers of games
 * @param {*} numberPerGame quantity of numbers for a game
 */
const	main = (rawArray, quantityGames, numberPerGame) => {
	let newArray = [];
	mainArray = converterRawToArray(rawArray);
	newArray = mainArray.filter((item, index) => {
			return mainArray.indexOf(item) === index;
		});
	if (numberPerGame == newArray.length) {
		handleErrors(
			"Opa, detectamos uma discrepância",
			`Detectamos que há duplicidade nos números digitados, com isso eliminamos os números em duplicidade e os números que restaram são estes:\n${newArray}.`
		);
		numberPerGame = newArray.length;
	}
	if (numberPerGame > newArray.length) {
		handleErrors(
			"Opa, dados de entrada inválidos!",
			"A quantidade de números por jogo que você inseriu (sem contar os números repetidos) é maior que a quantidade total dos números para sorteio inseridos, por favor tente novamente"
		);
		return false;
	} else {
		localStorage.setItem("storageIndexes", null);
		const games = generateGame(newArray, quantityGames, numberPerGame);
		localStorage.setItem("games", games);
		printGames(games, rawArray);
		return true;
	}
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
	games = localStorage.getItem("games");
	if (rawArray && numberPerGame && quantityGames) {
		document.getElementById("iptNumbers").value = rawArray;
		document.getElementById("iptGameQtt").value = quantityGames;
		document.getElementById("iptNumberQtt").value = numberPerGame;
		document.getElementById("chkRemember").value = remember;
	}
	//printGames(games, rawArray);
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
		localStorage.setItem("games", games);
	} else {
		localStorage.clear();
	}
}

/**
 * @brief a error orchestrator 
 * @param {*} title modal title
 * @param {*} message modal message
 */
const	handleErrors = (title, message) => {
	const modalData = {};

	modalData.title = title;
	modalData.message = message;
	openModal(modalData);
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
const	formValidator = (formValues) => {
	let statusMain;

	if (!formValues.quantityGames) {
		handleErrors(
			"Quantidade de jogos inválida",
			"Por favor entre com a quantidade de jogos!\nPor exemplo, uma cartela da Mega Sena tem três jogos cada um com seis jogos como padrão (podendo ser mais números)"
		);
	} else if (!formValues.numberPerGame) {
		handleErrors(
			"Quantidade de números por jogos inválida",
			"Por favor entre com a quantidade de números que você quer por jogo!\nPor padrão a Mega Sena tem seis jogos, mas você pode escolher mais ou menos números)"
		);
	} else if (!formValues.rawArray) {
		handleErrors(
			"Números para sorteio inválido",
			"Por favor entre com os números que você deseja que seja sorteados, pode haver repetição de números, exemplo: 31, 5, 6, 60, 5, ..."
		);
	} else {
		setLocalStorageValues(formValues);
		statusMain = main(formValues.rawArray, formValues.quantityGames, formValues.numberPerGame);
		if (statusMain) {
			document.getElementById("containerResult").style.setProperty("display", "flex");
			document.getElementById("containerResult").style.setProperty("flex-direction", "column");
		}
	}
}

/**
 * @brief trigger to execute the rng
*/
document.querySelector("#btnGenerateGame").addEventListener("click", () => {
	let formValues = {};

	formValues = getFormValues();
	formValidator(formValues);
});

getLocalStorageValues();