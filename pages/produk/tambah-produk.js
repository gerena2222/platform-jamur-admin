import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import AdminLayout from '../../components/admin-layout';

const TambahProduk = () => {
  const [nama, setNama] = useState('');
  const [stok, setStok] = useState('');
  const [gambar, setGambar] = useState('');
  const [harga, setHarga] = useState(0);
  const [satuan, setSatuan] = useState('');
  const router = useRouter()

  const submitProduk = async (e) => {
    e.preventDefault()
    await axios.post('https://jamur.herokuapp.com/produk',{
      namaProduk: nama,
      stokProduk: stok,
      gambarProduk: gambar,
      harga: harga,
      satuan: satuan
    });
    router.push('/produk')
  }
 
  return (
    <AdminLayout title="Tambah Produk">
      <h1 className="mt-4">Admin Produk </h1>
      <ol className="breadcrumb mb-4">
        <li className="breadcrumb-item ">Dasbor Admin</li>
        <li className="breadcrumb-item ">Produk</li>
        <li className="breadcrumb-item active">Tambah Produk</li>
      </ol>
      <div className="card mb-4">
        <div className="card-header">
          <i className="fas fa-plus-circle me-1"></i>
          Tambah Data Produk
        </div>
        <div className="card-body">
          <form onSubmit={submitProduk}>
            <div className="row mb-3">
              <div className="col-md-12">
                <div className="mb-3">
                  <label className='mb-2'>Nama Produk </label>
                  <input value={nama} onChange={(e) => setNama(e.target.value)} className="form-control" type="text" />
                </div>
                <div className="mb-3">
                  <label className='mb-2'>Pilih Gambar </label>
                  <input value={gambar} onChange={(e) => setGambar(e.target.value)} className="form-control mb-2" type="file" />
                </div>
                <div className="mb-3">
                  <label className='mb-2'>Harga </label>
                  <input value={harga} onChange={(e) => setHarga(e.target.value)} className="form-control" type="number" />
                </div>
                <div className="mb-3">
                  <label className='mb-2'>Satuan Per </label>
                  <input value={satuan} onChange={(e) => setSatuan(e.target.value)} className="form-control" type="text" />
                </div>
              </div>
              <div className="mt-3 mb-0">
                <div className="d-grid"><button className="btn btn-primary btn-block">Submit</button></div>
              </div>
            </div>
          </form>
        </div>
      </div>

    </AdminLayout>
  );
};
export default TambahProduk
