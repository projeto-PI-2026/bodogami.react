import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../login/Login.css';

export default function Cadastro() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  // Estado dos dados da etapa 1
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [aceitaTermo, setAceitaTermo] = useState(false);

  // Estado dos dados da etapa 2
  const [cep, setCep] = useState('');
  const [cidade, setCidade] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [bairro, setBairro] = useState('');
  const [estado, setEstado] = useState('SP');

  function handleNext() {
    if (!nome || !cpf || !dataNascimento || !telefone || !email || !senha || !aceitaTermo) {
      alert('Por favor, preencha todos os campos obrigatórios na etapa 1 e aceite o termo.');
      return;
    }

    setStep(2);
  }

  function handleBack() {
    setStep(1);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!cep || !cidade || !rua || !numero || !bairro || !estado) {
      alert('Por favor, preencha todos os campos obrigatórios na etapa 2.');
      return;
    }

    alert('Cadastro finalizado (simulado)');
    navigate('/login');
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

          {step === 1 && (
            <>
              <button className="back-link" onClick={() => navigate('/')}>
                ← Voltar
              </button>

              <span className="eyebrow">Cadastro</span>
              <h2>Vamos começar?</h2>
              <p>Dados pessoais — etapa 1 de 2</p>

              <div className="stepper">
                <span className="done"></span>
                <span></span>
              </div>

              <form onSubmit={e => { e.preventDefault(); handleNext(); }}>
                <div className="form-grid">
                  <label className="field" htmlFor="field-nome-completo">
                    <span>Nome completo</span>
                    <input
                      id="field-nome-completo"
                      placeholder="Como podemos chamar você?"
                      type="text"
                      value={nome}
                      onChange={e => setNome(e.target.value)}
                      required
                    />
                  </label>

                  <label className="field" htmlFor="field-cpf">
                    <span>CPF</span>
                    <input
                      id="field-cpf"
                      placeholder="000.000.000-00"
                      type="text"
                      value={cpf}
                      onChange={e => setCpf(e.target.value)}
                      required
                    />
                  </label>

                  <label className="field" htmlFor="field-data-de-nascimento">
                    <span>Data de nascimento</span>
                    <input
                      id="field-data-de-nascimento"
                      type="date"
                      value={dataNascimento}
                      onChange={e => setDataNascimento(e.target.value)}
                      required
                    />
                  </label>

                  <label className="field" htmlFor="field-telefone">
                    <span>Telefone</span>
                    <input
                      id="field-telefone"
                      placeholder="(11) 99999-9999"
                      type="text"
                      value={telefone}
                      onChange={e => setTelefone(e.target.value)}
                      required
                    />
                  </label>

                  <label className="field" htmlFor="field-e-mail">
                    <span>E-mail</span>
                    <input
                      id="field-e-mail"
                      placeholder="seu@email.com"
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      required
                    />
                  </label>

                  <label className="field" htmlFor="field-senha">
                    <span>Senha</span>
                    <input
                      id="field-senha"
                      placeholder="Mínimo de 8 caracteres"
                      type="password"
                      value={senha}
                      onChange={e => setSenha(e.target.value)}
                      required
                    />
                  </label>

                  <label className="terms">
                    <input
                      type="checkbox"
                      checked={aceitaTermo}
                      onChange={e => setAceitaTermo(e.target.checked)}
                      required
                    />{' '}
                    <span>
                      Li e aceito o termo de locação, incluindo pagamento, prazo, multa e danos.
                    </span>
                  </label>
                </div>

                <button className="button button--primary full-button" type="submit">
                  Próximo
                </button>
              </form>
            </>
          )}

          {step === 2 && (
            <>
              <button className="back-link" onClick={handleBack}>
                ← Voltar
              </button>

              <span className="eyebrow">Cadastro</span>
              <h2>Onde você está?</h2>
              <p>Endereço — etapa 2 de 2</p>

              <div className="stepper">
                <span className="done"></span>
                <span className="done"></span>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="form-grid">
                  <label className="field" htmlFor="field-cep">
                    <span>CEP</span>
                    <input
                      id="field-cep"
                      placeholder="00000-000"
                      type="text"
                      value={cep}
                      onChange={e => setCep(e.target.value)}
                      required
                    />
                  </label>

                  <label className="field" htmlFor="field-cidade">
                    <span>Cidade</span>
                    <input
                      id="field-cidade"
                      placeholder="São Paulo"
                      type="text"
                      value={cidade}
                      onChange={e => setCidade(e.target.value)}
                      required
                    />
                  </label>

                  <label className="field" htmlFor="field-rua">
                    <span>Rua</span>
                    <input
                      id="field-rua"
                      placeholder="Nome da rua"
                      type="text"
                      value={rua}
                      onChange={e => setRua(e.target.value)}
                      required
                    />
                  </label>

                  <label className="field" htmlFor="field-n-mero">
                    <span>Número</span>
                    <input
                      id="field-n-mero"
                      placeholder="123"
                      type="text"
                      value={numero}
                      onChange={e => setNumero(e.target.value)}
                      required
                    />
                  </label>

                  <label className="field" htmlFor="field-complemento">
                    <span>Complemento</span>
                    <input
                      id="field-complemento"
                      placeholder="Apto, bloco..."
                      type="text"
                      value={complemento}
                      onChange={e => setComplemento(e.target.value)}
                    />
                  </label>

                  <label className="field" htmlFor="field-bairro">
                    <span>Bairro</span>
                    <input
                      id="field-bairro"
                      placeholder="Seu bairro"
                      type="text"
                      value={bairro}
                      onChange={e => setBairro(e.target.value)}
                      required
                    />
                  </label>

                  <label className="field" htmlFor="field-estado">
                    <span>Estado</span>
                    <select
                      id="field-estado"
                      value={estado}
                      onChange={e => setEstado(e.target.value)}
                      required
                    >
                      <option value="SP">SP</option>
                      <option value="RJ">RJ</option>
                      <option value="MG">MG</option>
                    </select>
                  </label>
                </div>

                <button className="button button--primary full-button" type="submit">
                  Cadastrar e explorar
                </button>
              </form>
            </>
          )}
        </div>
      </section>
    </main>
  );
}