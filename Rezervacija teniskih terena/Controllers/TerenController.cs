using RezervacijaTeniskihTerena.Data;
using RezervacijaTeniskihTerena.Models;
using Microsoft.AspNetCore.Mvc;

namespace RezervacijaTeniskihTerena.Controllers
{

    [ApiController]
    [Route("api/v1/[controller]")]
    public class TerenController : ControllerBase
    {

        // dependecy injection
        // 1. definiraš privatno svojstvo
        private readonly RezervacijaTeniskihTerenaContext _context;


        // dependecy injection
        // 2. proslijediš instancu kroz konstruktor
        public TerenController(RezervacijaTeniskihTerenaContext context)
        {
            _context = context;
        }


        // RUTE
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_context.Tereni);
        }


        [HttpGet]
        [Route("{sifra:int}")]
        public IActionResult GetBySifra(int sifra)
        {
            return Ok(_context.Tereni.Find(sifra));
        }

        [HttpPost]
        public IActionResult Post(Teren teren)
        {
            _context.Tereni.Add(teren);
            _context.SaveChanges();
            return StatusCode(StatusCodes.Status201Created, teren);
        }

        [HttpPut]
        [Route("{sifra:int}")]
        [Produces("application/json")]
        public IActionResult Put(int sifra, Teren teren)
        {
            var terenIzBaze = _context.Tereni.Find(sifra);

            // za sada ručno, kasnije Mapper
            terenIzBaze.Naziv = teren.Naziv;
            terenIzBaze.VrstaPodloge = teren.VrstaPodloge;
            terenIzBaze.MaxIgraca = teren.MaxIgraca;
            

            _context.Tereni.Update(terenIzBaze);
            _context.SaveChanges();

            return Ok(new { poruka = "Promjena uspješna" });

        }

        [HttpDelete]
        [Route("{sifra:int}")]
        [Produces("application/json")]
        public IActionResult Delete(int sifra)
        {
            var terenIzBaze = _context.Tereni.Find(sifra);
            _context.Tereni.Remove(terenIzBaze);
            _context.SaveChanges();
            return Ok(new { poruka = "Uspješno obrisano" });
        }



    }
}