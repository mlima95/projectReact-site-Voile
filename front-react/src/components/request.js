import React from 'react';
import Moment from 'moment';
import 'moment/locale/fr'
import '../css/request.css';

let parse = require('html-react-parser');

export default function Listrequest(props) {
    Moment.locale("fr");
    return (
        <div className="card">
            {console.log(props.data)}
            {props.data ?
                <div style={{ flexDirection: "row", display: "flex", width: "100%" }}>
                    <div className="dataTitle">
                        <h3>{props.data.title}</h3>
                        <h5 style={{ marginTop: "2px" }}>{Moment(props.data.activityStart).format('L LT')} - {Moment(props.data.activityEnd).format('L LT')}</h5>
                    </div>
                    <div style={{ width: '50%' }}>
                    
                        <h5 style={{ justifyContent: "center", alignItems: "center", display: "flex" }}>Equipement : {props.data.equipment}</h5>
                    </div>
                    <div className="status">
                        {props.data.status == "En cours" &&
                            <h5 style={{ color: "orange", display: "flex", justifyContent: "flex-end" }}>Status : {props.data.status}</h5>
                        }

                        {props.data.status == "Accepté" &&
                            <h5 style={{ color: "green", display: "flex", justifyContent: "flex-end" }}>{props.data.status}</h5>
                        }
                        {props.data.status == "Refusé" &&
                            <h5 style={{ color: "red", display: "flex", justifyContent: "flex-end" }}>{props.data.status}</h5>
                        }
                        <button className="btnItem"><a  className="linkItem"  href={`/request/${props.data._id}`}>Demande détaillée</a></button>
                    </div>
                </div>
                :
                <div><h3>Besoin de faire une nouvelle demande ?</h3>
                    <button className="btnFullPage" onClick={() => window.location = "/formRequest"}>Nouvelle demande</button>
                </div>
            }
        </div>

    );
}