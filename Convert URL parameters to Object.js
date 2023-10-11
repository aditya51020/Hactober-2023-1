let search = 'https://www.geeksforgeeks.org/?param_1=val_1&x=7&y=9';
console.log(search);
search = search.split('?')[1];

function GFG_Fun() {
	console.log('{"' + decodeURI(search)
		.replace(/"/g, '\\"').replace(/&/g, '","')
		.replace(/=/g, '":"') + '"}');
}
GFG_Fun()
