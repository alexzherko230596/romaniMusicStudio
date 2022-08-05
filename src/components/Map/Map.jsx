import React from "react";
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import TitleBlock from "../TitleBlock/TitleBlock";
import classes from './Map.module.scss'
import facebook from '../../img/facebook.svg'
import instagram from '../../img/instagram.svg'
import telegram from '../../img/telegram.svg'

const Map = () => {
    return(
        <div className={classes.map} id = 'BlockToScrollMap'>
            <div className="g-container">
                <TitleBlock title = {'карта'}/>
                <div className={classes.map__wrapper}>
                    <div className={classes.map__wrapper__map}>
                        <MapContainer 
                            style = {{height: '100%', width: '100%'}}
                            className = {classes.div}
                            center = {[52.1779821, 20.9956589]}
                            zoom={15}
                            scrollWheelZoom = {false}>
                            <TileLayer 
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                                <Marker
                                position={[52.1779821, 20.9956589]}>

                                </Marker>
                        </MapContainer>
                    </div>
                    <div className={classes.map__wrapper__address}>
                        <p className={classes.map__wrapper__address_title}>Адрес:</p>
                        <div className={classes.map__wrapper__address__mainInfo}>
                            <p className={classes.map__wrapper__address__mainInfo_element}>Warszawa</p>
                            <p className={classes.map__wrapper__address__mainInfo_element}><a href="https://goo.gl/maps/sSd9tg1KDwFmuM1U6" target="_blank" rel="noreferrer">Postępu 11, 02-677</a></p>
                            <p className={classes.map__wrapper__address__mainInfo_element}>Piętro -1</p>
                            <p className={classes.map__wrapper__address__mainInfo_element}><a href="tel: +48 507 538 675">+48 507 538 675</a></p>
                        </div>
                        <div className={classes.map__wrapper__address__social}>
                            <a href={'https://t.me/studio_romani'} target="_blank" rel="noreferrer" className={classes.map__wrapper__address__social__link}>
                                <img src={telegram} alt='telegram' className={classes.map__wrapper__address__social__link_img}/>
                            </a>
                            <a href={'https://www.facebook.com/profile.php?id=100077656080031'} target="_blank" rel="noreferrer" className={classes.map__wrapper__address__social__link}>
                                <img src={facebook} alt='facebook' className={classes.map__wrapper__address__social__link_img}/>
                            </a>
                            <a href={'https://www.instagram.com/studio_romani/'} target="_blank" rel="noreferrer" className={classes.map__wrapper__address__social__link}>
                                <img src={instagram} alt='instagram' className={classes.map__wrapper__address__social__link_img}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Map