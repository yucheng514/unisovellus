/**
 * Mocking client-server processing
 */


const data = [{
		'id': 1,
		'title': 'iPad 4',
		'price': 2500,
	},
	{
		'id': 2,
		'title': 'T-Shirt',
		'price': 100,
	},
	{
		'id': 3,
		'title': 'CD',
		'price': 25,
	}
]

export default {
  getGoodsList (callback) {
    setTimeout(() => callback(data), 100)
  }
}