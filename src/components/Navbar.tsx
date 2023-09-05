import { useState, useRef, Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";
import { toast } from "react-toastify";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConection";

function Navbar() {
  const [isLoading, setIsLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [isNewPostFormValid, setIsNewPostFormValid] = useState(true);
  const [progress, setProgress] = useState(0);
  const [imgUrl, setImgUrl] = useState("");
  const [postAuthorInput, setPostAuthorInput] = useState("");
  const [postTitleInput, setPostTitleInput] = useState("");
  const [postContentInput, setPostContentInput] = useState("");
  const cancelButtonRef = useRef(null);

  const handleSignOut = async () => {
    await signOut(auth)
      .then(() => toast.success("Logout feito com sucesso!"))
      .catch(() => toast.error("Ocorreu um erro, tente novamente!"));
  };

  const handleInputForm = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    state: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const eventTarget = event.currentTarget as HTMLInputElement;
    const eventValue = eventTarget.value;

    eventValue && state(eventValue);
    console.log(eventValue);
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
          onClick={() => setOpenModal(!openModal)}
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

      {/* MODAL DE CRIAR POSTS */}
      <Transition.Root show={openModal} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpenModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-purple-700 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel>
                  <div className="flex flex-col justify-center h-min">
                    <form className="max-w-[400px] w-full mx-auto bg-purple-600 p-8 px-8 rounded-lg">
                      <h2 className="text-3xl mb-5 dark:text-white font-bold text-center">
                        Criar Post
                      </h2>

                      <div className="flex flex-col text-start text-white py-2">
                        <label>Autor</label>
                        <input
                          onChange={(event) =>
                            handleInputForm(event, setPostAuthorInput)
                          }
                          type="text"
                          placeholder="Digite o seu nome"
                          className={`w-full rounded-lg mt-2 p-2 ${
                            isNewPostFormValid
                              ? `bg-purple-700 focus:bg-purple-800 `
                              : `bg-red-700  focus:bg-red-800`
                          }  bg-purple-700 focus:bg-purple-800 border-2 border-purple-800 focus:border-orange-700 focus:outline-none focus:placeholder-transparent`}
                        />
                      </div>

                      <div className="flex flex-col text-start text-white py-2">
                        <label>Título</label>
                        <input
                          onChange={(event) =>
                            handleInputForm(event, setPostContentInput)
                          }
                          type="text"
                          placeholder="Digite o título"
                          className={`w-full rounded-lg mt-2 p-2 ${
                            isNewPostFormValid
                              ? `bg-purple-700 focus:bg-purple-800 `
                              : `bg-red-700  focus:bg-red-800`
                          }  bg-purple-700 focus:bg-purple-800 border-2 border-purple-800 focus:border-orange-700 focus:outline-none focus:placeholder-transparent`}
                        />
                      </div>

                      <div className="flex flex-col text-start text-white py-2">
                        <label>Conteúdo</label>
                        <textarea
                          onChange={(event) =>
                            handleInputForm(event, setPostContentInput)
                          }
                          placeholder="Digite o conteúdo"
                          className={`w-full rounded-lg mt-2 p-2 ${
                            isNewPostFormValid
                              ? `bg-purple-700 focus:bg-purple-800 `
                              : `bg-red-700  focus:bg-red-800`
                          }  bg-purple-700 focus:bg-purple-800 border-2 border-purple-800 focus:border-orange-700 focus:outline-none focus:placeholder-transparent`}
                        />
                      </div>

                      <div className="flex flex-col text-start text-white py-2">
                        <label>Capa</label>
                        <input
                          type="file"
                          placeholder="Digite o conteúdo"
                          className="w-full cursor-pointer rounded-lg mt-2 p-2 bg-purple-700 focus:bg-purple-800 border-2 border-purple-800 focus:border-orange-700 focus:outline-none focus:placeholder-transparent"
                        />
                      </div>

                      {!imgUrl && isLoading && (
                        <progress value={progress} max="100" />
                      )}

                      {imgUrl && !isLoading && (
                        <img
                          src={imgUrl}
                          alt="Imagem de capa do post"
                          width={200}
                        />
                      )}

                      <button
                        disabled={isLoading}
                        type="submit"
                        className="w-full my-5 py-2 bg-orange-500 shadow-lg  enabled:hover:shadow-orange-500/40 text-white font-semibold rounded-lg disabled:bg-orange-400 disabled:shadow-none enabled:shadow-orange-500/50"
                      >
                        {isLoading ? "Criando post..." : "Criar"}
                      </button>
                      <button
                        onClick={() => setOpenModal(false)}
                        disabled={isLoading}
                        type="button"
                        className="w-full py-2 bg-red-500 shadow-lg  enabled:hover:shadow-red-500/40 text-white font-semibold rounded-lg disabled:bg-red-400 disabled:shadow-none enabled:shadow-red-500/50"
                      >
                        Cancelar
                      </button>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}

export default Navbar;
