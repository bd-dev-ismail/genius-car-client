import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import img1 from '../../../assets/images/team/1.jpg';
import img2 from '../../../assets/images/team/2.jpg';
import img3 from '../../../assets/images/team/3.jpg';
const Team = () => {
    return (
      <div className="mb-32">
        <div className="text-center mb-4">
          <p className="text-2xl font-bold text-orange-600">Team</p>
          <h2 className="text-5xl font-semibold">Meet Our Team</h2>
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or randomised <br /> words which don't look even slightly
            believable.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={img1} alt="team" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Car Engine Plug</h2>
              <p>Enginieer Expert</p>
              <div className="card-actions text-2xl text-orange-600">
                <FaFacebook></FaFacebook>
                <FaTwitter></FaTwitter>
                <FaInstagram></FaInstagram>
                <FaLinkedin></FaLinkedin>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={img2} alt="team" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Car Engine Plug</h2>
              <p>Enginieer Expert</p>
              <div className="card-actions text-2xl text-orange-600">
                <FaFacebook></FaFacebook>
                <FaTwitter></FaTwitter>
                <FaInstagram></FaInstagram>
                <FaLinkedin></FaLinkedin>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={img3} alt="team" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Car Engine Plug</h2>
              <p>Enginieer Expert</p>
              <div className="card-actions text-2xl text-orange-600">
                <FaFacebook></FaFacebook>
                <FaTwitter></FaTwitter>
                <FaInstagram></FaInstagram>
                <FaLinkedin></FaLinkedin>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Team;