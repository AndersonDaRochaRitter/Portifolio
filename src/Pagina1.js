import React from 'react';
import img1 from '../src/img/SvgAnimação.svg';
import "./Pagina1.css";

function PaginaPrimaria() {
  return (
    <div>
      <p className="Titulo">Anderson da Rocha Ritter</p>
      <p className="Linha1">Alguma coisa HHH</p>
      <p className="Linha2">Descrição HHHHHHHHHHHHHHHHHHHH</p>
      <p className="Linha3">Mais HHHHHHHHHHHHHHHH</p>

        <img className="svgA" src={img1} alt={"Ilustração representando um hacker sentado mexendo no notebook."} data-tilt={""} />
      

    </div>
  );
}
export default PaginaPrimaria;