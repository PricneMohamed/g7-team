async function homeFetch() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    console.log("data ", data);
    return data;
  } catch (err) {
    return err.message;
  }
}

// homeFetch()

async function showProducts() {
  const products = await homeFetch();
  let parent = document.querySelector(".parent");
  let jewelry = document.querySelector(".jewelry");

  const menfiltering = products?.filter((ele) => {
    return ele?.category === "men's clothing";
  });

  menfiltering?.forEach((ele, index) => {
    parent.innerHTML += `
    <div class="col-md-4">
    <img src='${ele?.image}' class="img-fluid rounded shadow-sm small-img" alt="Hero Small 1">
    </div>
    `;
  });

  const jewelryfiltering = products?.filter((ele) => {
    return ele?.category === "jewelery";
  });

  jewelryfiltering?.forEach((ele, index) => {
    jewelry.innerHTML += `
    <div class="col-md-4">
    <img src='${ele?.image}' class="img-fluid rounded shadow-sm small-img" alt="Hero Small 1">
    </div>
    `;
  });
}

showProducts();
