//booking 
export const BookRoom = async (bookingData) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/bookings`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(bookingData)
        }
        )

        if (!response.ok) {
            // Handle non-successful response
            throw new Error('Failed to book room');
        }
        const data = await response.json()
        return data;
    }

    catch (error) {
        console.log("Error:", error);
    }

}

//update room booking status
export const updateStatus = async (id, status) => {

    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms/status/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ status })
        }
        )

        if (!response.ok) {
            // Handle non-successful response
            throw new Error('Failed to book room');
        }
        const data = await response.json()
        return data;
    }

    catch (error) {
        console.log("Error:", error);
    }

}

//get bookings by individual email
export const GetBookings = async (email) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/bookings?email=${email}`,)
    const bookings = await response.json()
    return bookings
}
export const GetHostBookings = async (email) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/host-bookings?email=${email}`,)
    const bookings = await response.json()
    return bookings
}

export const deleteBooking=async (id)=>{
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/bookings/${id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            },
        }
        )

        if (!response.ok) {
            // Handle non-successful response
            throw new Error('Failed to delete data');
        }
        const data = await response.json()
        return data;
    }

    catch (error) {
        console.log("Error:", error);
    }
}