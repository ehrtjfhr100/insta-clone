//Logic for loading myItems
loadContents()
.then (contents => { 
		console.log(contents)
		displayMy(contents)
})
.catch (console.log);
