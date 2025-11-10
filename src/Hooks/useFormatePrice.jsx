export const useFormatePrice = property => {
  const price = property.category.includes('Rental')
    ? `$${property.price.toLocaleString()}/mo`
    : `$${property.price.toLocaleString()}`;

  return price;
};
