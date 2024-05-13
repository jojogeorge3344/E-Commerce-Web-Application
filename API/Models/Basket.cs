namespace API.Entities
{
    public class Basket //one to many relationship
    {
        public int Id { get; set; }
        public string BuyerId { get; set; }
        public List<BasketItem> Items { get; set; } = new();
        public void AddItem(Product product, int quantity)
        {
            if(Items.All(items=>items.ProductId!=product.Id))
            {
                Items.Add(new BasketItem { Product = product, Quantity = quantity });
            }

            var exixtingItem = Items.FirstOrDefault(items=>items.ProductId==product.Id);
            if (exixtingItem != null) exixtingItem.Quantity += quantity;
        }
        public void RemoveItem(int ProductId, int quantity)
        {
            var item = Items.FirstOrDefault(item => item.ProductId==ProductId);
            if(item ==null) return;
            item.Quantity -= quantity;
            if(item.Quantity==0) Items.Remove(item);
        }
    }
}
