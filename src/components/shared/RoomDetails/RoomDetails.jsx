import { useLoaderData } from "react-router-dom";
import Header from "../../../Page/Home/Rooms/Header/Header";
import RoomInfo from "../../../Page/Home/Rooms/RoomInfo/RoomInfo";
import RoomReservation from "../../../Page/Home/Rooms/RoomReservation/RoomReservation";
import Container from "../Container";


const RoomDetails = () => {
    const roomData = useLoaderData();
    return (
        <>
            <Container>
                <div className="pt-[100px]">
                    <Header roomData={roomData}></Header>
                    <div className=" grid grid-cols-1 md:grid-cols-7 md:gap-6 mt-12">
                        <RoomInfo roomData={roomData}></RoomInfo>
                    <div className="order-first md:order-last md:col-span-3">
                    <RoomReservation roomData={roomData}></RoomReservation>
                    </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default RoomDetails;