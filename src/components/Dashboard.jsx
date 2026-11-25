import React from "react";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <div className="brand ">
          <span className="brand-mark"><span></span></span>
          <span>Ludosys</span>
        </div>
        <nav>
          <button>
            <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m3 11 9-8 9 8"></path><path d="M5 10v10h14V10M9 20v-6h6v6"></path></svg>
            <span>Início</span>
          </button>
          <button>
            <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h12l2 4-2 4H6L4 7l2-4ZM6 11v10M18 11v10M9 15h6"></path></svg>
            <span>Pedidos</span>
          </button>
          <button>
            <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="3" width="16" height="18" rx="2"></rect><path d="M8 7h8M8 11h8M8 15h5"></path></svg>
            <span>Acervo</span>
          </button>
          <button className="active">
            <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"></rect><rect x="14" y="3" width="7" height="7" rx="1"></rect><rect x="3" y="14" width="7" height="7" rx="1"></rect><rect x="14" y="14" width="7" height="7" rx="1"></rect></svg>
            <span>Dashboard</span>
          </button>
          <button>
            <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3"></circle><path d="M3 20a6 6 0 0 1 12 0M16 4a3 3 0 0 1 0 6M17 14a5 5 0 0 1 4 5"></path></svg>
            <span>Clientes</span>
          </button>
          <button>
            <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3A1.7 1.7 0 0 0 10 3V2.8h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z"></path></svg>
            <span>Configurações</span>
          </button>
        </nav>
        <div className="admin-user">
          <div className="avatar">JS</div>
          <div>
            <strong>Jenny Silva</strong>
            <span>Administradora</span>
          </div>
          <button aria-label="Voltar ao catálogo">
            <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M10 17l5-5-5-5M15 12H3M15 4h5v16h-5"></path></svg>
          </button>
        </div>
      </aside>
      <main className="dashboard-main">
        <header className="dashboard-header">
          <div>
            <span className="eyebrow">Visão geral da operação</span>
            <h1>Dashboard</h1>
          </div>
          <div className="dashboard-tools">
            <div className="period-toggle">
              <button>Semana</button>
              <button className="active">Mês</button>
            </div>
            <button className="icon-button notification">
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"></path></svg>
              <span></span>
            </button>
            <div className="date-chip">18 Out, 2026</div>
          </div>
        </header>
        <button className="late-alert">
          <span className="alert-icon">!</span>
          <span>
            <strong>3 devoluções estão atrasadas</strong>
            <small>Revise os pedidos e entre em contato com os clientes.</small>
          </span>
          <em>Ver pedidos <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"></path></svg></em>
        </button>
        <section className="metrics-grid">
          <article className="metric-card">
            <div className="metric-label">
              <span>Faturamento</span>
              <i className="positive"></i>
            </div>
            <strong>R$ 18.420</strong>
            <small className="positive">+12,4% <span>vs mês anterior</span></small>
          </article>
          <article className="metric-card">
            <div className="metric-label">
              <span>Aluguéis ativos</span>
              <i className="positive"></i>
            </div>
            <strong>84</strong>
            <small className="positive">+8,2% <span>vs mês anterior</span></small>
          </article>
          <article className="metric-card">
            <div className="metric-label">
              <span>Atrasos</span>
              <i className="warning"></i>
            </div>
            <strong>3</strong>
            <small className="warning">-2 este mês <span>vs mês anterior</span></small>
          </article>
          <article className="metric-card">
            <div className="metric-label">
              <span>Inadimplentes</span>
              <i className="danger"></i>
            </div>
            <strong>7</strong>
            <small className="danger">+1 este mês <span>vs mês anterior</span></small>
          </article>
          <article className="metric-card">
            <div className="metric-label">
              <span>Assinaturas ativas</span>
              <i className="positive"></i>
            </div>
            <strong>126</strong>
            <small className="positive">+14,1% <span>vs mês anterior</span></small>
          </article>
        </section>
        <section className="dashboard-grid">
          <article className="panel city-panel">
            <div className="panel-heading">
              <div>
                <span className="eyebrow">Distribuição geográfica</span>
                <h2>Pedidos por cidade</h2>
              </div>
              <button>Ver relatório <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"></path></svg></button>
            </div>
            <div className="city-layout">
              <div className="city-visual" aria-label="São Paulo lidera pedidos, seguida por Santo André e São Bernardo">
                <div className="orb orb-1"><strong>48%</strong><span>São Paulo</span></div>
                <div className="orb orb-2"><strong>21%</strong><span>Santo André</span></div>
                <div className="orb orb-3"><strong>16%</strong><span>S. Bernardo</span></div>
                <div className="orb orb-4"><strong>9%</strong><span>S. Caetano</span></div>
              </div>
              <ol className="ranking">
                <li><b>1</b><span>Vila Mariana<small>São Paulo</small></span><strong>124</strong></li>
                <li><b>2</b><span>Mooca<small>São Paulo</small></span><strong>98</strong></li>
                <li><b>3</b><span>Centro<small>Santo André</small></span><strong>76</strong></li>
              </ol>
            </div>
          </article>
          <article className="panel activity-panel">
            <div className="panel-heading">
              <div>
                <span className="eyebrow">Hoje</span>
                <h2>Próximas retiradas</h2>
              </div>
              <button>Ver todas <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"></path></svg></button>
            </div>
            <div className="activity-list">
              <div>
                <span className="activity-time">14:30</span>
                <div><strong>Rafael Alves</strong><small>#LU-2841  Presencial</small></div>
                <button aria-label="Abrir pedido #LU-2841"><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"></path></svg></button>
              </div>
              <div>
                <span className="activity-time">16:00</span>
                <div><strong>Marina Costa</strong><small>#LU-2844  Motoboy</small></div>
                <button aria-label="Abrir pedido #LU-2844"><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"></path></svg></button>
              </div>
              <div>
                <span className="activity-time">18:30</span>
                <div><strong>Andr e9 Lima</strong><small>#LU-2847  Presencial</small></div>
                <button aria-label="Abrir pedido #LU-2847"><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"></path></svg></button>
              </div>
            </div>
          </article>
        </section>
        <section className="bottom-grid">
          <article className="panel chart-panel">
            <div className="panel-heading">
              <div>
                <span className="eyebrow">Últimos 7 dias</span>
                <h2>Aluguéis</h2>
              </div>
              <strong>+18,6%</strong>
            </div>
            <div className="bar-chart" aria-label="Gráfico de aluguéis nos últimos sete dias">
              <div><span style={{ height: "58%" }}></span><small>Seg</small></div>
              <div><span style={{ height: "80%" }}></span><small>Ter</small></div>
              <div><span style={{ height: "44%" }}></span><small>Qua</small></div>
              <div><span style={{ height: "92%" }}></span><small>Qui</small></div>
              <div><span style={{ height: "72%" }}></span><small>Sex</small></div>
              <div><span style={{ height: "86%" }}></span><small>Sáb</small></div>
              <div><span style={{ height: "67%" }}></span><small>Dom</small></div>
            </div>
          </article>
          <article className="panel popular-panel">
            <div className="panel-heading">
              <div>
                <span className="eyebrow">Ranking do mês</span>
                <h2>Mais alugados</h2>
              </div>
            </div>
            <div className="popular-row">
              <b>01</b>
              <img alt="" src="/photo-1629760946220-5693ee4c46ac" />
              <div>
                <strong>Reinos de Catan</strong>
                <small>Estratégia</small>
              </div>
              <span>42 aluguéis</span>
            </div>
            <div className="popular-row">
              <b>02</b>
              <img alt="" src="/photo-1547638375-ebf04735d792" />
              <div>
                <strong>Dados &amp; Destinos</strong>
                <small>Família</small>
              </div>
              <span>35 aluguéis</span>
            </div>
            <div className="popular-row">
              <b>03</b>
              <img alt="" src="/photo-1610890716171-6b1bb98ffd09" />
              <div>
                <strong>A Fortaleza</strong>
                <small>Aventura</small>
              </div>
              <span>28 aluguéis</span>
            </div>
          </article>
          <article className="panel maintenance-panel">
            <div className="panel-heading">
              <div>
                <span className="eyebrow">Acervo</span>
                <h2>Manutenções</h2>
              </div>
              <strong>8</strong>
            </div>
            <div className="donut">
              <div>
                <strong>8</strong>
                <span>jogos</span>
              </div>
            </div>
            <div className="legend">
              <span><i></i>Em reparo <b>5</b></span>
              <span><i></i>Aguardando peça <b>3</b></span>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}
