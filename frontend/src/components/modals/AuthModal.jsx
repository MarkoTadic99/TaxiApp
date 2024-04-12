import React, { useState } from "react";
import Modal from "react-modal";
import { MdClose } from "react-icons/md";

const AuthModal = ({ isOpen, onRequestClose, registrationMode }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    birthDate: "",
    address: "",
    userType: "Korisnik",
    profilePicture: null,
  });
  console.log(registrationMode);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setFormData({ ...formData, profilePicture: imageFile });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implementacija logike za slanje registracionih/prijavnih podataka na serversku stranu
    onRequestClose(); // Zatvori modalni prozor nakon uspešne registracije/prijave
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="w-1/3 mx-auto mt-20 bg-gray-300 px-4"
    >
      <button
        onClick={onRequestClose}
        className="absolute top-4 right-4 focus:outline-none"
      >
        <MdClose size={24} />
      </button>
      <div className="pt-5 pb-5">
        {registrationMode ? (
          <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
            <input
              type="text"
              name="username"
              placeholder="Korisničko ime"
              onChange={handleChange}
              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <input
              type="email"
              name="email"
              placeholder="Email adresa"
              onChange={handleChange}
              className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <input
              type="password"
              name="password"
              placeholder="Lozinka"
              onChange={handleChange}
              className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Potvrdi lozinku"
              onChange={handleChange}
              className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <input
              type="text"
              name="firstName"
              placeholder="Ime"
              onChange={handleChange}
              className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Prezime"
              onChange={handleChange}
              className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <input
              type="date"
              name="birthDate"
              placeholder="Datum rođenja"
              onChange={handleChange}
              className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <input
              type="text"
              name="address"
              placeholder="Adresa"
              onChange={handleChange}
              className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <select
              name="userType"
              value={formData.userType}
              onChange={handleChange}
              className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="Administrator">Administrator</option>
              <option value="Korisnik">Korisnik</option>
              <option value="Vozač">Vozač</option>
            </select>
            <input
              type="file"
              name="profilePicture"
              accept="image/*"
              onChange={handleImageChange}
              className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <button
              type="submit"
              className="mt-8 mb-8 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Registruj se
            </button>
          </form>
        ) : (
          <>
            <input
              type="email"
              name="email"
              placeholder="Email adresa"
              onChange={handleChange}
              className={
                "mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              }
            />
            <input
              type="password"
              name="password"
              placeholder="Lozinka"
              onChange={handleChange}
              className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <button
              type="submit"
              className="mt-8 mb-8 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Ulogujte se
            </button>
          </>
        )}
      </div>
    </Modal>
  );
};

export default AuthModal;
