import axios from "axios";
import { useEffect, useState, useRef } from "react";

const action = async () => {
  const token = tokenResponse.data.accessToken;

  const exerciseResponse = await axios.get(
    "http://127.0.0.1:8000/api/anuncios",
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    },
  );

  console.log(exerciseResponse.data);

  const anuncio = exerciseResponse.data['headline', 'img', 'link'].entrada.anuncio;
  console.log(anuncio);

  return anuncio;
};

const FinalExam = () => {
  const [anuncio, setAnuncio] = useState(null);
  const effectCalled = useRef(false);

  useEffect(() => {
    if (effectCalled.current) return;
    effectCalled.current = true;

    action().then((_anuncio) => {
      setAnuncio(_anuncio);
    });
  }, []);

  return (
    <div className="flex flex-row justify-center bg-neutral-100 text-neutral-950">
      <div className="w-full max-w-4xl px-4 py-3">
        <h1 className="mb-0.5 text-2xl font-medium">Avaliação Final</h1>
        <p className="text-neutral-500 mb-2">Aqui está a resolução da questão 1.</p>
        <div className="font-mono h-9 flex flex-col justify-center">
          { anuncio ? <p>{anuncio}</p> : <p>Carregando...</p> }
        </div>
      </div>
    </div>
  );
};

export default FinalExam;
