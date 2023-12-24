import { useContext, useState } from "react";
import AddRoomForm from "../../components/Forms/AddRoomForm";
import { imageUpload } from "../../api/utils";
import { AuthContext } from "../../providers/AuthProvider";
import { addRoom } from "../../api/addRoom";
import toast from "react-hot-toast";


const AddRoom = () => {
    const { user } = useContext(AuthContext)
    const [imageName, setImageName] = useState('Upload Image')
    const [loading, setLoading] = useState(false)
    const [dates, setDates] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    })
    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true)
        const form = event.target;
        const location = form.location.value;
        const category = form.category.value;
        const title = form.title.value;
        const total_guest = form.total_guest.value;
        const bedrooms = form.bedrooms.value;
        const bathrooms = form.bathrooms.value;
        const description = form.description.value;
        const price = form.price.value;
        const from = dates.startDate;
        const to = dates.endDate;
        const image = form.image.files[0];
        imageUpload(image)
            .then(data => {
                const roomData = {
                    image: data.data.display_url,
                    location,
                    category,
                    total_guest,
                    price,
                    bedrooms,
                    bathrooms,
                    description,
                    from,
                    title,
                    to,
                    host: {
                        name: user?.displayName,
                        image: user?.photoURL,
                        email: user?.email
                    },

                }
                console.log(roomData);
                addRoom(roomData)
                .then(data=>{console.log(data)
                toast.success('You added a new room')
                })
                .catch(err=>console.log(err))
                setLoading(false)
            })
            .catch(err => {
                setLoading(false)
                console.log(err.message)
            })
    }

    const handleImageChange = (image) => {
        setImageName(image.name)
    }

    const handleDates = ranges => {
        setDates(ranges.selection)
    }

    return (
        <>
            <AddRoomForm
                handleSubmit={handleSubmit}
                loading={loading}
                handleImageChange={handleImageChange}
                imageName={imageName}
                dates={dates}
                handleDates={handleDates}
            ></AddRoomForm>
        </>
    );
};

export default AddRoom;



