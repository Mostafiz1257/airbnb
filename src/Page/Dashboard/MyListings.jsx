import { useContext, useEffect, useState } from "react"
// import { postRoomByEmail } from "../../api/addRoom"
import { AuthContext } from "../../providers/AuthProvider"
import RoomDataRow from "../../components/Dashboard/RoomDataRow"
import EmptyState from "../../components/shared/EmptyState"
import useAxiosSecure from "../../hooks/useAxiosSuecre"
import { useQuery } from "@tanstack/react-query"


const MyListings = () => {
    const [ axiosSecure ] = useAxiosSecure()
    const { user } = useContext(AuthContext)
    // const [rooms, setRooms] = useState([])
    // const fetchRoom = () => {
    //     // postRoomByEmail(user?.email)
    //     //     .then(data => {
    //     //         setRooms(data)
    //     //         console.log(data);
    //     //     })

    //     axiosSecure.get(`/rooms/${user?.email}`)
    //         .then(data => {
    //             setRooms(data.data)
    //             console.log(data.data);
    //         })
    // }
    // useEffect(() => {
    //     fetchRoom()
    // }, [user])

//we can also use enable:!loading ------>
    const {data:rooms=[],refetch} = useQuery({ queryKey: ["rooms", user?.email], queryFn: async ()=>{
        const res = await axiosSecure.get(`/rooms/${user?.email}`)
        return res.data;
       
    }})

    return (
        <>
            {rooms && Array.isArray(rooms) && rooms.length > 0 ? <div className='container mx-auto px-4 sm:px-8'>
                <div className='py-8'>
                    <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
                        <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                            <table className='min-w-full leading-normal'>
                                <thead>
                                    <tr>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Title
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Location
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Price
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            From
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            To
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Delete
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Update
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>{rooms && rooms.map(room => <RoomDataRow key={room._id} room={room} refetch={refetch}></RoomDataRow>)}</tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div> : <EmptyState message={"Nobody booked any room !"} address={'/'} label={"Browse rooms"}></EmptyState>}
        </>
    )
}

export default MyListings