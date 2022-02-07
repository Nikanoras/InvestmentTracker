using Application.Common.Interfaces;
using Domain.Entities;
using MediatR;

namespace Application.Transactions.Commands.CreateTransaction;

public class CreateTransactionCommandHandler : IRequestHandler<CreateTransactionCommand, int>
{
    private readonly IApplicationDbContext _context;

    public CreateTransactionCommandHandler(IApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<int> Handle(CreateTransactionCommand request, CancellationToken cancellationToken)
    {
        var investment = await _context.Investments.FindAsync(new object?[] { request.InvestmentId }, cancellationToken);

        if (investment == null)
        {
            throw new Exception("Not found");
        }

        var transaction = new Transaction(request.Shares, request.PricePerShare, request.PurchasedOn);
        
        investment.Transactions.Add(transaction);
        await _context.SaveChangesAsync(cancellationToken);

        return transaction.Id;
    }
}