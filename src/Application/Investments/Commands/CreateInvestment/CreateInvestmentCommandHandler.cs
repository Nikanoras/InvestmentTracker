using Application.Common.Interfaces;
using Domain.Entities;
using MediatR;

namespace Application.Investments.Commands.CreateInvestment;

public class CreateInvestmentCommandHandler : IRequestHandler<CreateInvestmentCommand, int>
{
    private readonly IApplicationDbContext _context;

    public CreateInvestmentCommandHandler(IApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<int> Handle(CreateInvestmentCommand request, CancellationToken cancellationToken)
    {
        var entity = new Investment(request.Name, request.StockSymbol, request.Platform);

        _context.Investments.Add(entity);

        await _context.SaveChangesAsync(cancellationToken);

        return entity.Id;
    }
}