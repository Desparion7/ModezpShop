const products = [
	{
		name: 'JEDNOCZĘŚCIOWA PIŻAMA LILO STICH',
		image: [
			'https://0.allegroimg.com/s512/03eb80/cf49b01b404d8915f092416149c0/PIZAMA-ZWIERZETA-JEDNOCZESCIOWA-LILO-STICH-S/PIZAMA-ZWIERZETA-JEDNOCZESCIOWA-LILO-STICH-S/PIZAMA-ZWIERZETA-JEDNOCZESCIOWA-LILO-STICH-S',
			'https://3.allegroimg.com/s720/032349/d598ccd74c2a8af6578a79846d33/PIZAMA-ZWIERZETA-JEDNOCZESCIOWA-LILO-STICH-L-Marka-Inna-marka',
			'https://6.allegroimg.com/s720/032d0e/d77c80de4e9799c4dd420551fed6/PIZAMA-ZWIERZETA-JEDNOCZESCIOWA-LILO-STICH-L-Rozmiar-L',
			'https://0.allegroimg.com/s720/0373b4/cf02a1004dcd88b5b92cdc6ee690/PIZAMA-ZWIERZETA-JEDNOCZESCIOWA-LILO-STICH-L-Kolor-bezbarwny-bialy-brazowy-czerwony-ecru-fioletowy-granatowy-miedziany-niebieski-pomaranczowy-rozowy-szary-wielokolorowy-zolty-inny-kolor',
		],
		description:
			'Pidżamy wykonane są delikatnego i bardzo przyjemnego w dotyku materiału. Kapcie widoczne na niektórych zdjęciach nie są częścią piżamy',
		size: ['S', 'M', 'L', 'XL'],
		category: 'piżamy',
		price: 139.99,
		countInStock: 100,
		rating: 5,
		numReviews: 12,
	},
	{
		name: 'JEDNOCZĘŚCIOWA PIŻAMA KOALA',
		image: [
			'https://a.allegroimg.com/s1024/0361de/90b87bb34262868c28f536d69a1a/PIZAMA-ZWIERZETA-JEDNOCZESCIOWA-KOALA-L',
			'https://9.allegroimg.com/s1024/038893/164439dc4a5480da55dd619ce109/PIZAMA-ZWIERZETA-JEDNOCZESCIOWA-KOALA-L-Kod-producenta-12',
			'https://7.allegroimg.com/s720/03bc41/f25345da4446aeea16d5e34e6f37/PIZAMA-ZWIERZETA-JEDNOCZESCIOWA-KOALA-L-Marka-Inna-marka',
			'https://a.allegroimg.com/s720/1147d6/cfe76a3749e29761b205b962e3d7/PIZAMA-ZWIERZETA-JEDNOCZESCIOWA-KOALA-L-Rozmiar-L',
		],
		description:
			'Pidżamy wykonane są delikatnego i bardzo przyjemnego w dotyku materiału. Kapcie widoczne na niektórych zdjęciach nie są częścią piżamy',
		size: ['S', 'M', 'L', 'XL'],
		category: 'piżamy',
		price: 139.99,
		countInStock: 100,
		rating: 4.5,
		numReviews: 12,
	},
	{
		name: 'JEDNOCZĘŚCIOWA PIŻAMA ŻABA',
		image: [
			'https://a.allegroimg.com/s720/11dd94/c73b913b44a4930b1bd5a9b2bbcf/PIZAMA-ZWIERZETA-JEDNOCZESCIOWA-ZABA-ZABKA-M',
			'https://a.allegroimg.com/s1024/114438/70c7e2314a1eb663d1fe0a013768/PIZAMA-ZWIERZETA-JEDNOCZESCIOWA-ZABA-ZABKA-M-Marka-Inna-marka',
			'https://a.allegroimg.com/s720/116785/1de5811e4e229e709ac32086da38/PIZAMA-ZWIERZETA-JEDNOCZESCIOWA-ZABA-ZABKA-M-Rozmiar-M',
			'https://a.allegroimg.com/s720/11ef08/a06b591b47bc8a01f24f1ae572b2/PIZAMA-ZWIERZETA-JEDNOCZESCIOWA-ZABA-ZABKA-M-Kolor-bezbarwny-bialy-brazowy-czerwony-ecru-fioletowy-granatowy-miedziany-niebieski-pomaranczowy-rozowy-szary-wielokolorowy-zolty-inny-kolor',
		],
		description:
			'Pidżamy wykonane są delikatnego i bardzo przyjemnego w dotyku materiału. Kapcie widoczne na niektórych zdjęciach nie są częścią piżamy',
		size: ['S', 'M', 'L', 'XL'],
		category: 'piżamy',
		price: 139.99,
		countInStock: 100,
		rating: 5,
		numReviews: 12,
	},
	{
		name: 'PIŻAMA DZIECIĘCA LILO STICH',
		image: [
			'https://3.allegroimg.com/s720/032101/c55e9efe434687c517db77fc4413/PIZAMA-LILO-I-STICH-DZIECKA-ZWIERZETA-125-135',
			'https://2.allegroimg.com/s1024/03ed35/2acd79054abebc1c9785d6188f02/PIZAMA-LILO-I-STICH-DZIECKA-ZWIERZETA-125-135-Marka-Inna-marka',
			'https://6.allegroimg.com/s1024/0375be/a409b1e345a09621f5f8c1bf90f6/PIZAMA-LILO-I-STICH-DZIECKA-ZWIERZETA-125-135-Rozmiar-135',
			'https://4.allegroimg.com/s1024/03909b/f60a49064fe9b1cb12e0505cf4c4/PIZAMA-LILO-I-STICH-DZIECKA-ZWIERZETA-125-135-Rodzaj-pizama',
		],
		description:
			'Pidżamy wykonane są delikatnego i bardzo przyjemnego w dotyku materiału. Kapcie widoczne na niektórych zdjęciach nie są częścią piżamy. Pidżamy wykonane są z delikatnego i bardzo przyjemnego w dotyku materiału. Piżamy bardzo cieplutkie ',
		size: ['105', '115', '125', '135', '145'],
		category: 'piżamy',
		price: 129.99,
		countInStock: 100,
		rating: 5,
		numReviews: 54,
	},
	{
		name: 'PIŻAMA DZIECIĘCA PIKACHU',
		image: [
			'https://f.allegroimg.com/s720/030535/0090c3b04f70a5d5e53ce828408f/PIZAMA-PIKACHU-POKEMON-DZIECKA-ZWIERZETA-105-115',
		],
		description:
			'Pidżamy wykonane są delikatnego i bardzo przyjemnego w dotyku materiału. Kapcie widoczne na niektórych zdjęciach nie są częścią piżamy. Pidżamy wykonane są z delikatnego i bardzo przyjemnego w dotyku materiału. Piżamy bardzo cieplutkie ',
		size: ['105', '115', '125', '135', '145'],
		category: 'piżamy',
		price: 129.99,
		countInStock: 100,
		rating: 5,
		numReviews: 25,
	},
	{
		name: 'PIŻAMA DZIECIĘCA KOTEK',
		image: [
			'https://e.allegroimg.com/s720/03037d/1851918341c88dd758ae32a5c77e/PIZAMA-KOT-KOTEK-DLA-DZIECKA-ZWIERZETA-145',
		],
		description:
			'Pidżamy wykonane są delikatnego i bardzo przyjemnego w dotyku materiału. Kapcie widoczne na niektórych zdjęciach nie są częścią piżamy. Pidżamy wykonane są z delikatnego i bardzo przyjemnego w dotyku materiału. Piżamy bardzo cieplutkie ',
		size: ['105', '115', '125', '135', '145'],
		category: 'piżamy',
		price: 129.99,
		countInStock: 100,
		rating: 5,
		numReviews: 6,
	},
	{
		name: 'PIŻAMA DINOZAUR SMOK DZIECIĘCA',
		image: [
			'https://a.allegroimg.com/s1024/03a6d9/630588be4dfaad14ba587cb07821/PIZAMA-DINOZAUR-SMOK-DZIECIECA-ZWIERZETA-KIGURUMI',
		],
		description:
			'Pidżamy wykonane są delikatnego i bardzo przyjemnego w dotyku materiału. Kapcie widoczne na niektórych zdjęciach nie są częścią piżamy. Pidżamy wykonane są z delikatnego i bardzo przyjemnego w dotyku materiału. Piżamy bardzo cieplutkie ',
		size: ['105', '115', '125', '135', '145'],
		category: 'piżamy',
		price: 169.99,
		countInStock: 100,
		rating: 5,
		numReviews: 6,
	},
	{
		name: 'JEDNOCZĘŚCIOWA PIŻAMA NIETOPERZ',
		image: [
			'https://5.allegroimg.com/s1024/03b355/115995524d2e8e66771c84b37f45/PIZAMA-ZWIERZETA-JEDNOCZESCIOWA-NIETOPERZ-L',
		],
		description:
			'Pidżamy wykonane są delikatnego i bardzo przyjemnego w dotyku materiału. Kapcie widoczne na niektórych zdjęciach nie są częścią piżamy. Pidżamy wykonane są z delikatnego i bardzo przyjemnego w dotyku materiału. Piżamy bardzo cieplutkie ',
		size: ['S', 'M', 'L', 'XL'],
		category: 'piżamy',
		price: 139.99,
		countInStock: 100,
		rating: 5,
		numReviews: 6,
	},
	{
		name: 'PIŻAMA ZWIERZĘTA LEMUR KRÓL JULIAN',
		image: [
			'https://e.allegroimg.com/s1024/03215e/3555934d413e83f0dbbf700fa28e/PIZAMA-ZWIERZETA-JEDNOCZESCIOWA-LEMUR-KROL-JULIAN',
		],
		description:
			'Pidżamy wykonane są delikatnego i bardzo przyjemnego w dotyku materiału. Kapcie widoczne na niektórych zdjęciach nie są częścią piżamy. Pidżamy wykonane są z delikatnego i bardzo przyjemnego w dotyku materiału. Piżamy bardzo cieplutkie ',
		size: ['S', 'M', 'L', 'XL'],
		category: 'piżamy',
		price: 139.99,
		countInStock: 100,
		rating: 5,
		numReviews: 6,
	},
	{
		name: 'PIŻAMA KROWA KRÓWKA ZWIERZĘTA',
		image: [
			'https://f.allegroimg.com/s720/03429e/69a8f660426185cceda5682b29cf/PIZAMA-KROWA-KROWKA-DLA-DZIECKA-ZWIERZETA-115-125',
		],
		description:
			'Pidżamy wykonane są delikatnego i bardzo przyjemnego w dotyku materiału. Kapcie widoczne na niektórych zdjęciach nie są częścią piżamy. Pidżamy wykonane są z delikatnego i bardzo przyjemnego w dotyku materiału. Piżamy bardzo cieplutkie ',
		size: ['105', '115', '125', '135', '145'],
		category: 'piżamy',
		price: 129.99,
		countInStock: 100,
		rating: 5,
		numReviews: 6,
	},
	{
		name: 'BLUZA MĘSKA 3D RICK AND MORTY ',
		image: [
			'https://a.allegroimg.com/s720/039f39/3dcc5fe14fcaa83d5b9e4f98419d/BLUZA-MESKA-3D-Z-KAPTUREM-RICK-AND-MORTY-CYTAT',
		],
		description:
			'Wysokiej jakości bluza Z MOTYWEM RICK AND MORTY. Bluza bardzo wygodna i ciepła. Wysoka jakość wykonania w atrakcyjnej cenie',
		size: ['S', 'M', 'L', 'XL', '2XL'],
		category: 'bluzy męskie',
		price: 125.99,
		countInStock: 100,
		rating: 5,
		numReviews: 6,
	},
	{
		name: 'BLUZA MĘSKA 3D RICK AND MORTY ',
		image: [
			'https://a.allegroimg.com/s720/035b4f/c14aad5346dcaeef04fcf8420ff3/BLUZA-MESKA-3D-Z-KAPTUREM-RICK-AND-MORTY-CYTAT',
		],
		description:
			'Wysokiej jakości bluza Z MOTYWEM RICK AND MORTY. Bluza bardzo wygodna i ciepła. Wysoka jakość wykonania w atrakcyjnej cenie',
		size: ['S', 'M', 'L', 'XL', '2XL'],
		category: 'bluzy męskie',
		price: 125.99,
		countInStock: 100,
		rating: 5,
		numReviews: 6,
	},
	{
		name: 'BLUZA MĘSKA 3D RICK AND MORTY ',
		image: [
			'https://a.allegroimg.com/s720/034345/f677a8f64e45891c57e9abe0b32e/BLUZA-MESKA-3D-Z-KAPTUREM-RICK-AND-MORTY-CYTAT',
		],
		description:
			'Wysokiej jakości bluza Z MOTYWEM RICK AND MORTY. Bluza bardzo wygodna i ciepła. Wysoka jakość wykonania w atrakcyjnej cenie',
		size: ['S', 'M', 'L', 'XL', '2XL'],
		category: 'bluzy męskie',
		price: 125.99,
		countInStock: 100,
		rating: 5,
		numReviews: 6,
	},
	{
		name: 'DAMSKI SWETER GOLF OCIEPLANY ',
		image: [
			'https://a.allegroimg.com/s720/117498/12fa48ba487e83298f1fcf979c8a/DAMSKI-SWETER-GOLF-CIEPLY-OCIEPLANY-ELEGANCKI-Rekaw-dlugi-rekaw',
		],
		description:
			'ELEGANSKI OCIEPLANY SWETER DAMSKI NIESAMOWITY STYL WYSOKA JAKOŚĆ WYKONANIA SWETER NIE POGRUBIA A JEDNOCZESNIE JEST BARDZO CIEPŁY',
		size: ['S', 'M', 'L', 'XL'],
		category: 'swetry damskie',
		price: 145.99,
		countInStock: 100,
		rating: 4.5,
		numReviews: 12,
	},
	{
		name: 'DAMSKI SWETER GOLF OCIEPLANY',
		image: [
			'https://a.allegroimg.com/s720/116a63/e9a683094056a618c0ba7e1c3374/DAMSKI-SWETER-GOLF-CIEPLY-OCIEPLANY-ELEGANCKI-Material-dominujacy-wiskoza',
		],
		description:
			'ELEGANSKI OCIEPLANY SWETER DAMSKI NIESAMOWITY STYL WYSOKA JAKOŚĆ WYKONANIA SWETER NIE POGRUBIA A JEDNOCZESNIE JEST BARDZO CIEPŁY',
		size: ['S', 'M', 'L', 'XL'],
		category: 'swetry damskie',
		price: 145.99,
		countInStock: 100,
		rating: 5,
		numReviews: 12,
	},
	{
		name: 'DAMSKI SWETER GOLF OCIEPLANY',
		image: [
			'https://a.allegroimg.com/s720/11765a/45aeb19c41559ba6759aa2fe5dc6/DAMSKI-SWETER-GOLF-CIEPLY-OCIEPLANY-ELEGANCKI',
		],
		description:
			'ELEGANSKI OCIEPLANY SWETER DAMSKI NIESAMOWITY STYL WYSOKA JAKOŚĆ WYKONANIA SWETER NIE POGRUBIA A JEDNOCZESNIE JEST BARDZO CIEPŁY',
		size: ['S', 'M', 'L', 'XL'],
		category: 'swetry damskie',
		price: 145.99,
		countInStock: 100,
		rating: 4.5,
		numReviews: 3,
	},
	{
		name: 'Koszulka Termoaktywna VENOM',
		image: [
			'https://5.allegroimg.com/s1024/03f737/a1c7ef2c451ca71841fdda5b1475/Koszulka-Termoaktywna-SPIDER-MAN-VENOM-4XL',
		],
		description:
			'Termoaktywne koszulki w oryginalnych wzorach. Wysoka jakość nadruku HD, Koszulki produkowane ze specjalnie projektowanych dzianin syntetycznych, które posiadają zdolność sprawnego odprowadzania potu i pary wodnej ze skóry pozostawiając ją suchą, nawet przy intensywnym wysiłku fizycznym',
		size: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
		category: 'koszulki męskie',
		price: 89.99,
		countInStock: 100,
		rating: 5,
		numReviews: 4,
	},
	{
		name: 'STRÓJ KĄPIELOWY DŁUGI RĘKAW KWIATY',
		image: [
			'https://a.allegroimg.com/s1024/118d89/5a0c035b40539986b2079823fd3c/STROJ-KAPIELOWY-DLUGI-REKAW-ODSLONIETY-W-KWIATY',
		],
		description:
			'SPORTOWY Strój kąpielowy. Przysłania ramiona i plecy dzięki temu idealnie się sprawdza do osłonięcia mocno opalonych miejsc. Wysoka jakość materiału wykonanie z dbałością o szczegóły',
		size: ['S', 'M', 'L'],
		category: 'stroje kąpielowe',
		price: 99.99,
		countInStock: 100,
		rating: 4.5,
		numReviews: 3,
	},
	{
		name: 'BLUZA DAMSKA KANGUREK PIESEŁ SHIBA',
		image: [
			'https://7.allegroimg.com/s720/032bf3/7f4b2d0944cd8c5663a8a46734c7/BLUZA-DAMSKA-SWETER-KANGUREK-PIESEL-SHIBA-M',
		],
		description:
			'Wyjątkowo BLUZA kangurek wykonana pod wzór pieska Shiba. Bluza wykonane są z delikatnego i bardzo przyjemnego w dotyku materiału',
		size: ['S', 'M', 'L', 'XL', '2XL'],
		category: 'bluzy damskie',
		price: 159.99,
		countInStock: 100,
		rating: 5,
		numReviews: 30,
	},
	{
		name: 'KOSZULKA T-shirt DAMSKA BABY YODA',
		image: ['https://a.allegroimg.com/s720/03e781/9d263bd14edc89153fbc05923628/KOSZULKA-T-shirt-DAMSKA-BABY-YODA-THE-MANDALORIAN-Marka-inna'],
		description:
			'Koszulka Baby Yoda. Produkt w 100% nowy nie używany. Azjatyckie rozmiary',
		size: ['S', 'M', 'L', 'XL', '2XL'],
		category: 'koszulki damskie',
		price: 75.99,
		countInStock: 100,
		rating: 5,
		numReviews: 23,
	},
	{
		name: 'Medalion Naszyjnik Wiedźmin 3 Dziki Gon Szkoła Kot',
		image: [
			'https://3.allegroimg.com/s720/03aa28/89b23ef349d6951b86fb8fe26c33/Medalion-Naszyjnik-Wiedzmin-3-Dziki-Gon-Szkola-Kot',
		],
		description:
			'Długość łańcuszka: 50 cm. Wymiary medalionu podane na zdjęciach w galerii. W skład zestawu wchodzi:	Medalion, Łańcuszek, Woreczek na medalion.',
		size: [],
		category: 'pozostałe',
		price: 85.99,
		countInStock: 100,
		rating: 5,
		numReviews: 21,
	},
	{
		name: 'Medalion Naszyjnik Wiedźmin 3 Dziki Gon Szkoła Węża',
		image: [
			'https://a.allegroimg.com/s720/035156/e66df4c64bcaa301ae0f2f923f3c/Medalion-Wiedzmin-3-Dziki-Gon-Szkola-Weza',
		],
		description:
			'Długość łańcuszka: 50 cm. Wymiary medalionu podane na zdjęciach w galerii. W skład zestawu wchodzi:	Medalion, Łańcuszek, Woreczek na medalion.',
		size: [],
		category: 'pozostałe',
		price: 85.99,
		countInStock: 100,
		rating: 5,
		numReviews: 17,
	},
	{
		name: 'Medalion Naszyjnik Wiedźmin 3 Dziki Gon Szkoła Gryfa',
		image: [
			'https://6.allegroimg.com/s1024/03260c/3a77c264462d85846ef7f9f3e476/Medalion-Wiedzmin-3-Dziki-Gon-Szkola-Gryfa',
		],
		description:
			'Długość łańcuszka: 50 cm. Wymiary medalionu podane na zdjęciach w galerii. W skład zestawu wchodzi:	Medalion, Łańcuszek, Woreczek na medalion.',
		size: [],
		category: 'pozostałe',
		price: 85.99,
		countInStock: 100,
		rating: 5,
		numReviews: 35,
	},
	{
		name: 'Medalion Naszyjnik Wiedźmin 3 Dziki Gon Szkoła Niedźwiedzia',
		image: [
			'https://7.allegroimg.com/s1024/0395aa/7a0cae2f470cbc49c89fdbd03f67/Medalion-Wiedzmin-3-Dziki-Gon-Szkola-Niedziwedzia-Rodzaj-naszyjnik',
		],
		description:
			'Długość łańcuszka: 50 cm. Wymiary medalionu podane na zdjęciach w galerii. W skład zestawu wchodzi:	Medalion, Łańcuszek, Woreczek na medalion.',
		size: [],
		category: 'pozostałe',
		price: 85.99,
		countInStock: 100,
		rating: 5,
		numReviews: 20,
	},
];

export default products;
