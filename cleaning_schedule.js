var itemNumber = 0;

var items = [
	"Bedroom 1 & bedroom 2",
	"Bathroom 1 & bathroom 2",
	"Kitchen & lounge room",
	"Balcony & dispose all garbage"
];

foreach (weekend in leaseTerm) {
	var time = Datetime(now);
	while ((Datetime(now) - time) <= 1800 ){
		clean(items[itemNumber]);
	}
	if (itemNumber < (items.length() - 1) ){
		itemNumber++;
	}
	else{
		itemNumber = 0;
	}
}

function clean(string place) {
	/** 
	*
	*	I don't think I need to actually write this function....
	*
	*
	*	Do I?
	*
	*/
}