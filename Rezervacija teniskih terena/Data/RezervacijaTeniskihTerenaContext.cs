using RezervacijaTeniskihTerena.Models;
using Microsoft.EntityFrameworkCore;

namespace RezervacijaTeniskihTerena.Data
{
    public class RezervacijaTeniskihTerenaContext : DbContext
    {

        public RezervacijaTeniskihTerenaContext(DbContextOptions<RezervacijaTeniskihTerenaContext> opcije) : base(opcije)
        {

        }

        public DbSet<Teren> Tereni { get; set; }
        public DbSet<Igrac> Igraci { get; set; }
        public DbSet<Termin> Termini { get; set; }
    }
}