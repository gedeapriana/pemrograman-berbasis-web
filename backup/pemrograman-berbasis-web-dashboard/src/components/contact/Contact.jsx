import React from "react";
import { RiMailSendLine } from "react-icons/ri";
import { BsPencilSquare } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";
import MessageImage from "../../assets/images/3d-message.png";

const Contact = () => {
  return (
    <>
      <section
        id="__contact-root"
        className="bg-violet-400 dark:bg-slate-800 py-24 w-full flex items-center justify-center"
      >
        <section
          id="__contact-wrapper"
          className="h-full text-slate-50 w-11/12 flex flex-col-reverse lg:px-20 lg:flex-row items-center justify-center lg:w-9/12 xl:w-8/12"
        >
          <div className="form w-full lg:w-1/2 h-auto lg:h-full">
            <form>
              <div class="mb-6">
                <label
                  for="email-address-icon"
                  class="block mb-2 text-sm font-medium text-slate-50 dark:text-white"
                >
                  Nama Lengkap
                </label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <BsPencilSquare className="text-slate-500" />
                  </div>
                  <input
                    type="text"
                    id="email-address-icon"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500"
                    placeholder="Masukkan Nama lengkap"
                  />
                </div>
              </div>
              <div class="mb-6">
                <label
                  for="email-address-icon"
                  class="block mb-2 text-sm font-medium text-slate-50 dark:text-white"
                >
                  Email
                </label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <input
                    type="email"
                    id="email-address-icon"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500"
                    placeholder="name@mail.com"
                  />
                </div>
              </div>

              <div class="mb-6">
                <label
                  for="message"
                  class="block mb-2 text-sm font-medium text-slate-50 dark:text-white"
                >
                  Pesan
                </label>
                <textarea
                  id="message"
                  rows="4"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-violet-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500"
                  placeholder="Tulis pesan disini"
                ></textarea>
              </div>

              <button
                type="submit"
                class="text-violet-500 bg-slate-50 hover:bg-violet-500 hover:text-slate-50 flex items-center justify-center gap-1 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-violet-500 dark:text-slate-50 dark:hover:bg-slate-50 dark:hover:text-slate-700 dark:focus:ring-blue-800"
              >
                <RiMailSendLine /> Kirim
              </button>
            </form>
          </div>

          <div className="logo w-full lg:w-1/2 h-auto flex flex-col justify-center items-center lg:h-full">
            <p
              id="__member-header"
              className={
                "text-xl lg:text-3xl pb-8 flex items-center justify-center gap-2"
              }
            >
              <AiOutlineMessage className={"inline"} />
              Hubungi Kami
            </p>
            <img
              src={MessageImage}
              alt=""
              className="w-9/12 md:w-4/12 lg:w-7/12"
            />
          </div>
        </section>
      </section>
    </>
  );
};

export default Contact;
