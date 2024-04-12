import React from "react";
import { Header } from "./Header";

const Profile = ({}) => {
  return (
    <>
      <Header />
      <div className="bg-white p-6 shadow-md rounded-md">
        <h2 className="text-lg font-semibold mb-4">Informacije o profilu</h2>
        <p className="mb-2">
          <span className="font-semibold">Korisničko ime:</span>{" "}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Email adresa:</span>
        </p>
        <p className="mb-2">
          <span className="font-semibold">Ime:</span>
        </p>
        <p className="mb-2">
          <span className="font-semibold">Prezime:</span>
        </p>
        <p className="mb-2">
          <span className="font-semibold">Datum rođenja:</span>{" "}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Adresa:</span>
        </p>
        <p className="mb-2">
          <span className="font-semibold">Tip korisnika:</span>{" "}
        </p>
        <img alt="Profilna slika" className="w-24 h-24 rounded-full mt-4" />
      </div>
    </>
  );
};

export default Profile;
