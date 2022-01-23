import React, { useState, useEffect } from "react"
import Link from "next/link"
import axios from "axios"
import jwt_decode from "jwt-decode"
import { useRouter } from "next/router"

import AdminLayout from "../components/admin-layout"
const Dashboard = () => {
  const [name, setName] = useState('')
  const [token, setToken] = useState('')
  const [expire, setExpire] = useState('')
  const router = useRouter()
  useEffect(() => {
    refreshToken()
  }, [])
  const refreshToken = async () => {
    try {
      const res = await axios.get('https://jamur.herokuapp.com/token');
      setToken(res.data.accessToken)
      const decode = jwt_decode(res.data.accessToken);
      setName(decode.name)
      setExpire(decode.exp)
    } catch (error) {
      if (error.res) {
        router.push("/")
      }
    }
  }
  return (
    <AdminLayout title="Dasbor Admin">
      <h1 className="mt-4">Selamat Datang : {name} </h1>
      <ol className="breadcrumb mb-4">
        <li className="breadcrumb-item active">Dasbor Admin</li>
      </ol>
      <div className="row">
        <Link href="/produk">
          <div className="col-xl-3 col-md-6">
            <div className="card bg-primary text-white mb-4">
              <div className="card-body">Lihat Produk</div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <a className="small text-white stretched-link" >Klik Disini</a>
                <div className="small text-white"><i className="fas fa-angle-right"></i></div>
              </div>
            </div>
          </div>
        </Link>
        <div className="col-xl-3 col-md-6">
          <div className="card bg-success text-white mb-4">
            <div className="card-body">Lihat Blog</div>
            <div className="card-footer d-flex align-items-center justify-content-between">
              <a className="small text-white stretched-link" href="#">Klik Disini</a>
              <div className="small text-white"> <i className="fas fa-angle-right"></i></div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="card bg-dark text-white mb-4">
            <div className="card-body">Comming Soon</div>
            <div className="card-footer d-flex align-items-center justify-content-between">
              <a className="small text-white stretched-link" href="#">View Details</a>
              <div className="small text-white"><i className="fas fa-angle-right"></i></div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="card bg-secondary text-white mb-4">
            <div className="card-body">Comming Soon</div>
            <div className="card-footer d-flex align-items-center justify-content-between">
              <a className="small text-white stretched-link" href="#">View Details</a>
              <div className="small text-white"> <i className="fas fa-angle-right"></i></div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
export default Dashboard