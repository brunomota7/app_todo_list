"use client";
import React, { useState } from "react";
import Image from "next/image";

import Wave from "../../public/images/wave.svg";
import { Eye, EyeOff } from "lucide-react";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [resultMenssage, setResultMenssage] = useState("");

  const toggleForm = () => setIsLogin(!isLogin);
  const toggleShowPassword = () => setShowPassword(!showPassword);

  const isValidEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Limpar mensagens anteriores
    setEmailError("");
    setPasswordError("");
    setResultMenssage("");

    let isValid = true;

    // Validar e-mail
    if (!isValidEmail(email)) {
      setEmailError("Por favor, insira um e-mail válido.");
      isValid = false;
    }

    // Validar senha
    if (password.length < 6) {
      setPasswordError("A senha deve ter pelo menos 6 caracteres.");
      isValid = false;
    }

    // Exibir mensagem de sucesso ou erro
    if (isValid) {
      setResultMenssage("Login realizado com sucesso!");
      window.location.href = "/home";
    } else {
      setResultMenssage("Por favor, corrija os erros abaixo.");
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <Image  /* Background */
        src={Wave}
        alt="Wave bg"
        className="absolute w-full bottom-0"
      />
      <div className="relative w-[400] p-8 bg-gray-900/10 rounded-md shadow-lg">
        <h2 className="text-2xl text-sky-400 text-center font-bold mb-6">
          {isLogin ? 'LOGIN' : 'CADASTRO' }
        </h2>
        {resultMenssage && (
          <p
            className={`mt-4 mb-2 text-center font-semibold ${
              resultMenssage.includes("sucesso")
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {resultMenssage}
          </p>
        )}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {!isLogin && (
            <input 
              type="text"
              name="name"
              placeholder="Seu nome"
              required
              className="w-full p-4 outline-none focus:ring-2 rounded-md drop-shadow-md"
            />
          )}
          <input 
            type="email"
            name="email"
            placeholder="Ex: exemplo@exemplo.com"
            required
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 outline-none focus:ring-2 rounded-md drop-shadow-md"
          />
          {emailError && <span className="text-red-500 text-sm">{emailError}</span>}
          <div className="relative w-full flex flex-col gap-1">
            <input 
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Sua senha"
              required
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 outline-none focus:ring-2 rounded-md drop-shadow-md"
            />
            <button
                type="button"
                onClick={toggleShowPassword}
                className="absolute right-4 top-7 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
              {passwordError && <span className="text-red-500 text-sm">{passwordError}</span>}
          </div>
          <button
            type="submit"
            className="w-full h-12 text-lg font-bold text-white bg-sky-400 hover:bg-sky-500 rounded-md drop-shadow-md"
          >
            {isLogin ? 'Entrar' : 'Cadastrar'}
          </button>
        </form>
        <p className="mt-6 text-center text-gray-900">
          {isLogin ? 'Não tem uma conta?' : 'Já tem uma conta?'}
          <span onClick={toggleForm} className="underline cursor-pointer ml-1 font-semibold">
            {isLogin ? 'Cadastre-se' : 'Entre'}
          </span>
        </p>
      </div>
    </div>
  );
}
