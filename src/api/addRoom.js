export const addRoom = async (roomData) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(roomData)
    }
    )
    const data = await response.json()
    return data;

}

export const getRoom = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms`)
    const data = await response.json()
    return data;
}

export const getSingleRoom = async (_id) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/room/${_id}`)
    const data = await response.json()
    return data;
}