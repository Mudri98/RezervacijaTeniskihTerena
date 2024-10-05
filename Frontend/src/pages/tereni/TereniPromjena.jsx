import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { RoutesNames } from "../../constants";
import moment from "moment";
import TerenService from "../../services/TerenService";
import { useEffect, useState } from "react";



export default function TereniPromjena(){

    const navigate = useNavigate();
    const routeParams = useParams();
    const [teren,setTeren] = useState({});

    async function dohvatiTeren(){
        const odgovor = await TerenService.getBySifra(routeParams.sifra);
        if(odgovor.greska){
            alert(odgovor.poruka);
            return;
        }
        setTeren(odgovor.poruka);
    }

    useEffect(()=>{
        dohvatiTeren();
    });

    async function promjena(teren){
        //console.log(teren);
        //console.log(JSON.stringify(teren));
        const odgovor = await TerenService.promjena(routeParams.sifra,teren);
        if(odgovor.greska){
            alert(odgovor.poruka);
            return;
        }
        navigate(RoutesNames.TEREN_PREGLED);
    }

    function obradiSubmit(e){ // e predstavlja event
        e.preventDefault();

        const podaci = new FormData(e.target);

        promjena({
            naziv: podaci.get('naziv'), // 'naziv' je došao iz atributa name od Form.Control
            vrstaPodloge: podaci.get('vrstaPodloge'),
            maxIgraca: parseInt(podaci.get('maxIgraca')),
        });

    }

    return(
        <Container>
            Promjena terena
            
            <Form onSubmit={obradiSubmit}>
                <Form.Group controlId="naziv">
                    <Form.Label>Naziv</Form.Label>
                    <Form.Control type="text" name="naziv" required 
                    defaultValue={teren.naziv} />
                </Form.Group>

                <Form.Group controlId="vrstaPodloge">
                    <Form.Label>VrstaPodloge</Form.Label>
                    <Form.Control type="text" name="vrstaPodloge"
                    defaultValue={teren.vrstaPodloge}/>
                </Form.Group>

                <Form.Group controlId="maxIgraca">
                    <Form.Label>Max igrača</Form.Label>
                    <Form.Control type="number" name="maxIgraca" 
                    defaultValue={teren.maxIgraca}/>
                </Form.Group>

            


                <hr />
                <Row>
                    <Col xs={6} sm={6} md={3} lg={6} xl={6} xxl={6}>
                    <Link to={RoutesNames.teren_PREGLED}
                    className="btn btn-danger siroko">
                    Odustani
                    </Link>
                    </Col>
                    <Col xs={6} sm={6} md={9} lg={6} xl={6} xxl={6}>
                    <Button variant="primary" type="submit" className="siroko">
                        Promjeni teren
                    </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}