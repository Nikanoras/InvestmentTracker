using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Persistence.Configurations;

public class InvestmentConfiguration: IEntityTypeConfiguration<Investment>
{
    public void Configure(EntityTypeBuilder<Investment> builder)
    {
    }
}
