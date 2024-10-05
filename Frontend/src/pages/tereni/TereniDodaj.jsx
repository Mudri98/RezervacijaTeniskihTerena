import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { RoutesNames } from "../../constants";
import TerenService from "../../services/TerenService";



export default function TereniDodaj(){

    const navigate = useNavigate();

    async function dodaj(teren){
        //console.log(teren);
        //console.log(JSON.stringify(teren));
        const odgovor = await TerenService.dodaj(teren);
        if(odgovor.greska){
            alert(odgovor.poruka);
            return;
        }
        navigate(RoutesNames.TEREN_PREGLED);
    }

    function obradiSubmit(e){ // e predstavlja event
        e.preventDefault();

        const podaci = new FormData(e.target);

        dodaj({
            naziv: podaci.get('naziv'), // 'naziv' je došao iz atributa name od Form.Control
            vrstaPodloge: podaci.get('vrstaPodloge'),
            maxIgraca: parseInt(podaci.get('maxIgraca'))
        });

    }

    return(
        <Container>
            Dodavanje novog terena
            
            <Form onSubmit={obradiSubmit}>
                <Form.Group controlId="naziv">
                    <Form.Label>Naziv</Form.Label>
                    <Form.Control type="text" name="naziv" required />
                </Form.Group>

                <Form.Group controlId="vrstaPodloge">
                    <Form.Label>Vrsta Podloge</Form.Label>
                    <Form.Control type="text" name="vrstaPodloge" required />
                </Form.Group>

                <Form.Group controlId="maxIgraca">
                    <Form.Label>Max Igraca</Form.Label>
                    <Form.Control type="number" name="maxIgraca" />
                </Form.Group>

               
                <hr />
                <Row>
                    <Col xs={6} sm={6} md={3} lg={6} xl={6} xxl={6}>
                    <Link to={RoutesNames.TEREN_PREGLED}
                    className="btn btn-danger siroko">
                    Odustani
                    </Link>
                    </Col>
                    <Col xs={6} sm={6} md={9} lg={6} xl={6} xxl={6}>
                    <Button variant="primary" type="submit" className="siroko">
                        Dodaj novi teren
                    </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}