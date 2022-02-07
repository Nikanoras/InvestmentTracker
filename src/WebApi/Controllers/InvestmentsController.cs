using Application.Investments.Commands.CreateInvestment;
using Application.Investments.Queries.GetInvestment;
using Application.Investments.Queries.GetInvestments;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class InvestmentsController : ApiControllerBase
{
    [HttpGet("{id}")]
    public async Task<IActionResult> GetInvestment(int id)
    {
        var result = await Mediator.Send(new GetInvestmentQuery { Id = id });

        return Ok(result);
    }
    
    [HttpGet]
    public async Task<IActionResult> GetInvestments()
    {
        var result = await Mediator.Send(new GetInvestmentsQuery());

        return Ok(result);
    }

    [HttpPost]
    public async Task<ActionResult<int>> AddInvestment([FromBody] CreateInvestmentCommand command)
    {
        return await Mediator.Send(command);
    }
}