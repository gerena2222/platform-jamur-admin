import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import AdminLayout from '../../components/admin-layout';
import { useRouter } from 'next/router';
import { useParams } from 'react-router-dom';
const Produk = () => {
  const [produk, setProduk] = useState([]);
  const [nama, setNama] = useState('');
  const [stok, setStok] = useState('');
  const [gambar, setGambar] = useState('');
  const [harga, setHarga] = useState(0);
  const [satuan, setSatuan] = useState('');
  const { id } = useParams()
  const router = useRouter()
  useEffect(() => {
    getProduk()
  }, []);

  const getProduk = async () => {
    const res = await axios.get('https://jamur.herokuapp.com/produk');
    setProduk(res.data)
  }
  const updateProduk = async (e) => {
    e.preventDefault()
    await axios.put(`https://jamur.herokuapp.com/produk/${id}`, {
      namaProduk: nama,
      stokProduk: stok,
      gambarProduk: gambar,
      harga: harga,
      satuan: satuan
    });
    router.push('/produk')
  }
  useEffect(() => {
    getProdukById()
  }, [])
  const getProdukById = async (id) => {
    const res = await axios.get(`https://jamur.herokuapp.com/produk/${id}`)
    setNama(res.data.nama)
    console.log(res.data.nama);
    setStok(res.data.stok)
    setGambar(res.data.gambar)
    setHarga(res.data.harga)
    setSatuan(res.data.satuan)
  }
  const deleteProduk = async (id) => {
    await axios.delete(`https://jamur.herokuapp.com/produk/${id}`)
    getProduk()
  }
  return (
    <AdminLayout title="Produk">
      <h1 className="mt-4">Admin Produk </h1>
      <ol className="breadcrumb mb-4">
        <li className="breadcrumb-item ">Dasbor Admin</li>
        <li className="breadcrumb-item active">Produk</li>
      </ol>
      <Link href="/produk/tambah-produk">
        <a className="btn btn-success mb-3 align-items-center"><i className="fas fa-plus-circle"></i> Tambah Produk</a>
      </Link>
      <div className="card mb-4">
        <div className="card-header">
          <i className="fas fa-table me-1"></i>
          Data Produk
        </div>
        <div className="card-body">
          <table id="datatablesSimple" className="dataTable-table">
            <thead>
              <tr>
                <th data-sortable="" style={{ width: "2%;" }}>
                  <a className="dataTable-sorter">No</a>
                </th>
                <th data-sortable="" style={{ width: "20%;" }} >
                  <a className="dataTable-sorter">Name</a>
                </th>
                <th data-sortable="" style={{ width: "5%;" }}>
                  <a className="dataTable-sorter">Link</a>
                </th>
                <th data-sortable="" style={{ width: "15%;" }}>
                  <a className="dataTable-sorter">Gambar</a>
                </th>
                <th data-sortable="" style={{ width: "10%;" }}>
                  <a className="dataTable-sorter">Harga</a>
                </th>
                <th data-sortable="" style={{ width: "10%;" }}>
                  <a className="dataTable-sorter">Satuan</a>
                </th>
                <th data-sortable="" style={{ width: "20%;" }}>
                  <a className="dataTable-sorter">Aksi</a>
                </th>
              </tr>
            </thead>
            <tbody>
              {produk.map((produk, index) => (
                <tr key={produk.id}>
                  <td>{index + 1}</td>
                  <td>{produk.namaProduk}</td>
                  <td>{produk.stokProduk}</td>
                  <td><img src={produk.gambarProduk} alt=''/></td>
                  <td>{produk.harga}</td>
                  <td>{produk.satuan}</td>
                  <td>
                    {/* <button onClick={() => getProdukById(produk.id)} className='btn btn-success' data-bs-toggle="modal" data-bs-target="#modal-edit">
                      <i className='fas fa-edit me-1'></i>Edit
                    </button> */}
                    {/* <div className="modal fade" id="modal-edit" tabIndex="-1" aria-labelledby="modal-edit" aria-hidden="true">
                      <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="modal-edit">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div className="modal-body">
                            <form onSubmit={updateProduk}>
                              <div className="row mb-3">
                                <div className="col-md-12">
                                  <div className="mb-3">
                                    <label className='mb-2'>Nama Produk </label>
                                    <input value={nama} onChange={(e) => setNama(e.target.value)} className="form-control" type="text" />
                                  </div>
                                  <div className="mb-3">
                                    <label className='mb-2'>Pilih Stok</label>
                                    <input value={stok} onChange={(e) => setStok(e.target.value)} className="form-control" type="text" list="jenis" />
                                    <datalist id="jenis">
                                      <option value="Stok Tersedia"></option>
                                      <option value="Stok Habis"></option>
                                    </datalist>
                                  </div>
                                  <div className="mb-3">
                                    <label className='mb-2'>Pilih Gambar </label>
                                    <input value={gambar} onChange={(e) => setGambar(e.target.value)} className="form-control" type="file" />
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
                                  <div className="d-grid"><button className="btn btn-primary btn-block">Update</button></div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    <button onClick={() => deleteProduk(produk.id)} className='btn btn-danger ms-2'><i className='fas fa-trash me-1'></i>Hapus</button>
                  </td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};
export default Produk
