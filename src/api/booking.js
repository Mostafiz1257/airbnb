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
            body: JSON.stringify({status})
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