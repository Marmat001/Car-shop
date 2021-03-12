import React from 'react'
import { Document, Page, Text, StyleSheet } from '@react-pdf/renderer'
import { Table, TableHeader, TableCell, TableBody, DataTableCell } from '@david.kucsai/react-pdf-table'

const Invoice = ({ order }) => (
	<Document>
		<Page style={styles.body}>
			<Text style={styles.header} fixed>
				~ {new Date().toLocaleString()} ~
			</Text>
			<Text style={styles.title}>Order Invoice</Text>
			<Text style={styles.author}>Vroom</Text>
			<Text style={styles.subtitle}>Order Summary</Text>

			<Table>
				<TableHeader>
					<TableCell>Title</TableCell>
					<TableCell>Price</TableCell>
					<TableCell>Quantity</TableCell>
					<TableCell>Brand</TableCell>
					<TableCell>Color</TableCell>
				</TableHeader>
			</Table>

			<Table data={order.orderItems}>
				<TableBody>
					<DataTableCell getContent={(p) => p.car.charAt(0).toUpperCase() + p.car.slice(1)} />
					<DataTableCell getContent={(p) => `$${p.price}`} />
					<DataTableCell getContent={(p) => p.qty} />
					<DataTableCell getContent={(p) => p.brand.charAt(0).toUpperCase() + p.brand.slice(1)} />
					<DataTableCell getContent={(p) => p.color} />
				</TableBody>
			</Table>

			<Text style={styles.text}>
				<Text>
					Date: {'                                '}
					{`${order.paidAt.substring(0, 10)} ${order.paidAt.substring(11, 19)}`}
				</Text>
				{'\n'}
				<Text>
					Order Id: {'                          '}
					{order._id}
				</Text>
				{'\n'}
				<Text>
					Order Status: {'                  '}
					{order.isDelivered === true ? 'Processed' : 'Not Processed'}
				</Text>
				{'\n'}
				<Text>
					Total Amount: {'                  '}
					{`$${order.totalPrice.toFixed()}`}
				</Text>
			</Text>

			<Text style={styles.text}>
				<Text>
					Shipping Address: {'           '}
					{order.shippingAddress.address}
				</Text>
				{'\n'}
				<Text>
					City: {'                                 '}
					{order.shippingAddress.city}
				</Text>
				{'\n'}
				<Text>
					Country: {'                          '}
					{order.shippingAddress.country}
				</Text>
				{'\n'}
				<Text>
					Postal Code: {'                   '}
					{order.shippingAddress.postalCode}
				</Text>
			</Text>

			<Text style={styles.text}>
				<Text>
					Name: {'                             '}
					{order.user.name}
				</Text>
				{'\n'}
				<Text>
					Email: {'                              '}
					{order.user.email}
				</Text>
			</Text>

			<Text style={styles.footer}> ~ Thank you for shopping with us ~ </Text>
		</Page>
	</Document>
)

const styles = StyleSheet.create({
	body: {
		paddingTop: 35,
		paddingBottom: 65,
		paddingHorizontal: 35
	},
	title: {
		fontSize: 24,
		textAlign: 'center'
	},
	author: {
		fontSize: 12,
		textAlign: 'center',
		marginBottom: 40
	},
	subtitle: {
		fontSize: 18,
		margin: 12
	},
	text: {
		margin: 12,
		fontSize: 14,
		textAlign: 'justify'
	},
	image: {
		marginVertical: 15,
		marginHorizontal: 100
	},
	header: {
		fontSize: 12,
		marginBottom: 20,
		textAlign: 'center',
		color: 'grey'
	},
	footer: {
		padding: '100px',
		fontSize: 12,
		marginBottom: 20,
		textAlign: 'center',
		color: 'grey'
	},
	pageNumber: {
		position: 'absolute',
		fontSize: 12,
		bottom: 30,
		left: 0,
		right: 0,
		textAlign: 'center',
		color: 'grey'
	}
})

export default Invoice
