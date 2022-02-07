using Application.Common.Interfaces;
using Application.Investments.Queries.GetInvestment;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Application.Investments.Queries.GetInvestments;

public class GetInvestmentsQueryHandler : IRequestHandler<GetInvestmentsQuery, IEnumerable<GetInvestmentsQueryResult>>
{
    private readonly IApplicationDbContext _context;

    public GetInvestmentsQueryHandler(IApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<GetInvestmentsQueryResult>> Handle(GetInvestmentsQuery request,
        CancellationToken cancellationToken)
    {
        return await _context.Investments.Select(i => new GetInvestmentsQueryResult
        {
            Id = i.Id,
            Name = i.Name,
            Platform = i.Platform,
            StockSymbol = i.StockSymbol,
            Invested = i.Transactions.Sum(t => t.Shares * t.PricePerShare),
            Shares = i.Transactions.Sum(t => t.Shares),
            PricePerShare = i.Transactions.Sum(t => t.PricePerShare) > 0
                ? i.Transactions.Sum(t => t.PricePerShare) / i.Transactions.Count
                : 0
        }).ToListAsync(cancellationToken);
    }
}