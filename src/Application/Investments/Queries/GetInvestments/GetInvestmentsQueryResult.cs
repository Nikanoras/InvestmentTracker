namespace Application.Investments.Queries.GetInvestments;

public class GetInvestmentsQueryResult
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string StockSymbol { get; set; }
    public string Platform { get; set; }
    public decimal Shares { get; set; }
    public decimal Invested { get; set; }
    public decimal PricePerShare { get; set; }
}