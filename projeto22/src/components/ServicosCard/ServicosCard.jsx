import "./ServicosCard.css";

function ServicosCard({icone, titulo, descriçao}) {
  return (
    <div className="servicos-card">
      <span>{icone}</span>
      <h3>{titulo}</h3>
      <p>{descriçao}</p>
    </div>
  );
}

export default ServicosCard
