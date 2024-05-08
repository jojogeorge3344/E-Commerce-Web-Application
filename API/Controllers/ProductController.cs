using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {
private readonly StoreContext _storeContext;
        public ProductController(StoreContext storeContext)
        {
            _storeContext = storeContext;
        }

        [HttpGet(Name = "GetAllProducts")]
        public async Task<ActionResult<List<Product>>> GetProducts()
        {
            return await _storeContext.Products.ToListAsync();
        }

        [HttpGet("{id}", Name = "GetProduct")]
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            return await _storeContext.Products.FindAsync(id);
        }
    }
}
