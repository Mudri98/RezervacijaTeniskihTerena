import { Button, Container, Table } from "react-bootstrap";
import TerenService from "../../services/TerenService";
import { useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";
import { GrValidate } from "react-icons/gr";
import { RoutesNames } from "../../constants";
import { Link, useNavigate } from "react-router-dom";



export default function TereniPregled(){

    const[tereni,setTereni] = useState();

    const navigate = useNavigate();

    async function dohvatiTerene() {

        // zaustavi kod u Chrome consoli i tamo se može raditi debug
        //debugger;
        
        await TerenService.get()
        .then((odgovor)=>{
            //console.log(odgovor);
            setTereni(odgovor);
        })
        .catch((e)=>{console.log(e)});

    }

    useEffect(()=>{
        dohvatiTerene();
    },[]);


    async function obrisiAsync(sifra) {
        const odgovor = await TerenService.obrisi(sifra);
        //console.log(odgovor);
        if(odgovor.greska){
            alert(odgovor.poruka);
            return;
        }
        dohvatiTerene();
    }

    function obrisi(sifra){
        obrisiAsync(sifra);
    }


    return(
        <Container>
            <Link to={RoutesNames.TEREN_NOVI}>Dodaj novi teren</Link>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Naziv</th>
                        <th>Vrsta Podloge</th>
                        <th>Max Igraca</th>
                    </tr>
                </thead>
                <tbody>
                    {tereni && tereni.map((teren,index)=>(
                        <tr key={index}>
                            <td>{teren.naziv}</td>
                            <td>{teren.vrstaPodloge}</td>
                            <td>{teren.maxIgraca}</td>
                            
                           
                            <td>
                            <Button
                                variant="primary"
                                onClick={()=>navigate(`/tereni/${teren.sifra}`)}>
                                    Promjeni
                                </Button>
                                &nbsp;&nbsp;&nbsp;
                                <Button
                                variant="danger"
                                onClick={()=>obrisi(teren.sifra)}>
                                    Obriši
                                </Button>

                               
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    )

}