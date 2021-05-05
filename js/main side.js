//Logic for loading sideItems
loadContents()
.then (contents => { 
		console.log(contents)
		displaySide(contents)
})
.catch (console.log);
