export const useProducts = () => {
  const products = useState("products", () => null);

  const { data, error } = useAsyncData("products", () => 
    $fetch("/api/all_products"),
    { server: true } // Ensures it only runs on the server during SSR
  );

  watchEffect(() => {
    if (data.value) {
      products.value = data.value;
    }
  });

  return { products, error };
};
