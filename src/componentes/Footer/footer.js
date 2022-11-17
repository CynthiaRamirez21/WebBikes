import React from 'react'

export const Footer = () =>
{
    return (
        <>
            <section className='footerSection'>
                <div className='divLinks'>
                    <div className='imgLinks'>
                        <img src='/images/socialMedia/Facebook.png' className='socialMediaIcon' />
                    </div>
                    <div className="textLinks">
                        facebook.com/bicicletas&nbsp;
                    </div>
                </div>

                <div className='divLinks'>
                    <div className='imgLinks'>
                        <img src='/images/socialMedia/Instagram.png' className='socialMediaIcon' />
                    </div>
                    <div className="textLinks">
                        instagram.com/bicicletas
                    </div>
                </div>

                <div className='divLinks'>
                    <div className='imgLinks'>
                        <img src='/images/socialMedia/Whatsapp.png' className='socialMediaIcon' />
                    </div>
                    <div className="textLinks">
                        +54 1444 1115&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                </div>
            </section>
            <br />
        </>
    )
}