import React, { useState } from "react";
import AuthModal from "./modals/AuthModal";

const Home = () => {
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openRegistrationModal = () => {
    setIsRegistrationModalOpen(true);
  };

  const closeRegistrationModal = () => {
    setIsRegistrationModalOpen(false);
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-screen"
      style={{
        backgroundImage: `url("/nytaxi4.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div className="flex flex-col items-center ">
        <h1 className="text-3xl font-bold pb-10 text-white">
          DOBRODOŠLI NA SAJT VAŠEG OMILJENOG TAKSIJA
        </h1>
        <div className="flex flex-col items-center border border-gray-300">
          <p className={"pr-2 pl-2 pt-2 text-white"}>
            Ukoliko nemate nalog, ovde se možete registrovati:
          </p>
          <button
            onClick={openRegistrationModal}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mb-6 "
          >
            Registracija
          </button>
          <p className={"text-white"}>
            Ukoliko imate nalog, ovde se možete ulogovati:
          </p>
          <button
            onClick={openLoginModal}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mb-2"
          >
            Ulogujte se
          </button>
        </div>
      </div>
      {/* Modal za registraciju */}
      <AuthModal
        isOpen={isRegistrationModalOpen}
        onRequestClose={closeRegistrationModal}
        registrationMode={true}
      />
      {/* Modal za prijavu */}
      <AuthModal
        isOpen={isLoginModalOpen}
        onRequestClose={closeLoginModal}
        registrationMode={false}
      />
    </div>
  );
};

export default Home;
