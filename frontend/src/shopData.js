const shopData = [
	{
		_id: '1',
		cars: [
			{
				_id: '1',
				name: 'BMW M8',
				image: '/images/m8.jpg',
				description:
					'BMW M8 Gran Coupe. The M8 Gran Coupe is powered by a lusty twin-turbo 4.4-liter V-8 that makes 600 horsepower on the regular model and 617 on the Competition version. Both M8s send that power to all four wheels via an eight-speed automatic transmission.',
				category: 'vehicles',
				brand: 'bmw',
				model: 'bmw-m8',
				price: 143450,
				countInStock: 2,
				rating: 4.5,
				reviewAmount: 1
			},
			{
				_id: '2',
				name: 'BMW M6',
				image: '/images/m6.jpg',
				description:
					'Bmw M6 Gran Coupe. A rear-wheel drive front-engined large coupé with 4 doors & 5 seats. With 552 hp, the twin turbocharged 4.4 Litre 32v quad-cam V8 petrol engine accelerates this M6 Gran Coupé to 62 mph in 4.2 seconds and on to a maximum speed of 155 mph. It has a kerb weight of 1875 kg. It comes with an 8 speed automatic gearbox.',
				category: 'vehicles',
				brand: 'bmw',
				model: 'bmw-m6',
				price: 128695,
				countInStock: 0,
				rating: 4,
				reviewAmount: 10
			},
			{
				_id: '3',
				name: 'BMW M5',
				image: '/images/m5.jpg',
				description:
					'BMW M5 Automatic. The 4.4-liter V-8 engine with Twin Scroll Bi-Turbo includes an advanced cooling system and a unique oil pan design to maintain pressure through challenging corners. And with the optional Competition Package, it delivers up to 617 horsepower.',
				category: 'vehicles',
				brand: 'bmw',
				model: 'bmw-m5',
				price: 106750,
				countInStock: 5,
				rating: 5,
				reviewAmount: 6
			},
			{
				_id: '4',
				name: 'BMW M4',
				image: '/images/m4.jpg',
				description:
					'BMW M4 F83 Coupe. The finely engineered 3.0-liter BMW M TwinPower Turbo inline-6 engine in the high-performance M4 Coupe can unleash intense power – up to 503 horsepower in the Competition model, taking you from 0-60 mph in 3.8 seconds.',
				category: 'vehicles',
				brand: 'bmw',
				model: 'bmw-m4',
				price: 77600,
				countInStock: 0,
				rating: 5,
				reviewAmount: 14
			},
			{
				_id: '5',
				name: 'BMW M3',
				image: '/images/m3.jpg',
				description:
					'The M3 CS is fitted as standard with Adaptive M suspension, whose geometry has been tuned to deliver optimised performance on both the road and track. Ensuring the best possible grip in all driving conditions are the DSC (Dynamic Stability Control) system – which includes M Dynamic Mode – and the Active M Differential.',
				category: 'vehicles',
				brand: 'bmw',
				model: 'bmw-m3',
				price: 65990,
				countInStock: 10,
				rating: 5,
				reviewAmount: 9
			},
			{
				_id: '6',
				name: 'BMW M2',
				image: '/images/m2.jpg',
				description:
					"BMW M2 Competition Coupe. A true driver's machine, this monster combines the 2 Series' legacy of responsive handling with the legendary performance of M. The Active M Differential provides an optimum amount of locking between the rear wheels, for unmatched agility and constant stability through sharp corners.",
				category: 'vehicles',
				brand: 'bmw',
				model: 'bmw-m2',
				price: 55990,
				countInStock: 10,
				rating: 4,
				reviewAmount: 12
			}
		]
	},
	{
		_id: '2',
		cars: [
			{
				_id: 7,
				name: 'Mercedes AMG GT63s',
				image: '/images/gt63s.jpg',
				description:
					'The Mercedes-AMG GT 63 is available in two variants: GT 63 and GT 63 S. The former is the base model, fitted with a 4.0-liter twin-turbo V8 producing 577 hp and 590 lb-ft of torque. A nine-speed auto and 4Matic+ all-wheel-drive are your only options here, but a rear-wheel-drive drift mode is available.',
				category: 'vehicles',
				brand: 'mercedes',
				model: 'mercedes-gt63s',
				price: 161900,
				countInStock: 3,
				rating: 5,
				reviewAmount: 13
			},
			{
				_id: 8,
				name: 'Mercedes AMG CLS 63',
				image: '/images/cls.jpg',
				description:
					'Under the hood is a 5.5-liter twin-turbo V-8 that makes a beastly 577 hp and 590 lb-ft with a seven-speed automatic. All-wheel drive (4Matic) is standard, as is an adaptive sport suspension.',
				category: 'vehicles',
				brand: 'mercedes',
				model: 'mercedes-cls63',
				price: 108900,
				countInStock: 10,
				rating: 4,
				reviewAmount: 12
			},
			{
				_id: 9,
				name: 'Mercedes AMG S63',
				image: '/images/s63.jpg',
				description:
					'The S63 Coupe is powered by an individually handcrafted 4.0-liter bi-turbo V8 engine, which in S63 guise, develops 603 hp between 5,500 and 6,000 rpm and a massive 664 lb-ft of torque available between 2,750 and 4,500 rpm.',
				category: 'vehicles',
				brand: 'mercedes',
				model: 'mercedes-s63',
				price: 171400,
				countInStock: 0,
				rating: 5,
				reviewAmount: 8
			},
			{
				_id: 10,
				name: 'Mercedes AMG E63s',
				image: '/images/e63s.jpg',
				description:
					"The E63 S's powerful twin-turbo 603-hp V-8 engine is a mild-mannered partner and a maniacal monster all wrapped up into one. Left in Comfort mode, the engine and nine-speed automatic transmission react with stoicism and smoothness. Select any of the sportier drive modes and the powertrain unleashes relentless fury.",
				category: 'vehicles',
				brand: 'mercedes',
				model: 'mercedes-e63s',
				price: 107500,
				countInStock: 1,
				rating: 5,
				reviewAmount: 8
			},
			{
				_id: 11,
				name: 'Mercedes AMG C63s',
				image: '/images/c63s.jpg',
				description:
					'The Mercedes-AMG C63 and C63 S have a hand-built, twin-turbo 4.0-liter V-8 engine. In the C63, it makes 469 horsepower and 479 lb-ft of torque. The C63 S ups the performance ante with 503 horsepower and 516 lb-ft. Both engines use a nine-speed automatic with rear-wheel drive.',
				category: 'vehicles',
				brand: 'mercedes',
				model: 'mercedes-c63s',
				price: 78250,
				countInStock: 0,
				rating: 4.5,
				reviewAmount: 12
			},
			{
				_id: 12,
				name: 'Mercedes AMG G63',
				image: '/images/g63.jpg',
				description:
					'Mercedes-AMG G63 comes with a twin-turbocharged 4.0-liter V-8 engine that makes 577 horsepower and 627 lb-ft of torque. A nine-speed automatic gearbox with steering-wheel-mounted paddle shifters sends all that power to the all-wheel-drive system.',
				category: 'vehicles',
				brand: 'mercedes',
				model: 'mercedes-g63',
				price: 156450,
				countInStock: 10,
				rating: 3.5,
				reviewAmount: 3
			}
		]
	},

	{
		_id: '3',
		cars: [
			{
				_id: 13,
				name: 'Audi RS7',
				image: '/images/rs7.jpg',
				description:
					'Power comes from a twin-turbo 4.0-liter V-8 that pairs with a 48-volt hybrid system, eight-speed automatic transmission, and all-wheel drive. The RS7 makes 591 horsepower and 590 lb-ft of torque, which in our testing catapulted the girthy four-door from zero to 60 mph in just 3.0 seconds.',
				category: 'vehicles',
				brand: 'audi',
				model: 'audi-rs7',
				price: 114000,
				countInStock: 6,
				rating: 5,
				reviewAmount: 4
			},
			{
				_id: 14,
				name: 'Audi RS6',
				image: '/images/rs6.jpg',
				description:
					"Audi endows the RS6 with a twin-turbocharged 4.0-liter V-8, which generates 591 horsepower and 590 lb-ft of torque. The powerplant combines with a 48-volt mild-hybrid system that's found on other Audi products, such as the A8 luxury sedan and the Q8 crossover.",
				category: 'vehicles',
				brand: 'audi',
				model: 'audi-rs6',
				price: 100000,
				countInStock: 8,
				rating: 5,
				reviewAmount: 3
			},
			{
				_id: 15,
				name: 'Audi RS5',
				image: '/images/rs5.jpg',
				description:
					'The Audi RS5 has 1 Petrol Engine on offer. The Petrol engine is 2894 cc. It is available with the Automatic transmission. Depending upon the variant and fuel type the RS5 has a mileage of 11.05 kmpl. The RS5 is a 4 seater and has length of 4723mm, width of 2029mm and a wheelbase of 2766mm.',
				category: 'vehicles',
				brand: 'audi',
				model: 'audi-rs5',
				price: 74200,
				countInStock: 0,
				rating: 3.5,
				reviewAmount: 2
			},
			{
				_id: 16,
				name: 'Audi RS4',
				image: '/images/rs4.jpg',
				description:
					'The RS 4 has a curb weight of 1,620 kg (3,571 lb). It can accelerate from 0-100 km/h (62.1 mph) in 4.9 seconds, 0-160 km/h (99.4 mph) in 11.3 seconds, and 0-200 km/h (124.3 mph) in 17.0 seconds. The top speed is electronically limited to 250 km/h (155 mph).',
				category: 'vehicles',
				brand: 'audi',
				model: 'audi-rs4',
				price: 67625,
				countInStock: 2,
				rating: 4,
				reviewAmount: 8
			},
			{
				_id: 17,
				name: 'Audi RS3',
				image: '/images/rs3.jpg',
				description:
					'With a 400-hp turbocharged 2.5-liter five-cylinder under the hood, this small sports sedan has the muscle to back up its menacing appearance. It boasts a redline of 6900 rpm, and the rip of its distinctive exhaust note—due to its unique five-cylinder engine—sounds amazing the whole way there.',
				category: 'vehicles',
				brand: 'audi',
				model: 'audi-rs3',
				price: 60570,
				countInStock: 0,
				rating: 4.5,
				reviewAmount: 3
			},
			{
				_id: 18,
				name: 'Audi R8',
				image: '/images/r8.jpg',
				description:
					'The Petrol engine is 5204 cc. It is available with the Automatic transmission. Depending upon the variant and fuel type the R8 has a mileage of 5.71 kmpl. The R8 is a 2 seater and has length of 4426mm, width of 1940mm and a wheelbase of 2650mm.',
				category: 'vehicles',
				brand: 'audi',
				model: 'audi-r8',
				price: 208100,
				countInStock: 1,
				rating: 5,
				reviewAmount: 6
			}
		]
	},
	{
		_id: '4',
		cars: [
			{
				_id: 19,
				name: 'Mclaren 540C',
				image: '/images/540C.jpg',
				description:
					'This car goes from 0-124mph in a scarcely believable 10.5 seconds, nothing prepares you for the thrill of the 540C’s race-bred dynamics. With a chassis honed to create an unrivalled balance, the Sports Series is as at home in the city as it is on the limits of the racetrack.',
				category: 'vehicles',
				brand: 'mclaren',
				model: 'mclaren-540c',
				price: 325000,
				countInStock: 0,
				rating: 0,
				reviewAmount: 0
			},
			{
				_id: 20,
				name: 'Mclaren 720S Spider',
				image: '/images/720s.jpg',
				description:
					"The 720S Spider is a full-throttle supercar with a retractable roof – all in one beautifully honed package. They say beauty is in the eye of the beholder. At McLaren, we believe it's the elegance of an efficient design. That's why nothing about the 720S Spider is there for any reason other than out-and-out performance.",
				category: 'vehicles',
				brand: 'mclaren',
				model: 'mclaren-720s',
				price: 350300,
				countInStock: 1,
				rating: 5,
				reviewAmount: 1
			},
			{
				_id: 21,
				name: 'Mclaren Senna',
				image: '/images/senna.jpg',
				description:
					"The Mclaren Senna is the personification of Mclaren's DNA at its most extreme, creating the purest connection between car and driver. It is the most track-focused road car Mclaren has ever built, and it will set the fastest lap times of any McLaren to date.",
				category: 'vehicles',
				brand: 'mclaren',
				model: 'mclaren-senna',
				price: 750500,
				countInStock: 1,
				rating: 5,
				reviewAmount: 1
			}
		]
	},
	{
		_id: '5',
		cars: [
			{
				_id: 22,
				name: 'Ferrari 488 GTB',
				image: '/images/488gtb.jpg',
				description:
					'The 488 GTB is powered by a 3,902 cc (3.9 L; 238.1 cu in) (488 cc per cylinder, thus the name) all-aluminum dry sump unit of the Ferrari F154 V8 engine family. The engine generates a power output of 670 PS (493 kW; 661 hp) at 8,000 rpm and 760 N⋅m (561 lb⋅ft) of torque at 3,000 rpm.',
				category: 'vehicles',
				brand: 'ferrari',
				model: 'ferrari-488gtb',
				price: 262800,
				countInStock: 1,
				rating: 5,
				reviewAmount: 1
			},
			{
				_id: 23,
				name: 'Ferrari 458 Spider',
				image: '/images/458spider.jpg',
				description:
					'The Petrol engine is 4497 cc. It is available with the Automatic transmission. Depending upon the variant and fuel type the 458 Spider has a mileage of 5.5 kmpl. The 458 Spider is a 2 seater and has length of 4527mm, width of 1937mm and a wheelbase of 2650mm.',
				category: 'vehicles',
				brand: 'ferrari',
				model: 'ferrari-458',
				price: 263550,
				countInStock: 1,
				rating: 0,
				reviewAmount: 0
			},
			{
				_id: 24,
				name: 'Ferrari 812 GTS',
				image: '/images/812gts.jpg',
				description:
					"'Staunch' would be the best word to describe the Ferrari 812 GTS; it's a gorgeously mean-looking thing that makes its presence known on the road. It's quite a lengthy car at 184.8 inches and is 77.6 inches wide. The 812 GTS sits 50.3 inches off the ground and rolls on a 107.1-inch wheelbase.",
				category: 'vehicles',
				brand: 'ferrari',
				model: 'ferrari-812-gts',
				price: 380000,
				countInStock: 1,
				rating: 5,
				reviewAmount: 1
			}
		]
	},
	{
		_id: '6',
		cars: [
			{
				_id: 25,
				name: 'Lamborghini Urus',
				image: '/images/urus.jpg',
				description:
					'Lamborghini Urus is the first Super Sport Utility Vehicle in the world to merge the soul of a super sports car with the functionality of an SUV. Powered by a 4.0-liter twin-turbo V8 engine producing 650 CV and 850 Nm of torque, Urus accelerates from 0 to 62 mph in 3.6 seconds and reaches a top speed of 190 mph.',
				category: 'vehicles',
				brand: 'lamborghini',
				model: 'lamborghini-urus',
				price: 210500,
				countInStock: 1,
				rating: 0,
				reviewAmount: 0
			},
			{
				_id: 26,
				name: 'Lamborghini Huracan',
				image: '/images/huracan.jpg',
				description:
					'The Huracan LP 610-4, in both Coupe and new soft-top Spyder versions, replaces the Gallardo as Lamborghini’s “entry-level” super-sports car. Both are powered by a 5.2-litre V10 making 602 horsepower and 413 pound-feet of torque. A seven-speed dual-clutch gearbox directs power to all four wheels. Understatedly, the two-seat sports car is quick; zero to 100 kilometres an hour takes just 3.2 seconds (3.4 seconds for the Spyder), topping out at more than 320 km/h.',
				category: 'vehicles',
				brand: 'lamborghini',
				model: 'lamborghini-huracan',
				price: 320000,
				countInStock: 3,
				rating: 5,
				reviewAmount: 1
			},
			{
				_id: 27,
				name: 'Lamborghini Aventador',
				image: '/images/aventador.jpg',
				description:
					'The Petrol engine is 6498 cc. It is available with the Automatic transmission. Depending upon the variant and fuel type the Aventador has a mileage of 5.0 to 7.69 kmpl. The Aventador is a 2 seater and has length of 4843 mm, width of 2273 mm and a wheelbase of 2700mm.',
				category: 'vehicles',
				brand: 'lamborghini',
				model: 'lamborghini-aventador',
				price: 417800,
				countInStock: 3,
				rating: 4.5,
				reviewAmount: 3
			}
		]
	}
]

export default shopData
