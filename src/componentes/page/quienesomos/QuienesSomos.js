import React from 'react'

export const QuienesSomos = () =>
{
    return (
        // <>
        //     <div className='divQuienesSomos'>

        //         <img src="/images/img03.jpeg" alt="" className='imagen'></img>

        //     </div>

        //     <div className='textoQuienesSomos'>
        //         <ul> 
        //             <li>Nuestro emprendimiento surge a partir de la idea de tres ex compañeros de trabajo, decidimos unirnos para desarrollar este marca de biciletas "Rally". Todos somos residentes de la ciudad de USHUAIA, y siendo adeptos a las actividades al aire libre como el ciclismo de montaña, notamos que los únicos productos que ofrece el mercado local son importados, difícil de conseguir y costosos. Es por eso que decidimos poner en práctica este proyecto.</li>

        //             <li> Visión: Expandirnos en toda la provincia de Tierra del Fuego, Antártida e Islas del Atlántico Sur y ser reconocidos en el mercado local por fabricar una bicicleta mountain bike de alta calidad y durabilidad.</li>

        //             <li> Misión: Nuestra misión es ser una empresa local que fabrique bicicletas mountain bike (rodados 29) – modelos Rally -  de calidad y durabilidad orientados a la satisfacción del cliente mediante la innovación de diseños y el empleo de la mano de obra cualificada
        //             </li>
        //         </ul>
        //     </div>
        // </>


        <>
            <table>
                <tbody>
                    <tr>
                        <td className='columnaImg'>
                            <div className='divQuienesSomos'>

                                <img src="/images/img03.jpeg" alt="" className='imagen'></img>

                            </div>
                        </td>
                        <td>
                            <div className='textoQuienesSomos'>

                                <p>
                                    Nuestro emprendimiento surge a partir de la idea de tres ex compañeros de trabajo, decidimos
                                    unirnos para desarrollar este marca de biciletas "Rally". Notamos que los únicos productos que
                                    ofrece el mercado local son importados, difícil de conseguir y costosos. Es por eso que decidimos
                                    poner en práctica este proyecto.
                                </p>
                                <br />
                                <p>
                                    <h3>Visión:</h3><br />Expandirnos en toda la provincia de Tierra del Fuego, Antártida e Islas del
                                    Atlántico Sur y ser reconocidos en el mercado local por fabricar una bicicleta mountain
                                    bike de alta calidad y durabilidad.
                                </p>
                                <br />
                                <p>
                                    <h3>Misión:</h3><br />Nuestra misión es ser una empresa local que fabrique bicicletas mountain bike
                                    (rodados 29) – modelos Rally -  de calidad y durabilidad orientados a la satisfacción
                                    del cliente mediante la innovación de diseños y el empleo de la mano de obra cualificada
                                </p>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

        </>
    )
}