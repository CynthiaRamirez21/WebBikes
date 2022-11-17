import React from 'react'

export const Contacto = () =>
{
    return (
        <>
            <div className="container-contact100">
                <div className="wrap-contact100">
                    <form className="contact100-form validate-form">
                        <span className="contact100-form-title">
                            Contactanos
                            <br /><br />
                            <p>
                                Si deseas realizar una consulta personalizada de costos y demás, envíanos tu mensaje a través del siguiente formulario. A la brevedad nos estaremos comunicando con vos.
                            </p>
                        </span>

                        <div className="wrap-input100 validate-input" data-validate="Por favor ingrese su nombre">
                            <input className="input100" type="text" name="name" placeholder="Nombre completo" />
                            <span className="focus-input100"></span>
                        </div>
                        <div className="wrap-input100 validate-input" data-validate="Por favor ingrese su e-mail: e@a.x">
                            <input className="input100" type="text" name="email" placeholder="E-mail" />
                            <span className="focus-input100"></span>
                        </div>
                        <div className="wrap-input100 validate-input" data-validate="Por favor ingrese su teléfono">
                            <input className="input100" type="text" name="phone" placeholder="Teléfono" />
                            <span className="focus-input100"></span>
                        </div>
                        <div className="wrap-input100 validate-input" data-validate="Por favor ingrese su mensaje">
                            <textarea className="input100" name="message" placeholder="Su mensaje"></textarea>
                            <span className="focus-input100"></span>
                        </div>
                        <div className="container-contact100-form-btn">
                            <button className="contact100-form-btn">
                                <span>
                                    <i className="fa fa-paper-plane-o m-r-6" aria-hidden="true"></i>
                                    Enviar
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div id="dropDownSelect1"></div>

            <div className='mapaDiv'>
                <h2>Ubicación</h2>
                <br />
                <hr />
                <br />
                <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3252.964878363259!2d-68.23262243797798!3d-54.79414221956322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbc4c187362896801%3A0x8ffc5b9dd34dadb1!2sPionero%20Fueguino%204530%2C%20Ushuaia%2C%20Tierra%20del%20Fuego!5e0!3m2!1ses-419!2sar!4v1668643690287!5m2!1ses-419!2sar" width="600" height="450" className='mapa' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </>
    )
}