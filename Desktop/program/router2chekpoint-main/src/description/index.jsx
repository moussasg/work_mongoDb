import {React , useState} from 'react'
import notrecst from "../constant/const"
export default function Index() {
  const [selectb, setselectb] = useState(); // selectb ykone walou aprés ndiro dakhel el find
  const handc = e => { // ki tecliki 3la button handc
    setselectb(e); // 
  }; // selectb nutiliziweh lta7ta comme turnary opérator + {cst ndirolha.find(el=>el.bonde==selectb).bonde}
  return (
    <>
    {notrecst.map(el => ( // mapite 3la cst paroucrite b >el<
      <div key={el.bonde}> {/* ydkhole dakhel cst value de el.id = 1,2,3,*/}
      {/*le meme key nmedoh l handc ta7ta*/} 
      <button onClick={() => handc(el.bonde)}> 
           {el.name} {/* dakhel el button mktob 1,2,3*/}
        </button>
        </div>
      ))}
      {selectb ? ( // si selectb est true existe//// 
        <div id="details"> {/*mapite 3la cst*/}
{/* criyit 'el' bch yparcouri */}
{/*find pour trouver objet dans 'cst' qui a le meme id que button séléctioné(selectb)*/}
{/* el.id===selectb / svt dire on stokent  les valuers de id dans selectb */ }
          {notrecst.find( el => el.bonde === selectb).bonde}
        </div>
      ) : (
        <div id="details"></div>
      )}
    </>
  )
}