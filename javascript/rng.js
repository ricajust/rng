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
 * @param {*} size 
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
 * @param {*} mainArray 
 * @returns number
 */
const	getRandomNumber = (mainArray) => {
	return (mainArray[generateRandomIndex(mainArray)]);
}

/**
 * @brief create N games with X size
 * @param {*} mainArray array with numbers (choise user)
 * @param {*} qttGames how many games to generate (default is 3)
 * @param {*} sizeGame how size of each game (default is 6)
 * @returns 
 */
const	generateGame = (mainArray, qttGames = 3, sizeGame = 6) => {
	let	games = [];
	let	number;
	
	for (let i = 0; i < qttGames; i++) {
		let	game = [];
		for (let j = 0; j < sizeGame; j++) {
			number = getRandomNumber(mainArray);
			while (game.indexOf(number) >= 0)
				number = getRandomNumber(mainArray);
			game.push(number);
		}
		games[i] = game;
	}
	return (games);
}

/**
 * 
 * @param {@brief print a result in console} games 
 */
const	printGames = (games) => {
	let	i;

	i = 0;
	while (i < games.length) {
		console.log(`${i + 1}º Jogo: ${games[i]}\n`);
		i++;
	}
}

const main = () => {
	const	mainArray = [18, 54, 17, 1, 13, 9, 10, 9, 8, 7, 27, 26, 39, 31, 6, 7, 60, 48];
	const games = generateGame(mainArray, 3, 6);
	printGames(games);
}

main();