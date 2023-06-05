const baseUrl = 'http://127.0.0.1:8000/api';
const headers = {
  Accept: 'application/json',
};

export const getPosts = async (prefix = "") => {
  const res = await fetch(`${baseUrl}${prefix}/posts`);

  return res.json();
};

export const getPost = async (id, prefix = "") => {
  const res = await fetch(`${baseUrl}${prefix}/posts/show/${id}`);

  return res.json();
};


export const getProducts = async (prefix = "") => {
  const res = await fetch(`${baseUrl}${prefix}/products`);

  return res.json();
};

export const getProduct = async (id, prefix = "") => {
  const res = await fetch(`${baseUrl}${prefix}/products/show/${id}`);

  return res.json();
};



export const getAgencies = async (prefix = "") => {
  const res = await fetch(`${baseUrl}${prefix}/agencies`);

  return res.json();
};

export const getAgency = async (id) => {
  const res = await fetch(`${baseUrl}/agencies/show/${id}`);

  return res.json();
};



export const getCategories = async (prefix = "") => {
  const res = await fetch(`${baseUrl}${prefix}/categories`);

  return res.json();
};

export const getCategory = async (id, prefix = "") => {
  const res = await fetch(`${baseUrl}${prefix}/categories/${id}`);

  return res.json();
};



export const getDiscounts = async (prefix = "") => {
  const res = await fetch(`${baseUrl}${prefix}/discounts`);

  return res.json();
};

export const getDiscount = async (id, prefix = "") => {
  const res = await fetch(`${baseUrl}${prefix}/discounts/show/${id}`);

  return res.json();
};




export const getSliders = async (prefix = "") => {
  const res = await fetch(`${baseUrl}${prefix}/sliders`);

  return res.json();
};
export const getSlider = async (id, prefix = "") => {
  const res = await fetch(`${baseUrl}${prefix}/sliders/show/${id}`);

  return res.json();
};



export const getPremissions = async () => {
  const res = await fetch("http://127.0.0.1:8000/api/admin/premissions");

  return res.json();
};



export const getRoles = async () => {
  const res = await fetch(`http://127.0.0.1:8000/api/admin/roles`);

  return res.json();
};