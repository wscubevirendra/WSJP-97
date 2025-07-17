const getData = async () => {
    const response = await fetch("http://localhost:5000/user");
    const data = await response.json()
    if (data.status === "success") {
        return data.users
    } else {
        return []
    }

}

export default getData;