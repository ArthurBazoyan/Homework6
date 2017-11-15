// Recursion 

const printDiamondRec = function(height, string) {
	if(height % 2 === 0) {
		height = height - 1;
	}
	const concatChar = function(n, char) {
		if(n <= 0) {
			return '';
		}
		return char + concatChar(n - 1, char);
	};
	
	const vertical = function(spaceN, stringN, line) {
		if(line > height) {
			return "";
		}
		console.log(concatChar(spaceN, ' ') + concatChar(stringN, string));
		if(line <= height/2) {
			vertical(spaceN + -1, stringN + 2, line + 1);
		} else {
			vertical(spaceN + 1, stringN - 2, line + 1);
		}
	};
	vertical((height-1)/2, 1, 1);
};

// Loop
const printDiamondFor = function(height, string) {
	if(height % 2 === 0) {
		height = height - 1;
	}
	const concatChar = function(n, char) {
		let str = '';
		for(let i = 0; i < n; i++) {
			str = str + char;
		}
		return str;
	};
	let spaceN = (height-1)/2;
	let stringN = 1;
	for(let i = 1; i <= height; i++){
		console.log(concatChar(spaceN, ' ') + concatChar(stringN, string));
		if(i <= height/2) {
			spaceN = spaceN -1;
			stringN = stringN + 2;
		} else {
			spaceN = spaceN + 1;
			stringN = stringN - 2;
		}
	}
};


