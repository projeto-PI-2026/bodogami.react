import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [erros, setErros] = useState({});

  function validar() {
    const novosErros = {};

    if (!email) {
      novosErros.email = 'E-mail é obrigatório';
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      novosErros.email = 'E-mail inválido';
    }

    if (!senha) {
      novosErros.senha = 'Senha é obrigatória';
    } else if (senha.length < 6) {
      novosErros.senha = 'Senha deve ter pelo menos 6 caracteres';
    }

    setErros(novosErros);

    return Object.keys(novosErros).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (validar()) {
      alert('Login bem-sucedido (simulado)');
      navigate('/dashboard');
    }
  }

  return (
    <main className="auth-shell">
      <section className="auth-visual">
        <div className="brand">
          <span className="brand-mark">
            <span></span>
          </span>
          <span>Ludosys</span>
        </div>

        <div className="auth-message">
          <span className="hero-kicker">Alugue. Jogue. Devolva.</span>
          <h1>Sua próxima história começa na mesa.</h1>
          <p>Mais de 1.100 jogos para descobrir com quem você gosta.</p>
        </div>

        <div className="auth-photo">
          <img
            alt="Amigos reunidos em uma noite de jogos"
            src="/assets/login-background.jpg"
          />
        </div>
      </section>

      <section className="auth-form-wrap">
        <div className="auth-form">
          <div className="auth-mobile-brand">
            <div className="brand">
              <span className="brand-mark">
                <span></span>
              </span>
              <span>Ludosys</span>
            </div>
          </div>

          <span className="eyebrow">Bem-vindo de volta</span>
          <h2>Continue sua aventura.</h2>
          <p>Entre com seus dados para escolher o próximo jogo.</p>

          <form onSubmit={handleSubmit} noValidate>
            <div className="form-stack">
              <label className="field" htmlFor="field-e-mail-ou-cpf">
                <span>E-mail ou CPF</span>
                <input
                  id="field-e-mail-ou-cpf"
                  type="text"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  aria-describedby={erros.email ? 'email-error' : undefined}
                />
              </label>

              {erros.email && (
                <span id="email-error" className="login-error-msg">
                  {erros.email}
                </span>
              )}

              <label className="field" htmlFor="field-senha">
                <span>Senha</span>
                <input
                  id="field-senha"
                  type={mostrarSenha ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={senha}
                  onChange={e => setSenha(e.target.value)}
                  aria-describedby={erros.senha ? 'senha-error' : undefined}
                />
              </label>

              {erros.senha && (
                <span id="senha-error" className="login-error-msg">
                  {erros.senha}
                </span>
              )}

              <button
                type="button"
                className="forgot"
                onClick={() => alert('Esqueci minha senha clicado')}
              >
                Esqueci minha senha
              </button>
            </div>

            <button type="submit" className="button button--primary full-button">
              Entrar
            </button>

            <div className="auth-divider">
              <span>ou</span>
            </div>

            <button
              type="button"
              className="button button--ghost full-button outlined"
              onClick={() => navigate('/register')}
            >
              Criar minha conta
            </button>

            <button
              type="button"
              className="team-login"
              onClick={() => alert('Acessar painel da equipe')}
            >
              <svg
                aria-hidden="true"
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="7" height="7" rx="1"></rect>
                <rect x="14" y="3" width="7" height="7" rx="1"></rect>
                <rect x="3" y="14" width="7" height="7" rx="1"></rect>
                <rect x="14" y="14" width="7" height="7" rx="1"></rect>
              </svg>{' '}
              Acessar painel da equipe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}