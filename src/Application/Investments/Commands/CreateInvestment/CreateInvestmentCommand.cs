using MediatR;

namespace Application.Investments.Commands.CreateInvestment;

public class CreateInvestmentCommand : IRequest<int>
{
    public string Name { get; set; }
    public string StockSymbol { get; set; }
    public string Platform { get; set; }
}