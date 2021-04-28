const vehicleMocks = [
  {
    id: 1,
    type: "hatchback car",
    brand: "TATA",
    model: "TIAGO",
    description: "compact hatchback",
  },
  { id: 2, type: "TRUCK", brand: "Mercedes Benz", model: "Arocs" },
];

export const resolver = {
  Query: {
    vehicles(root, { id }, context) {
      const results = id
        ? vehicleMocks.filter((p) => p.id == id)
        : vehicleMocks;

      return results.length > 0 ? results : [];
    },
  },
};
