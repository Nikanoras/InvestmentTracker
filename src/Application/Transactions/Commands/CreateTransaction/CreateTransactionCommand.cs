using MediatR;

namespace Application.Transactions.Commands.CreateTransaction;

public class CreateTransactionCommand : IRequest<int>
{
    public int InvestmentId { get; set; }
    public decimal PricePerShare { get; set; }
    public decimal Shares { get; set; }
    public DateTime PurchasedOn { get; set; }
}