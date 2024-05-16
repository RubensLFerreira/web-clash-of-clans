import "./Container.css";

export const Container: React.FC = () => {
  return (
    <div className="container">
      <div className="sub-container">
        <div className="sub-container-top">
          <input type="text" name="player" id="player" placeholder=" #" />
          <button>Pesquisar</button>
        </div>

        <div className="sub-container-middle"></div>

        <div className="sub-container-bottom">
          <input
            type="text"
            name="name"
            id="name"
            placeholder=" Digite seu nome"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder=" Enviar imagem para meu E-maill"
          />
          <button>Enviar</button>
        </div>
      </div>
    </div>
  );
};
