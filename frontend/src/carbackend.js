const shopData = [
	{
		_id: '1',
		bmw: [
			{
				_id: '1',
				name: 'BMW M8',
				image: '/images/m8.jpg',
				description:
					'BMW M8 Gran Coupe. The M8 Gran Coupe is powered by a lusty twin-turbo 4.4-liter V-8 that makes 600 horsepower on the regular model and 617 on the Competition version. Both M8s send that power to all four wheels via an eight-speed automatic transmission.',
				category: 'vehicles',
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
				price: 128695,
				countInStock: 8,
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
				price: 106750,
				countInStock: 5,
				rating: 5,
				reviewAmount: 14
			},
			{
				_id: '4',
				name: 'BMW M4',
				image: '/images/m4.jpg',
				description:
					'BMW M4 F83 Coupe. The finely engineered 3.0-liter BMW M TwinPower Turbo inline-6 engine in the high-performance M4 Coupe can unleash intense power – up to 503 horsepower in the Competition model, taking you from 0-60 mph in 3.8 seconds.',
				category: 'vehicles',
				price: 77600,
				countInStock: 5,
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
				price: 65990,
				countInStock: 10,
				rating: 5,
				numReviews: 18
			},
			{
				_id: '6',
				name: 'BMW M2',
				image: '/images/m2.jpg',
				description:
					"BMW M2 Competition Coupe. A true driver's machine, this monster combines the 2 Series' legacy of responsive handling with the legendary performance of M. The Active M Differential provides an optimum amount of locking between the rear wheels, for unmatched agility and constant stability through sharp corners.",
				category: 'vehicles',
				price: 55990,
				countInStock: 10,
				rating: 4,
				numReviews: 12
			}
		]
	},
	{
		_id: '2',
		mercedes: [
			{
				_id: 7,
				name: 'Mercedes AMG GT63s',
				image: '/images/gt63s.jpg',
				description:
					'The Mercedes-AMG GT 63 is available in two variants: GT 63 and GT 63 S. The former is the base model, fitted with a 4.0-liter twin-turbo V8 producing 577 hp and 590 lb-ft of torque. A nine-speed auto and 4Matic+ all-wheel-drive are your only options here, but a rear-wheel-drive drift mode is available.',
				category: 'vehicles',
				price: 161900,
				countInStock: 3,
				rating: 5,
				numReviews: 39
			},
			{
				_id: 8,
				name: 'Mercedes AMG CLS 63',
				image: '/images/cls.jpg',
				description:
					'Under the hood is a 5.5-liter twin-turbo V-8 that makes a beastly 577 hp and 590 lb-ft with a seven-speed automatic. All-wheel drive (4Matic) is standard, as is an adaptive sport suspension.',
				model: 'Mercedes',
				price: 108900,
				countInStock: 10,
				rating: 4,
				numReviews: 12
			},
			{
				_id: 9,
				name: 'Mercedes AMG S63',
				image: '/images/s63.jpg',
				description:
					'The S63 Coupe is powered by an individually handcrafted 4.0-liter bi-turbo V8 engine, which in S63 guise, develops 603 hp between 5,500 and 6,000 rpm and a massive 664 lb-ft of torque available between 2,750 and 4,500 rpm.',
				category: 'vehicles',
				price: 171400,
				countInStock: 10,
				rating: 5,
				numReviews: 12
			},
			{
				_id: 10,
				name: 'Mercedes AMG E63s',
				image: '/images/e63s.jpg',
				description:
					"The E63 S's powerful twin-turbo 603-hp V-8 engine is a mild-mannered partner and a maniacal monster all wrapped up into one. Left in Comfort mode, the engine and nine-speed automatic transmission react with stoicism and smoothness. Select any of the sportier drive modes and the powertrain unleashes relentless fury.",
				category: 'vehicles',
				price: 107500,
				countInStock: 1,
				rating: 5,
				numReviews: 28
			},
			{
				_id: 11,
				name: 'Mercedes AMG C63s',
				image: '/images/c63s.jpg',
				description:
					'The Mercedes-AMG C63 and C63 S have a hand-built, twin-turbo 4.0-liter V-8 engine. In the C63, it makes 469 horsepower and 479 lb-ft of torque. The C63 S ups the performance ante with 503 horsepower and 516 lb-ft. Both engines use a nine-speed automatic with rear-wheel drive.',
				category: 'vehicles',
				price: 78250,
				countInStock: 5,
				rating: 4.5,
				numReviews: 12
			},
			{
				_id: 12,
				name: 'Mercedes AMG G63',
				image: '/images/g63.jpg',
				description:
					'Mercedes-AMG G63 comes with a twin-turbocharged 4.0-liter V-8 engine that makes 577 horsepower and 627 lb-ft of torque. A nine-speed automatic gearbox with steering-wheel-mounted paddle shifters sends all that power to the all-wheel-drive system.',
				category: 'vehicles',
				price: 156450,
				countInStock: 10,
				rating: 3.5,
				numReviews: 3
			}
		]
	},

	{
		_id: '3',
		audi: [
			{
				_id: 13,
				name: 'Audi RS7',
				image: '/images/rs7.jpg',
				description:
					'Power comes from a twin-turbo 4.0-liter V-8 that pairs with a 48-volt hybrid system, eight-speed automatic transmission, and all-wheel drive. The RS7 makes 591 horsepower and 590 lb-ft of torque, which in our testing catapulted the girthy four-door from zero to 60 mph in just 3.0 seconds.',
				category: 'vehicles',
				price: 114000,
				countInStock: 6,
				rating: 5,
				numReviews: 15
			},
			{
				_id: 14,
				name: 'Audi RS6',
				image: '/images/rs6.jpg',
				description: '',
				category: 'vehicles',
				price: 100000,
				countInStock: 8,
				rating: 5,
				numReviews: 3
			},
			{
				_id: 15,
				name: 'Audi RS5',
				image: '/images/rs5.jpg',
				description: '',
				category: 'vehicles',
				price: 74200,
				countInStock: 5,
				rating: 3.5,
				numReviews: 2
			},
			{
				_id: 16,
				name: 'Audi RS4',
				image: '/images/rs4.jpg',
				description: '',
				category: 'vehicles',
				price: 67625,
				countInStock: 2,
				rating: 4,
				numReviews: 8
			},
			{
				_id: 17,
				name: 'Audi RS3',
				image: '/images/rs3.jpg',
				description: '',
				category: 'vehicles',
				price: 60570,
				countInStock: 2,
				rating: 4.5,
				numReviews: 3
			},
			{
				_id: 18,
				name: 'Audi R8',
				image: '/images/r8.jpg',
				description: '',
				category: 'vehicles',
				price: 208100,
				countInStock: 1,
				rating: 5,
				numReviews: 6
			}
		]
	},
	{
		_id: '4',
		mclaren: [
			{
				_id: 19,
				name: 'Camo Down Vest',
				image: '/images/g63.jpg',
				description:
					'Mercedes-AMG G63 comes with a twin-turbocharged 4.0-liter V-8 engine that makes 577 horsepower and 627 lb-ft of torque. A nine-speed automatic gearbox with steering-wheel-mounted paddle shifters sends all that power to the all-wheel-drive system.',
				category: 'vehicles',
				price: 156450,
				countInStock: 10,
				rating: 3.5,
				numReviews: 3
			},
			{
				_id: 20,
				name: 'Floral T-shirt',
				image: '/images/g63.jpg',
				description:
					'Mercedes-AMG G63 comes with a twin-turbocharged 4.0-liter V-8 engine that makes 577 horsepower and 627 lb-ft of torque. A nine-speed automatic gearbox with steering-wheel-mounted paddle shifters sends all that power to the all-wheel-drive system.',
				category: 'vehicles',
				price: 156450,
				countInStock: 10,
				rating: 3.5,
				numReviews: 3
			},
			{
				_id: 21,
				name: 'Black & White Longsleeve',
				image: '/images/g63.jpg',
				description:
					'Mercedes-AMG G63 comes with a twin-turbocharged 4.0-liter V-8 engine that makes 577 horsepower and 627 lb-ft of torque. A nine-speed automatic gearbox with steering-wheel-mounted paddle shifters sends all that power to the all-wheel-drive system.',
				category: 'vehicles',
				price: 156450,
				countInStock: 10,
				rating: 3.5,
				numReviews: 3
			},
			{
				_id: 22,
				name: 'Pink T-shirt',
				image: '/images/g63.jpg',
				description:
					'Mercedes-AMG G63 comes with a twin-turbocharged 4.0-liter V-8 engine that makes 577 horsepower and 627 lb-ft of torque. A nine-speed automatic gearbox with steering-wheel-mounted paddle shifters sends all that power to the all-wheel-drive system.',
				category: 'vehicles',
				price: 156450,
				countInStock: 10,
				rating: 3.5,
				numReviews: 3
			},
			{
				_id: 23,
				name: 'Jean Long Sleeve',
				image: '/images/g63.jpg',
				description:
					'Mercedes-AMG G63 comes with a twin-turbocharged 4.0-liter V-8 engine that makes 577 horsepower and 627 lb-ft of torque. A nine-speed automatic gearbox with steering-wheel-mounted paddle shifters sends all that power to the all-wheel-drive system.',
				category: 'vehicles',
				price: 156450,
				countInStock: 10,
				rating: 3.5,
				numReviews: 3
			},
			{
				_id: 24,
				name: 'Burgundy T-shirt',
				image: '/images/g63.jpg',
				description:
					'Mercedes-AMG G63 comes with a twin-turbocharged 4.0-liter V-8 engine that makes 577 horsepower and 627 lb-ft of torque. A nine-speed automatic gearbox with steering-wheel-mounted paddle shifters sends all that power to the all-wheel-drive system.',
				category: 'vehicles',
				price: 156450,
				countInStock: 10,
				rating: 3.5,
				numReviews: 3
			}
		]
	},
	{
		_id: '5',
		ferrari: [
			{
				_id: 25,
				name: 'Camo Down Vest',
				image: '/images/g63.jpg',
				description:
					'Mercedes-AMG G63 comes with a twin-turbocharged 4.0-liter V-8 engine that makes 577 horsepower and 627 lb-ft of torque. A nine-speed automatic gearbox with steering-wheel-mounted paddle shifters sends all that power to the all-wheel-drive system.',
				category: 'vehicles',
				price: 156450,
				countInStock: 10,
				rating: 3.5,
				numReviews: 3
			},
			{
				_id: 26,
				name: 'Floral T-shirt',
				image: '/images/g63.jpg',
				description:
					'Mercedes-AMG G63 comes with a twin-turbocharged 4.0-liter V-8 engine that makes 577 horsepower and 627 lb-ft of torque. A nine-speed automatic gearbox with steering-wheel-mounted paddle shifters sends all that power to the all-wheel-drive system.',
				category: 'vehicles',
				price: 156450,
				countInStock: 10,
				rating: 3.5,
				numReviews: 3
			},
			{
				_id: 27,
				name: 'Black & White Longsleeve',
				image: '/images/g63.jpg',
				description:
					'Mercedes-AMG G63 comes with a twin-turbocharged 4.0-liter V-8 engine that makes 577 horsepower and 627 lb-ft of torque. A nine-speed automatic gearbox with steering-wheel-mounted paddle shifters sends all that power to the all-wheel-drive system.',
				category: 'vehicles',
				price: 156450,
				countInStock: 10,
				rating: 3.5,
				numReviews: 3
			},
			{
				_id: 28,
				name: 'Pink T-shirt',
				image: '/images/g63.jpg',
				description:
					'Mercedes-AMG G63 comes with a twin-turbocharged 4.0-liter V-8 engine that makes 577 horsepower and 627 lb-ft of torque. A nine-speed automatic gearbox with steering-wheel-mounted paddle shifters sends all that power to the all-wheel-drive system.',
				category: 'vehicles',
				price: 156450,
				countInStock: 10,
				rating: 3.5,
				numReviews: 3
			},
			{
				_id: 29,
				name: 'Jean Long Sleeve',
				image: '/images/g63.jpg',
				description:
					'Mercedes-AMG G63 comes with a twin-turbocharged 4.0-liter V-8 engine that makes 577 horsepower and 627 lb-ft of torque. A nine-speed automatic gearbox with steering-wheel-mounted paddle shifters sends all that power to the all-wheel-drive system.',
				category: 'vehicles',
				price: 156450,
				countInStock: 10,
				rating: 3.5,
				numReviews: 3
			},
			{
				_id: 30,
				name: 'Burgundy T-shirt',
				image: '/images/g63.jpg',
				description:
					'Mercedes-AMG G63 comes with a twin-turbocharged 4.0-liter V-8 engine that makes 577 horsepower and 627 lb-ft of torque. A nine-speed automatic gearbox with steering-wheel-mounted paddle shifters sends all that power to the all-wheel-drive system.',
				category: 'vehicles',
				price: 156450,
				countInStock: 10,
				rating: 3.5,
				numReviews: 3
			}
		]
	},
	{
		_id: '6',
		lamborghini: [
			{
				_id: 31,
				name: 'Camo Down Vest',
				image: '/images/g63.jpg',
				description:
					'Mercedes-AMG G63 comes with a twin-turbocharged 4.0-liter V-8 engine that makes 577 horsepower and 627 lb-ft of torque. A nine-speed automatic gearbox with steering-wheel-mounted paddle shifters sends all that power to the all-wheel-drive system.',
				category: 'vehicles',
				price: 156450,
				countInStock: 10,
				rating: 3.5,
				numReviews: 3
			},
			{
				_id: 32,
				name: 'Floral T-shirt',
				image: '/images/g63.jpg',
				description:
					'Mercedes-AMG G63 comes with a twin-turbocharged 4.0-liter V-8 engine that makes 577 horsepower and 627 lb-ft of torque. A nine-speed automatic gearbox with steering-wheel-mounted paddle shifters sends all that power to the all-wheel-drive system.',
				category: 'vehicles',
				price: 156450,
				countInStock: 10,
				rating: 3.5,
				numReviews: 3
			},
			{
				_id: 33,
				name: 'Black & White Longsleeve',
				image: '/images/g63.jpg',
				description:
					'Mercedes-AMG G63 comes with a twin-turbocharged 4.0-liter V-8 engine that makes 577 horsepower and 627 lb-ft of torque. A nine-speed automatic gearbox with steering-wheel-mounted paddle shifters sends all that power to the all-wheel-drive system.',
				category: 'vehicles',
				price: 156450,
				countInStock: 10,
				rating: 3.5,
				numReviews: 3
			},
			{
				_id: 34,
				name: 'Pink T-shirt',
				image: '/images/g63.jpg',
				description:
					'Mercedes-AMG G63 comes with a twin-turbocharged 4.0-liter V-8 engine that makes 577 horsepower and 627 lb-ft of torque. A nine-speed automatic gearbox with steering-wheel-mounted paddle shifters sends all that power to the all-wheel-drive system.',
				category: 'vehicles',
				price: 156450,
				countInStock: 10,
				rating: 3.5,
				numReviews: 3
			},
			{
				_id: 35,
				name: 'Jean Long Sleeve',
				image: '/images/g63.jpg',
				description:
					'Mercedes-AMG G63 comes with a twin-turbocharged 4.0-liter V-8 engine that makes 577 horsepower and 627 lb-ft of torque. A nine-speed automatic gearbox with steering-wheel-mounted paddle shifters sends all that power to the all-wheel-drive system.',
				category: 'vehicles',
				price: 156450,
				countInStock: 10,
				rating: 3.5,
				numReviews: 3
			},
			{
				_id: 36,
				name: 'Burgundy T-shirt',
				image: '/images/g63.jpg',
				description:
					'Mercedes-AMG G63 comes with a twin-turbocharged 4.0-liter V-8 engine that makes 577 horsepower and 627 lb-ft of torque. A nine-speed automatic gearbox with steering-wheel-mounted paddle shifters sends all that power to the all-wheel-drive system.',
				category: 'vehicles',
				price: 156450,
				countInStock: 10,
				rating: 3.5,
				numReviews: 3
			}
		]
	}
]

export default shopData
