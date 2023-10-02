import { type BookingModel } from '../../../models/request/BookingModel'
import { type BookingResponse } from '../../../models/responses/BookingIdResponse'
import { BookingService } from '../../../services/BookingService'

describe.only('Delete Booking', () => {
  const bookingService = new BookingService()
  let bookingId: number

  beforeAll(async () => {
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
    bookingId = response.data.bookingid

    await bookingService.Authenticate()
  })

  it('@DeleteBooking - Delete Booking', async () => {
    const response = await bookingService.deleteBooking<BookingModel>(
      bookingId
    )
    expect(response.status).toEqual(201)
    expect(response.data).toEqual("Created")
  })
  it('@DeleteBooking - Delete Booking - Unauthorized', async () => {
    const response = await bookingService.deleteBooking<BookingModel>(
      bookingId,
      {}
    )
    expect(response.status).toEqual(403)
  })
})
