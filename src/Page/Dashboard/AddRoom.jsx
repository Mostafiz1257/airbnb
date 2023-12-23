import { useState } from "react";
import AddRoomForm from "../../components/Forms/AddRoomForm";
import { imageUpload } from "../../api/utils";

const AddRoom = () => {

    const [imageName, setImageName] = useState('Upload Image')
    const [loading, setLoading] = useState(false)
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
        // const from = dates.startDate;
        // const to = dates.endDate;
        const image = form.image.files[0];
        imageUpload(image)
            .then(data => {
                setLoading(false)
                console.log(data.data.display_url)
            })
            .catch(err => {
                setLoading(false)
                console.log(err.message)
            })
    }

    const handleImageChange = (image) => {
        setImageName(image.name)
    }
    return (
        <>
            <AddRoomForm handleSubmit={handleSubmit} loading={loading} handleImageChange={handleImageChange} imageName={imageName}></AddRoomForm>
        </>
    );
};

export default AddRoom;


