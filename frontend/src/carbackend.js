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
				model: 'BMW M8',
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
				model: 'BMW M6',
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
				model: 'BMW M6',
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
				model: 'BMW M4',
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
				brand: 'BMW M3',
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
				brand: 'BMW M2',
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
				id: 10,
				name: 'Adidas NMD',
				imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
				price: 220
			},
			{
				id: 11,
				name: 'Adidas Yeezy',
				imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
				price: 280
			},
			{
				id: 12,
				name: 'Black Converse',
				imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
				price: 110
			},
			{
				id: 13,
				name: 'Nike White AirForce',
				imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
				price: 160
			},
			{
				id: 14,
				name: 'Nike Red High Tops',
				imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
				price: 160
			},
			{
				id: 15,
				name: 'Nike Brown High Tops',
				imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
				price: 160
			}
		]
	},

	{
		_id: '3',
		audi: [
			{
				id: 23,
				name: 'Blue Tanktop',
				imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
				price: 25
			},
			{
				id: 24,
				name: 'Floral Blouse',
				imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
				price: 20
			},
			{
				id: 25,
				name: 'Floral Dress',
				imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
				price: 80
			},
			{
				id: 26,
				name: 'Red Dots Dress',
				imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
				price: 80
			},
			{
				id: 27,
				name: 'Striped Sweater',
				imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
				price: 45
			},
			{
				id: 28,
				name: 'Yellow Track Suit',
				imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
				price: 135
			}
		]
	},
	{
		_id: '4',
		mclaren: [
			{
				id: 30,
				name: 'Camo Down Vest',
				imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
				price: 325
			},
			{
				id: 31,
				name: 'Floral T-shirt',
				imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
				price: 20
			},
			{
				id: 32,
				name: 'Black & White Longsleeve',
				imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
				price: 25
			},
			{
				id: 33,
				name: 'Pink T-shirt',
				imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
				price: 25
			},
			{
				id: 34,
				name: 'Jean Long Sleeve',
				imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
				price: 40
			},
			{
				id: 35,
				name: 'Burgundy T-shirt',
				imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
				price: 25
			}
		]
	},
	{
		_id: '5',
		ferrari: [
			{
				id: 30,
				name: 'Camo Down Vest',
				imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
				price: 325
			},
			{
				id: 31,
				name: 'Floral T-shirt',
				imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
				price: 20
			},
			{
				id: 32,
				name: 'Black & White Longsleeve',
				imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
				price: 25
			},
			{
				id: 33,
				name: 'Pink T-shirt',
				imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
				price: 25
			},
			{
				id: 34,
				name: 'Jean Long Sleeve',
				imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
				price: 40
			},
			{
				id: 35,
				name: 'Burgundy T-shirt',
				imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
				price: 25
			}
		]
	},
	{
		_id: '6',
		lamborghini: [
			{
				id: 30,
				name: 'Camo Down Vest',
				imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
				price: 325
			},
			{
				id: 31,
				name: 'Floral T-shirt',
				imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
				price: 20
			},
			{
				id: 32,
				name: 'Black & White Longsleeve',
				imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
				price: 25
			},
			{
				id: 33,
				name: 'Pink T-shirt',
				imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
				price: 25
			},
			{
				id: 34,
				name: 'Jean Long Sleeve',
				imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
				price: 40
			},
			{
				id: 35,
				name: 'Burgundy T-shirt',
				imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
				price: 25
			}
		]
	}
]

export default shopData
