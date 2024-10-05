import { HttpService } from "./HttpService"


async function get(){
    return await HttpService.get('/Teren')
    .then((odgovor)=>{
        //console.table(odgovor.data);
        return odgovor.data;
    })
    .catch((e)=>{console.error(e)})
}

async function getBySifra(sifra){
    return await HttpService.get('/Teren/' + sifra)
    .then((odgovor)=>{
        return {greska: false, poruka: odgovor.data}
    })
    .catch((e)=>{
        return {greska: true, poruka: 'Ne postoji Teren!'}
    })
}

async function obrisi(sifra) {
    return await HttpService.delete('/Teren/' + sifra)
    .then((odgovor)=>{
        //console.log(odgovor);
       return odgovor;
    })
    .catch((e)=>{
        //console.log(e);
        return {greska: true, poruka: 'Teren se ne može obrisati!'}
    })
}

async function dodaj(Teren) {
    return await HttpService.post('/Teren',Teren)
    .then((odgovor)=>{
        return {greska: false, poruka: odgovor.data}
    })
    .catch((e)=>{
        return {greska: true, poruka: 'Teren se ne može dodati!'}
    })
}

async function promjena(sifra,Teren) {
    return await HttpService.put('/Teren/' + sifra,Teren)
    .then((odgovor)=>{
        return {greska: false, poruka: odgovor.data}
    })
    .catch((e)=>{
        return {greska: true, poruka: 'Teren se ne može promjeniti!'}
    })
}

export default{
    get,
    getBySifra,
    obrisi,
    dodaj,
    promjena
}