namespace RezervacijaTeniskihTerena.Models
{
    public class Igrac: Entitet
    {

        public string? Ime { get; set; }
        public string? Prezime { get; set; }

        public string? Email { get; set; }

        public string? BrojMobitela { get; set; }
    }
}
