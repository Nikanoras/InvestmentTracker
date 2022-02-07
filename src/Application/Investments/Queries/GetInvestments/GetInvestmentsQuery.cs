using Application.Investments.Queries.GetInvestment;
using MediatR;

namespace Application.Investments.Queries.GetInvestments;

public class GetInvestmentsQuery : IRequest<IEnumerable<GetInvestmentsQueryResult>>
{
    
}