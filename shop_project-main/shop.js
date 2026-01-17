async function getAllProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    return data;
  } catch (err) {
    return err.message;
  }
}

async function displayMyProducts() {
  const products = await getAllProducts();
  const row = document.getElementById("productsRow");

  products?.forEach((ele)=>{
 row.innerHTML+=`
    <div class="col-12 col-sm-6 col-md-3 mb-4 h-100">
      <div class="card h-100 p-4">
        <img src="${ele.image}" class="card-img-top" alt="${ele.title}">
        <h1 class="h4 m-2">
        ${ele.title}</h1>
        <div class="card-body d-flex flex-column">
          <h6 class="card-title">${ele.description}</h6>
          <p class="card-text mt-auto"><strong>${ele.price} USD</strong></p>
          <button class="btn btn-primary w-100">Add to Cart</button>
        </div>
      </div>
    </div>`  })


  console.log(row);

  console.log("products => ", products);
}

displayMyProducts();