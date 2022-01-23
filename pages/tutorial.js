import React, { useState } from 'react'
const Tutorial = () => {
    const [user, setUser] = useState([])
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userId, setUserId] = useState(null)
    // const (e) => setEmail(e.target.value) = (e) => {
    //     const value = e.target.value
    //     const name = e.target.name
    //     setformData((prevalue) => {
    //         return {
    //             ...prevalue,
    //             [name]: value,

    //         }
    //     })
    // }
    const selectUser = (id) => {
        const data = user[id - 1]
        setEmail(data.email)
        setPassword(data.password)
        setUserId(data.id)
    }
    // const handleEdit = async (id) => {
    //     const data = [...user]
    //     const cariData = data.find((a) => a.id === id)
    //     const req = await fetch("http://localhost:4000/users", {
    //         method: 'PUT',
    //         body: JSON.stringify({
    //             email: formData.email,
    //             password: formData.password
    //         }),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     const res = await req.json()
    //     console.log(res)

    //     setformData({
    //         email: cariData.email,
    //         password: cariData.password
    //     })
    // }
    const ambilData = async () => {
        const req = await fetch(`http://localhost:4000/users`)
        const res = await req.json()
        console.log(res)
        setUser(res)
    }
    const kirimData = async () => {
        const data = { email, password }
        const req = await fetch(`http://localhost:4000/users`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const res = await req.json()
        console.log(res)
        ambilData()
        setPassword('')
        setEmail('')
    }
    const updateData = async () => {
        const data = { email, password, userId }
        const req = await fetch(`http://localhost:4000/users/${userId}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const res = await req.json()
        console.log(res)
        ambilData()
        setPassword('')
        setEmail('')
    }
    const deleteData = async (id) => {
        const data = { id }
        const req = await fetch(`http://localhost:4000/users/${id}`, {
            method: 'DELETE',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const res = await req.json()
        console.log(res)
        ambilData()
    }
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col col-12">
                        <div className="row">
                            <div className="col col-md-6">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Email address </label>
                                        <input name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" />

                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="text" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" />
                                    </div>
                                    <button type="button" className="btn btn-primary" onClick={kirimData}>Submit</button>
                                    <button type="button" className="btn btn-secondary ms-3" onClick={updateData}>Update</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col col-12">
                            <div className="row">
                                <div className="col col-md-6">
                                    {/* <button type="button" className="btn btn-info" onClick={ambilData}>Tampil Data</button> */}
                                    <div className="mt-2">
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th scope="col">No.</th>
                                                    <th scope="col">Email</th>
                                                    <th scope="col">Password</th>
                                                    <th scope="col">Aksi</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {user.map((data) => {
                                                    return (
                                                        <tr key={data.id}>
                                                            <td>{data.id}</td>
                                                            <td>{data.email}</td>
                                                            <td>{data.password}</td>
                                                            <td>
                                                                <button className="btn btn-success ms-2 me-2" onClick={() => selectUser(data.id)} >
                                                                    <span className="fas fa-edit"></span>
                                                                </button>
                                                                <span></span>
                                                                <button className="btn btn-danger" onClick={() => deleteData(data.id)}>
                                                                    <span className="fas fa-trash"></span>
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>

    )
}
export default Tutorial