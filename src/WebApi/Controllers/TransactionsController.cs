using Application.Transactions.Commands.CreateTransaction;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers;

[Route("api/Investments/{investmentId:int}/[controller]")]
public class TransactionsController : ApiControllerBase
{
    [HttpPost]
    public async Task<ActionResult<int>> CreateTransaction([FromBody] CreateTransactionCommand command, int investmentId)
    {
        command.InvestmentId = investmentId;
        return await Mediator.Send(command);
    }
}