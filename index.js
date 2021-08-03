//////////////////////
//Restaurant Menu
//////////////////////
const starters = JSON.parse(
	"[" +
		'{ "type":"separator", "description":"APPETIZERS" },' +
		'{ "type":"food", "name":"JAMAICAN JERK MEATBALLS", "description":"Made from scratch meatballs filled with diced peppers and sweet onion are then seasoned with a Jamaican jerk blend sealing the island inspired flavor combination.", "price":"16.00" },' +
		'{ "type":"food", "name":"BITE SIZE JAMAICAN BEEF PATTIES", "description":"Baked in a flaky Puff pastry, delicious ground beef, scotch bonnet pepper, curry powder, and secret sauce", "price":"13.50" },' +
		'{ "type":"food", "name":"BANANA FRITTERS", "description":"Ripe bananas are mashed and seasoned with brown sugar, cinnamon, and nutmeg for extra flavor, and then fried to perfection.", "price":"13.50" },' +
		'{ "type":"separator", "description":"SALADS" },' +
		'{ "type":"food", "name":"SHREDDED BRUSSELS SPROUT SALAD", "description":"Made with just 7 ingredients, it’s a breeze to put together, but a bright lemon dressing, Parmesan cheese, pine nuts, and dried cranberries make it zippy, fresh, and satisfying.", "price":"25.00" },' +
		'{ "type":"food", "name":"RAINBOW ORZO SALAD", "description":"Diced mango adds a surprising sweet twist to this colorful orzo, red onion, bell pepper, herb, and cucumber salad.", "price":"15.00" },' +
		'{ "type":"food", "name":"WATERMELON SALAD WITH FETA AND MINT", "description":"Creamy avocado, tangy feta, and bright lime wonderfully accent cool, juicy melon and cucumber. A handful of fresh herbs is the perfect finishing touch.", "price":"26.00" } ]'
);
const mains = JSON.parse(
	"[" +
		'{ "type":"separator", "description":"VEGAN" },' +
		'{ "type":"food", "name":"VEGETABLE BIRYANI", "description":"An aromatic Indian rice dish with vegetables and chickpeas- infused with Indian spices.", "price":"18.00" },' +
		'{ "type":"food", "name":"OAXCAN", "description":"flavorful Mexican-style Oaxacan Bowl with roasted chipotle sweet potatoes and sweet peppers over a bed of warm seasoned black beans. It’s topped with crunchy cabbage slaw", "price":"21.50" },' +
		'{ "type":"food", "name":"PERUVIAN BURRITOS", "description":"2 BURRITOS filled with roasted sweet potato, fresh corn, peppers, quinoa and creamy black beans, then drizzled with spicy Peruvian Green Sauce. ", "price":"21.00" },' +
		'{ "type":"food", "name":"BALI BOWLS WITH PEANUT TOFU", "description":"roasted sweet potatoes, shredded cabbage, radish and snow peas and the most delicious Balinese-style Peanut Sauce! ", "price":"19.50" },' +
		'{ "type":"separator", "description":"MEAT & FISH" },' +
		'{ "type":"food", "name":"SURF & TURF", "description":"Beef entrecôte with herb butter, vegetables and  fries", "price":"48.00" },' +
		'{ "type":"food", "name":"RUMP STEAK", "description":"with café de paris herbs butter, fries and vegetables", "price":"35.00" },' +
		'{ "type":"food", "name":"FISH & CHIPS", "description":"Cod in beer batter with french fries and mashed peas", "price":"25.00" },' +
		'{ "type":"separator", "description":"PASTA" },' +
		'{ "type":"food", "name":"RASTA PASTA", "description":"a colorful pasta dish made with a variety of bell peppers, creamy sauce and Caribbean seasonings, inspired by an original Italian recipe, but made with more traditional Jamaican ingredients.", "price":"25.00" },' +
		'{ "type":"food", "name":"NEAPOLITAN PASTA", "description":"White wine, fettuccine pasta, black olives, olive oil, crushed tomatoes", "price":"25.00" },' +
		'{ "type":"food", "name":"SPICY PROVENCAL PASTA", "description":"Cherry tomatoes, kalamata olives, red pepper, and capers", "price":"25.00" },' +
		'{ "type":"food", "name":"LINGUINE", "description":"spinach sauce with cherry tomatoes, fennel, feta and pine nuts", "price":"25.00" },' +
		'{ "type":"food", "name":"VEGAN PASTA WITH ARTICHOKE SAUCE", "description":"The creamy vegan sauce is made with canned artichokes hearts, which turns in the creamiest, most delicious and luscious sauce", "price":"28.50" } ]'
);
const desserts = JSON.parse(
	"[" +
		'{ "type":"separator", "description":"SWEETS" },' +
		'{ "type":"food", "name":"PEANUT DROPS", "description":" boiled roasted peanuts and minced ginger in water with brown sugar. ", "price":"12.00" },' +
		'{ "type":"food", "name":"CASSAVA PONE", "description":"a sweet, moist, and gummy dessert made from cassava root, pumpkin, sweet potatoes, coconut, sugar, nutmeg, butter, and milk.", "price":"13.50" },' +
		'{ "type":"food", "name":"GIZZADA", "description":"a flavorful Jamaican dessert consisting of a pastry shell filled with a sweet, yet slightly spicy coconut filling. It is characterized by its pinched crust", "price":"13.50" },' +
		'{ "type":"food", "name":"TIRAMISU", "description":"rolled rhubarb pistachio with vanilla strawberry amaretto sauce", "price":"13.50" },' +
		'{ "type":"food", "name":"SWEET POTATO PUDDING", "description":"sweet potatoes, flour, coconut milk, dried fruits, and flavorings such as vanilla, nutmeg, sugar, and salt", "price":"10.50" } ]'
);
const drinks = JSON.parse(
	"[" +
		'{ "type":"separator", "description":"WATER & SOFT DRINKS" },' +
		'{ "type":"drink", "name":"SPARKLING WATER", "description":"", "price":"4.50" },' +
		'{ "type":"drink", "name":"BOTTLED WATER", "description":"", "price":"4.50" },' +
		'{ "type":"drink", "name":"SODA", "description":"", "price":"5.50" },' +
		'{ "type":"drink", "name":"JUST WATER", "description":"", "price":"FREE" },' +
		// '{ "type":"separator", "description":"BEER" },' +
		// '{ "type":"drink", "name":"BADENER GOLD", "description":"3dl", "price":"4.80" },' +
		// '{ "type":"drink", "name":"BADENER GOLD", "description":"5dl", "price":"7.00" },' +
		// '{ "type":"drink", "name":"QUÖLLFRISCH", "description":"5dl", "price":"7.50" },' +
		// '{ "type":"drink", "name":"BIER PAUL 02", "description":"3.3dl", "price":"6.00" },' +
		// '{ "type":"separator", "description":"RED WINE" },' +
		// '{ "type":"drink", "name":"MERLOT DEL TICINO", "description":"1dl", "price":"7.00" },' +
		// '{ "type":"drink", "name":"BOLGHERI ROSSO", "description":"1dl", "price":"8.50" },' +
		// '{ "type":"drink", "name":"NERO D’AVOLA IGT", "description":"1dl", "price":"7.50" },' +
		// '{ "type":"drink", "name":"MONTE CASTANHEIRO", "description":"1dl", "price":"8.00" },' +
		// '{ "type":"separator", "description":"WHITE WINE & CHAMPAGNE" },' +
		// '{ "type":"drink", "name":"ST. SAPHORIN7", "description":"1dl", "price":"7.00" },' +
		// '{ "type":"drink", "name":"BASILICATA BIANCO", "description":"1dl", "price":"7.50" },' +
		// '{ "type":"drink", "name":"TAITTINGER BRUT", "description":"7.5dl", "price":"91.00" },' +
		// '{ "type":"separator", "description":"WHISKY" },' +
		// '{ "type":"drink", "name":"OBAN 14 YEARS", "description":"4cl", "price":"13.50" },' +
		// '{ "type":"drink", "name":"LAGAVULIN 16 YEARS", "description":"4cl", "price":"15.00" },' +
		// '{ "type":"drink", "name":"MACALLEN AMBER", "description":"4cl", "price":"16.00" },' +
		// '{ "type":"separator", "description":"HOT DRINKS" },' +
		// '{ "type":"drink", "name":"ESPRESSO", "description":"", "price":"4.50" },' +
		// '{ "type":"drink", "name":"CAFE LATTE", "description":"", "price":"4.50" },' +
		'{ "type":"drink", "name":"TEA", "description":"", "price":"5.00" } ]'
);

