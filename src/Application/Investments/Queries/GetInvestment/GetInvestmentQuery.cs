using MediatR;

namespace Application.Investments.Queries.GetInvestment;

public class GetInvestmentQuery : IRequest<GetInvestmentQueryResult>
{
    public int Id { get; set; }
}