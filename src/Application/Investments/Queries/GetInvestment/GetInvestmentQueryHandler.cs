using Application.Common.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Application.Investments.Queries.GetInvestment;

public class GetInvestmentQueryHandler : IRequestHandler<GetInvestmentQuery, GetInvestmentQueryResult>
{
    private readonly IApplicationDbContext _context;

    public GetInvestmentQueryHandler(IApplicationDbContext context)
    {
        _context = context;
    }
    public async Task<GetInvestmentQueryResult> Handle(GetInvestmentQuery request, CancellationToken cancellationToken)
    {
        var entity = await _context.Investments.FindAsync(request.Id);
        
        return new GetInvestmentQueryResult
        {
            Name = entity.Name,
            StockSymbol = entity.StockSymbol,
            Platform = entity.Platform
        };
    }
}