"use client";
import useLoginModal from "@/app/hooks/useLoginModal";
import React, { useState } from "react";
import Modal from "./Modal";
import CustomButton from "../forms/CustomButton";
import apiService from "@/app/services/apiService";
import { handleLogin } from "@/app/lib/actions";
import { useRouter } from "next/navigation";

const LoginModal = () => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<string[]>([]);
  const [password, setPassword] = useState("");

  const submitLogin = async () => {
    const formData = {
      email: email,
      password: password,
    };

    const response = await apiService.post(
      "api/auth/login/",
      JSON.stringify(formData),
    );
    console.log(response);
    if (response.access) {
      handleLogin(response.user.pk, response.access, response.refresh);

      loginModal.close();
      router.push("/");
    } else {
      const tmpErrors: string[] = Object.values(response).map((error: any) => {
        return error;
      });
      setErrors(tmpErrors);
    }
  };

  const content = (
    <>
      <form onSubmit={submitLogin} className="space-y-4">
        <input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
        />

        {errors.map((error, index) => {
          return (
            <div
              key={`error_${index}`}
              className="p-5 bg-airbnb text-white rounded-xl opacity-80"
            >
              {error}
            </div>
          );
        })}

        <CustomButton label="Submit" onClick={submitLogin} />
      </form>
    </>
  );
  return (
    <Modal
      isOpen={loginModal.isOpen}
      close={loginModal.close}
      label="Login"
      content={content}
    />
  );
};

export default LoginModal;
