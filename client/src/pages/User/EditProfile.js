import axios from 'axios'

export async function getUser (id) {
    const { data } = await axios.get(`http://localhost:3031/profile/` + id)
    if (data?.message) {
        return data.message
    } else {
        return data
    }
}


export async function getUserByName (username, password) {
    const {data} = await axios.post('http://localhost:3031/users/login', {username,password})
    if (data?.message) {
        return data.message
    } else {
        return data
    }
}


export async function editUserPicture (id, auth, picUrl) {
    console.log('in')
    console.log(id)
    console.log(auth)
    console.log(picUrl)
    const { data } = await axios.post(`http://localhost:3031/profile/${id}/edit-user-picture`, {auth, picUrl})
    console.log(data)
    if (data?.message) {
        return data.message
    } else {
        return data
    }
}
export async function editUserData (id, username, email) {
    const { data } = await axios.post(`http://localhost:3031/profile/${id}/edit-user-data`, 
    { username, email })
    if (data?.message) {
        return data.message
    } else {
        return data
    }
}
export async function editUserBio (id, username, bio ) {
    const { data } = await axios.post(`http://localhost:3031/profile/${id}/edit-user-bio`, {username, bio})
    if (data?.message) {
        return data.message
    } else {
        return data
    }
}