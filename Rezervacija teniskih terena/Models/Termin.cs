namespace RezervacijaTeniskihTerena.Models
{
    public class Termin: Entitet
    {
        public DateTime? Vrijeme { get; set; }

        public int? TrajanjeTermina { get; set; }
        public decimal? Cijena { get; set; }


    }
}
