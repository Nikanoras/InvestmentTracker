using Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Application.Common.Interfaces;

public interface IApplicationDbContext
{
    DbSet<Investment> Investments { get; }
    Task<int> SaveChangesAsync(CancellationToken cancellationToken);
}