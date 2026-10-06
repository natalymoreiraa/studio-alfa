import "./Main.css";
import ServicosCard from "../ServicosCard/ServicosCard";

const servicos = [
  {
    id: 1,
    icone: "👑",
    titulo: "Design de interface",
    descricao: "Telas claras, pensadas para o usuário",
  },
  {
    id: 2,
    icone: "👑",
    titulo: "Responsividade",
    descricao: "O mesmo site em qualquer tela",
  },
  {
    id: 3,
    icone: "👑",
    titulo: "Performance",
    descricao: "Sites rápidos e otimizados",
  },
];

function Main() {
  return (
    <main className="main">
      <section className="hero">
        <h1>Criamos sites que funcionam</h1>
        <p>
          Layouts responsivos, rápidos e acessíveis para o seu negócio crescer
          na web
        </p>
        <div className="hero-buttons">
          <a href="#orçamento" className="btn-primary">
            Peça um orçamento
          </a>
          <a href="#portfolio" className="btn-secondary">
            Ver portfólio
          </a>
        </div>
      </section>
      <section className="servico">
        <h2>Nossos serviços</h2>

        <div className="servicos-grid">
          {servicos.map((servico) => (
            <ServicosCard
              key={servico.id}
              icone={servico.icone}
              titulo={servico.titulo}
              descricao={servico.descricao}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
