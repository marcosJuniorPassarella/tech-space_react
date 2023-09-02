import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../firebase/firebaseConection";

function Navbar() {
  const handleSignOut = async () => {
    await signOut(auth)
      .then(() => toast.success("Logout feito com sucesso!"))
      .catch(() => toast.error("Ocorreu um erro, tente novamente!"));
  };

  return (
    <>
      {/* NAVBAR */}
      <div className="w-full mx-auto flex flex-wrap gap-5 p-5 flex-col md:flex-row items-center bg-purple-600">
        <button
          type="button"
          onClick={handleSignOut}
          className="inline-flex items-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-red-600 border-0 mt-4 md:mt-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
            />
          </svg>
          Sair
        </button>

        <div className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <h1 className="text-4xl text-orange-500 font-mono">Tech Space</h1>
        </div>

        <button
          type="button"
          className="inline-flex items-center rounded-md bg-orange-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 border-0 mt-4 md:mt-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Criar post
        </button>
      </div>
    </>
  );
}

export default Navbar;