/////////////////////////////////////////////////////////////////
let sl = 0;

let startersbutton = document.getElementById("startersbutton");
let mainsbutton = document.getElementById("mainsbutton");
let dessertsbutton = document.getElementById("dessertsbutton");
let drinksbutton = document.getElementById("drinksbutton");

let ni1 = document.getElementById("ni1");
let ni2 = document.getElementById("ni2");
let ni3 = document.getElementById("ni3");
let ni4 = document.getElementById("ni4");

startersbutton.addEventListener("click", (e) => {
	setIndicator(0);
	populateItems(starters);
});
mainsbutton.addEventListener("click", (e) => {
	setIndicator(1);
	populateItems(mains);
});
dessertsbutton.addEventListener("click", (e) => {
	setIndicator(2);
	populateItems(desserts);
});
drinksbutton.addEventListener("click", (e) => {
	setIndicator(3);
	populateItems(drinks);
});

function populateItems(items) {
	let menu = document.querySelector(".menu");
	menu.innerHTML = "";
	for (i = 0; i < items.length; i++) {
		if (items[i].type === "separator") {
			let menuitem = document.createElement("div");
			menuitem.setAttribute("class", "menu-separator");
			menuitem.innerHTML = items[i].description;
			menu.appendChild(menuitem);
		}
		if (items[i].type === "food") {
			let menuitem = document.createElement("div");
			let menuitemname = document.createElement("div");
			let menuitemdesc = document.createElement("div");
			let menuitemprize = document.createElement("div");
			menuitem.setAttribute("class", "menu-item");
			menuitemname.setAttribute("class", "menu-item-name");
			menuitemdesc.setAttribute("class", "menu-item-description");
			menuitemprize.setAttribute("class", "menu-item-price");

			menuitemname.innerHTML = items[i].name;
			menuitemdesc.innerHTML = items[i].description;
			menuitemprize.innerHTML = items[i].price;

			menuitem.appendChild(menuitemname);
			menuitem.appendChild(menuitemdesc);
			menuitem.appendChild(menuitemprize);
			menu.appendChild(menuitem);
		}
		if (items[i].type === "drink") {
			let drinkitem = document.createElement("div");
			let drinkitemname = document.createElement("div");
			let drinkitemdesc = document.createElement("div");
			let drinkitemprize = document.createElement("div");
			drinkitem.setAttribute("class", "drink-item");
			drinkitemname.setAttribute("class", "drink-item-name");
			drinkitemdesc.setAttribute("class", "drink-item-description");
			drinkitemprize.setAttribute("class", "drink-item-price");

			drinkitemname.innerHTML = items[i].name;
			drinkitemdesc.innerHTML = items[i].description;
			drinkitemprize.innerHTML = items[i].price;

			drinkitem.appendChild(drinkitemname);
			drinkitem.appendChild(drinkitemdesc);
			drinkitem.appendChild(drinkitemprize);
			menu.appendChild(drinkitem);
		}
	}
}
function setIndicator(sel) {
	sl = sel;
	let vp = "";
	if (window.innerWidth < 800) {
		vp = "60px";
	} else {
		vp = "85%";
	}
	let elems = [ni1, ni2, ni3, ni4];
	for (i = 0; i < elems.length; i++) {
		if (i === sel) {
			elems[i].style.width = vp;
			elems[i].style.boxShadow = "2px 2px 10px 2px var(--icolor" + (i + 1) + ")";
		} else {
			elems[i].style.width = "0";
			elems[i].style.boxShadow = "none";
		}
	}
}

window.addEventListener("resize", (e) => {
	setIndicator(sl);
});

//default runs
setIndicator(sl);
populateItems(starters);
