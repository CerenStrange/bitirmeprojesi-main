import React, { useEffect, useState } from 'react'
import Burfasmenü from '../data/Burfasmenü'
import { v4 as uuidv4 } from 'uuid';

function Menuler() {
    
      
    

    return (
        <>
       
            <div className='card text-center '>
                <h1>MENÜLER</h1>
                <h4>Tesislere göre alfabetik olarak sıralanmıştır</h4>
            </div>
            <br />
            <div className='row row-cols-1 row-cols-md-4 g-4'>
                {Burfasmenü.map(item => (
                    <div key={uuidv4()} className="card ">
                        <div className='card-header '>
                            <h2>{item.subeadi}</h2>
                        </div>
                        <div className='card-body '>
                        <h4 className='card-title text-center '> {item.kategoriadi}</h4>
                        <p className='text-center '> {item.urunadi}</p>
                        <p>{item.urunnotu}</p>
                        <p>{item.fiyat} TL</p>
                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}

export default Menuler