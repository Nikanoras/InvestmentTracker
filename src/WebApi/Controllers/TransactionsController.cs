using Application.Transactions.Commands.CreateTransaction;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers;

[Route("api/Investments/{id:int}/[controller]")]
public class TransactionsController : ApiControllerBase
{
    [HttpPost("")]
    public async Task<ActionResult<int>> CreateTransaction([FromBody] CreateTransactionCommand command)
    {
        return await Mediator.Send(command);
    }
}