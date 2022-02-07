namespace Domain.Entities;

public class Transaction
{
    private Transaction()
    {
    }

    public Transaction(decimal shares, decimal pricePerShare, DateTime purchasedOn)
    {
        Shares = shares;
        PricePerShare = pricePerShare;
        PurchasedOn = purchasedOn;
    }

    public int Id { get; private set; }
    public decimal Shares { get; private set; }
    public decimal PricePerShare { get; private set; }
    public DateTime PurchasedOn { get; private set; }
}