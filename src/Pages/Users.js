import React, { useEffect, useState } from 'react';
import '../App.css';
import Modal from '../Components/Modal';
import { Link } from "react-router-dom";
import Skeleton from '../Components/Skeleton';

const Users = () => {
  const [images, setImages] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true); 

  const itemsPerPage = 10;

  useEffect(() => {
    //add base url to the request --> on my localhost, the server is using port :4000
    fetch(`http://localhost:4000/images?limit=${itemsPerPage}`)
      .then((res) => res.json())
      .then((data) => {
        console.log('data', data)
        setImages(data);
        setLoading(false); 
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, [page]);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setSelectedImage('');
    setModalOpen(false);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className='app'>
      <div className='create-profile'>
        <span className='create-profile-button'>
          <Link to={`/create-profile`}>
              <p className='create-profile-text'>Create Profile</p>
            </Link>
        </span>
      </div>
     <div className="app-container">

     {loading ? ( // Display Skeleton when the data is fetching. This enhance the user experience and perceived performance when using a skeleton loader for a slow API,
        <>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </>
      ) : (
        images?.map((img) => (
          <div key={img.id} className="card">
            <img
              src={`${img.url}.jpg`}
              alt=""
              className="thumbnail"
              onClick={() => handleImageClick(`${img.url}.jpg`)}
            />
            <div className="user-profile">
              <img
                src={`${img.user.profile_image}.webp`}
                alt=""
                className="user-profile-image"
              />
              <p className='user-profile-name'>{img.user.first_name} {img.user.last_name}</p>
            </div>
          </div>
        ))
      )}

     
     </div>

      {/* Pagination */}
      {/* added pagination to the app to enhance performance. This ensures that you are only fetching and rendering a reasonable number of images at a time. */}
      <div className="pagination">
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
        >
          Previous
        </button>
        <span>{page}</span>
        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={images?.length < itemsPerPage}
        >
          Next
        </button>
      </div>

      {/* Render the Modal component */}
      <Modal isOpen={modalOpen} onClose={handleModalClose} imageUrl={selectedImage} />
    </div>
  );
}

export default Users;
