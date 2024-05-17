/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import "./container.css";
import axios from "axios";

interface Player {
  tag: string;
  name: string;
  townHallLevel: number;
  trophies: number;
}

const API_KEY =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjFjNGM2OWMxLTVkMDUtNDMyMC1hZTE3LThlNWZlZjE0YjI4MyIsImlhdCI6MTcxNTg3MDM5Niwic3ViIjoiZGV2ZWxvcGVyL2JjN2JiNTlkLWQ3MjctMjBlYy0zNmM3LTFlZWE4NTlkYmM4NyIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE2NC4xNjMuMTU5LjEyNiJdLCJ0eXBlIjoiY2xpZW50In1dfQ.P3wFusH9MLWoXAVtA37LORST7Ble-FY3EytF2Tn3UmXEp5_0eNQRNT0npgvHn6lzVkigfoA4C2njqB8tEknT8Q";

export const Container: React.FC = () => {
  const [inputPlayer, setInputPlayer] = useState<string>("");
  const [data, setData] = useState<Player | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  console.log(data);

  const fetchData = async (playerTag: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://api.clashofclans.com/v1/players/${encodeURIComponent(
          playerTag
        )}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
        }
      );

      setData(response.data);
    } catch (error: any) {
      setError(error.response ? error.response.data.message : error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputPlayer(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputPlayer.trim() !== "") {
      fetchData(`#${inputPlayer.trim()}`);
    }
  };

  return (
    <div className="container">
      <div className="sub-container">
        <div className="sub-container-top">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="player"
              id="player"
              value={inputPlayer}
              placeholder="Player Tag"
              onChange={handleChange}
            />
            <button type="submit">Pesquisar</button>
          </form>
        </div>

        <div className="sub-container-middle">
          {loading && <div className="loading-message">Carregando...</div>}
          {error && <div className="error-message">Houve um erro: {error}</div>}

          <div className="parent">
            <div className="div1">
              <img
                className="image-left-top"
                src="../../../public/liga.png"
                alt=""
              />
            </div>

            <div className="div2">
              <img
                className="image-left-middle"
                src="../../../public/skill1.png"
                alt=""
              />
              <img
                className="image-left-middle"
                src="../../../public/skill2.png"
                alt=""
              />
              <img
                className="image-left-middle"
                src="../../../public/skill3.png"
                alt=""
              />
            </div>

            <div className="div3">
              <p className="info-text">Campo vázio</p>
              <p className="info-text">Campo vázio</p>
              <p className="info-text">Campo vázio</p>
              <p className="info-text">Campo vázio</p>
              <p className="info-text">Campo vázio</p>
              <p className="info-text">Campo vázio</p>
              <p className="info-text">Campo vázio</p>
              <p className="info-text">Campo vázio</p>
              <p className="info-text">Campo vázio</p>
              <p className="info-text">Campo vázio</p>
              <p className="info-text">Campo vázio</p>
              <p className="info-text">Campo vázio</p>
            </div>

            <div className="div4">
              <img
                className="image-right-top"
                src="../../../public/clan.png"
                alt=""
              />
            </div>

            <div className="div5">
              <img
                className="image-rigth-bottom"
                src="../../../public/cv/cv-14.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="sub-container-bottom">
          <form>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Digite seu nome"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enviar imagem para meu E-mail"
            />
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};
