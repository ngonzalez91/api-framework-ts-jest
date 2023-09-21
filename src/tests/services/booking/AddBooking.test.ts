import { type BookingResponse } from '../../../models/responses/BookingIdResponse'
import { BookingService } from '../../../services/BookingService'

describe('Add Booking', () => {
  const bookingService = new BookingService()

  it('@Smoke - Add Booking', async () => {
    const response = await bookingService.addBooking<BookingResponse>({
      firstname: 'John',
      lastname: 'Snow',
      totalprice: 1000,
      depositpaid: true,
      bookingdates: {
        checkin: '2024-01-01',
        checkout: '2024-02-01'
      },
      additionalneeds: 'Breakfast'
    })
    expect(response.status).toEqual(200)
    expect(response.data.bookingid).not.toBe('')
    expect(response.data.booking.firstname).toEqual('John')
    expect(response.data.booking.lastname).toEqual('Snow')
    expect(response.data.booking.totalprice).toEqual(1000)
    expect(response.data.booking.depositpaid).toBeTruthy()
    expect(response.data.booking.bookingdates?.checkin).toEqual('2024-01-01')
    expect(response.data.booking.bookingdates?.checkout).toEqual('2024-02-01')
    expect(response.data.booking.additionalneeds).toEqual('Breakfast')
  })

  it('@Smoke - Add Booking - No Firstname', async () => {
    const response = await bookingService.addBooking<BookingResponse>({
      lastname: 'Snow',
      totalprice: 1000,
      depositpaid: true,
      bookingdates: {
        checkin: '2024-01-01',
        checkout: '2024-02-01'
      },
      additionalneeds: 'Breakfast'
    })
    expect(response.status).toEqual(500)
  })
})
