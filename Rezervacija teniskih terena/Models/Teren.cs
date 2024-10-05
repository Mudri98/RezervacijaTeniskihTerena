namespace RezervacijaTeniskihTerena.Models
{
    public class Teren: Entitet
    {
        public string? Naziv {  get; set; }

        public string? VrstaPodloge { get; set; }
        public int? MaxIgraca { get; set; }

    }
}
