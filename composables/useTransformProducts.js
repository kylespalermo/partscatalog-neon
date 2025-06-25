// composables/useTransformProducts.ts

export function useTransformProducts() {
  function transform(data) {
    if (!Array.isArray(data)) return [];    return data.map(item => {
      const value = item._custom?.value || item;

      const {
        key,
        type,
        model,
        manufacturer,
        country_of_origin,
        manufacturer_part_number,
        features = {},
        application = {},
      } = value;

        const flattenedFeatures = Object.fromEntries(
        Object.entries(features).map(([k, v]) => [k, v])
      );

      const applicationArray = Object.entries(application)
        .filter(([_, v]) => v === true || v === "TRUE")
        .map(([k]) => k.replace(/^app_/, ''));

      return {
        key,
        type,
        product: `${manufacturer} ${model}`,
        country_of_origin,
        manufacturer_part_number,
        ...flattenedFeatures,
        applications: applicationArray
      };
    });
  }

  return { transform };
}
