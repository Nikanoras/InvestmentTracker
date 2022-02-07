namespace Domain.Entities;

public class Investment
{
    private Investment()
    {
    }

    public Investment(string name, string stockSymbol, string platform)
    {
        Name = name;
        StockSymbol = stockSymbol;
        Platform = platform;
    }

    public int Id { get; private set; }
    public string Name { get; private set; }
    public string StockSymbol { get; private set; }
    public string Platform { get; private set; }
    public ICollection<Transaction> Transactions { get; private set; } = new List<Transaction>();
}