
import { useContext, useState } from "react";
import Button from "../../../../components/shared/Button/Button";
import DatePicker from "../Calender/DatePicker";
import { AuthContext } from "../../../../providers/AuthProvider";
import BookingModal from "../../../../components/Modal/BookingModal";
import { formatDistance } from "date-fns";
import { BookRoom, updateStatus } from "../../../../api/booking";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const RoomReservation = ({ roomData }) => {
    const { user, role } = useContext(AuthContext)
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate();
    const totalPrice = parseFloat(formatDistance(new Date(roomData.to), new Date(roomData.from)).split(' ')[0]) * roomData.price

    const [value, setValue] = useState({
        startDate: new Date(roomData?.from),
        endDate: new Date(roomData?.to)
    })
    const [booking, setBooking] = useState({
        guest: { name: user.displayName, email: user.email, image: user.photoURL },
        host: roomData.host.email,
        location: roomData.location,
        price: totalPrice,
        title: roomData.title,
        to: value.endDate,
        from: value.startDate,
        roomID: roomData._id,
        image:roomData.image
    })

    const handleDate = (range) => {
        value([...value])
    }
    // const handleModal = () => {  
    //     BookRoom(booking)
    //         .then(() => {
    //             updateStatus(roomData._id, true)
    //                 .then(() => {
    //                     toast.success("Booked successfully")
    //                     navigate('/dashboard/my-bookings')
    //                     closeModal();
    //                 })
    //                 .catch(err => console.log(err))

    //         })
    //         .catch(err => console.log(err))
    // }

    const closeModal = () => {
        setIsOpen(false)
    }

    return (
        <div className=" bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden ">
            <div className=" flex flex-row items-center gap-1 p-4">
                <div className=" text-2xl font-semibold">$ {roomData.price}</div>
                <div className="font-light font-neutral-600">night</div>
            </div>
            <hr />
            <DatePicker handleDate={handleDate} value={value}></DatePicker>
            <hr />
            <div className="p-4">
                <Button disabled={roomData.host.email === user.email || roomData.booked} onClick={() => setIsOpen(true)} label={"Reserve"}></Button>
            </div>
            <hr />
            <div className="   p-4 flex flex-row items-center justify-between font-semibold text-lg">
                <div>Total</div>
                <div>$ {totalPrice}</div>
            </div>
            <BookingModal  closeModal={closeModal} isOpen={isOpen} bookingInfo={booking}></BookingModal>
        </div>
    );
};

export default RoomReservation;


