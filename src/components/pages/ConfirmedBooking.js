import Main from "../layout/Main";
import '../../css/confirmed_booking.css';


export default function ConfirmedBooking() {
    return (
        <Main>
            <section className="confirmed-booking">
                <div className="container">
                    <p className="title">Booking Confirmed!!!</p>
                    <p className="subtitle">Please provide your name and contact number or email address at the reception upon arrival</p>
                    <p className="subtitle">We are excited to serve you</p>
                </div>
            </section>
        </Main>
    )
}