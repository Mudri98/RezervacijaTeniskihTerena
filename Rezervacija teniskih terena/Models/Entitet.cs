using System.ComponentModel.DataAnnotations;

namespace RezervacijaTeniskihTerena.Models
{
    public abstract class Entitet
    {
        [Key]
        public int Sifra { get; set; }
    }
}