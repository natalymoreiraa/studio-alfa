import "./Main.css";

function Main() {
  return (
    <main className="Main">
      <section className="hero">
        <h1>Criamos sites que funcionam</h1>
        <p>
          Layouts responsivos, rápidos e acessiveis para o seu negócio crescer
          na web.
        </p>

        <div className="hero-buttons">
          <a href="#orçamento" className="btn-primary">
            Peça um orçamento
          </a>
          <a href="#portifolio" className="btn-secondary">
            "Ver portifólio"
          </a>
        </div>
      </section>
      <section className="serviço">
        <h2>Nossos serviços</h2>
      </section>

      <div className="serviços-grid">
        <div className="servico-card">
          <span>​🤮</span>
          <h3>Design de interface</h3>
          <p>Telas claras, pensadas para o usuário</p>
        </div>
        <div className="servico-card">
          <span>​🤮</span>
          <h3>Design de interface</h3>
          <p>Telas claras, pensadas para o usuário</p>
        </div>
        <div className="servico-card">
          <span>😍​</span>
          <h3>Responsividade</h3>
          <p>O mesmo site em qualquer tela</p>
        </div>
        <div className="servico-card">
          <span>👌​</span>
          <h3>Performance</h3>
          <p>Páginas leves que carregam rápido.</p>
        </div>
      </div>
    </main>
  );
}

export default Main;
