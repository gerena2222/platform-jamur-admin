// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/router';
// import { useParams } from 'react-router-dom'
// import AdminLayout from '../../components/admin-layout';

// const EditProduk = () => {
//   const [nama, setNama] = useState('');
//   const [stok, setStok] = useState('');
//   const [gambar, setGambar] = useState('');
//   const [harga, setHarga] = useState(0);
//   const [satuan, setSatuan] = useState('');
//   const router = useRouter()
//   const { id } = useParams()

//   const updateProduk = async (e) => {
//     e.preventDefault()
//     await axios.put(`https://jamur.herokuapp.com/produk/${id}`, {
//       namaProduk: nama,
//       stokProduk: stok,
//       gambarProduk: gambar,
//       harga: harga,
//       satuan: satuan
//     });
//     router.push('/produk')
//   }
//   useEffect(() => {
//     getProdukById()
//   }, [])
//   const getProdukById = async () => {
//     const res = await axios.get(`https://jamur.herokuapp.com/produk/${id}`)
//     setNama(res.data.nama)
//     console.log(res.data.nama);
//     setStok(res.data.stok)
//     setGambar(res.data.gambar)
//     setHarga(res.data.harga)
//     setSatuan(res.data.satuan)
//   }
//   return (
//     <AdminLayout title="Tambah Produk">
//       <h1 className="mt-4">Admin Produk </h1>
//       <ol className="breadcrumb mb-4">
//         <li className="breadcrumb-item ">Dasbor Admin</li>
//         <li className="breadcrumb-item ">Produk</li>
//         <li className="breadcrumb-item active">Edit Produk</li>
//       </ol>
//       <div className="card mb-4">
//         <div className="card-header">
//           <i className="fas fa-plus-circle me-1"></i>
//           Tambah Data Produk
//         </div>
//         <div className="card-body">
//           <form onSubmit={updateProduk}>
//             <div className="row mb-3">
//               <div className="col-md-12">
//                 <div className="mb-3">
//                   <label className='mb-2'>Nama Produk </label>
//                   <input value={nama} onChange={(e) => setNama(e.target.value)} className="form-control" type="text" />
//                 </div>
//                 <div className="mb-3">
//                   <label className='mb-2'>Pilih Stok</label>
//                   <input value={stok} onChange={(e) => setStok(e.target.value)} className="form-control" type="text" list="jenis" />
//                   <datalist id="jenis">
//                     <option value="Stok Tersedia"></option>
//                     <option value="Stok Habis"></option>
//                   </datalist>
//                 </div>
//                 <div className="mb-3">
//                   <label className='mb-2'>Pilih Gambar </label>
//                   <input value={gambar} onChange={(e) => setGambar(e.target.value)} className="form-control" type="file" />
//                 </div>
//                 <div className="mb-3">
//                   <label className='mb-2'>Harga </label>
//                   <input value={harga} onChange={(e) => setHarga(e.target.value)} className="form-control" type="number" />
//                 </div>
//                 <div className="mb-3">
//                   <label className='mb-2'>Satuan Per </label>
//                   <input value={satuan} onChange={(e) => setSatuan(e.target.value)} className="form-control" type="text" />
//                 </div>
//               </div>
//               <div className="mt-3 mb-0">
//                 <div className="d-grid"><button className="btn btn-primary btn-block">Update</button></div>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>

//     </AdminLayout>
//   );
// };
// export default EditProduk
