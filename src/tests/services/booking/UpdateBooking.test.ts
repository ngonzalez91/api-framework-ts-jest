import { type BookingModel } from '../../../models/request/BookingModel'
import { type BookingResponse } from '../../../models/responses/BookingIdResponse'
import { BookingService } from '../../../services/BookingService'

describe.only('Add Booking', () => {
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

  it('@Smoke - Update Booking', async () => {
    const response = await bookingService.updateBooking<BookingModel>(
      bookingId,
      {
        firstname: 'John',
        lastname: 'Winter',
        totalprice: 500,
        depositpaid: false,
        bookingdates: {
          checkin: '2024-03-01',
          checkout: '2024-04-01'
        },
        additionalneeds: 'Lunch'
      }
    )
    expect(response.status).toEqual(200)
    expect(response.data.firstname).toEqual('John')
    expect(response.data.lastname).toEqual('Winter')
    expect(response.data.totalprice).toEqual(500)
    expect(response.data.depositpaid).toBeFalsy()
    expect(response.data.bookingdates?.checkin).toEqual('2024-03-01')
    expect(response.data.bookingdates?.checkout).toEqual('2024-04-01')
    expect(response.data.additionalneeds).toEqual('Lunch')
  })

  it('@Regression - Update Booking - Unauthorized', async () => {
    const response = await bookingService.updateBooking<BookingResponse>(
      bookingId,
      {
        firstname: 'John',
        lastname: 'Winter',
        totalprice: 500,
        depositpaid: true,
        bookingdates: {
          checkin: '2024-01-01',
          checkout: '2024-02-01'
        },
        additionalneeds: 'Lunch'
      },
      {}
    )
    expect(response.status).toEqual(403)
  })
})
