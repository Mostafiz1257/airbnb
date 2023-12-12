import { useEffect } from "react";
import { useState } from "react";
import Container from "../../../components/shared/Container";
import Card from "./Card";
import Loader from "../../../components/shared/Loader/Loader";
import { useSearchParams } from "react-router-dom";
import Heading from "../../../components/shared/Heading/Heading";

const Rooms = () => {
    const [rooms, setRooms] = useState([])
    const [loading, setLoading] = useState(false)
    const [params, setParams] = useSearchParams();
    const category = params.get("category")
    console.log("initial category", category);

    useEffect(() => {
        setLoading(true)
        fetch("/rooms.json")
            .then(res => res.json())
            .then(data => {
               
                    if (category) {
                        const filteredData = data.filter(room => room.category === category)
                        console.log(filteredData);
                        setRooms(filteredData)
                    }
                    else {
                        setRooms(data)
                    }
                setLoading(false)
            })
            .catch(err => console.log(err.message))
    }, [category])

    if (loading) {
        return <Loader></Loader>
    }
    return (
        <div>
            <Container>
                { rooms && rooms.length>0 ? 
                
                <div className=" mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-8">
                {
                    rooms.map((room, index) => <Card room={room} key={index}></Card>)
                }
            </div>
            :
        <div className=" pt-12">
<Heading title={`No room available in this ${category} category`} subtitle={"Please select another type hotel"} center={true}></Heading>
        </div>
            }
            </Container>

        </div>
    );
};

export default Rooms;