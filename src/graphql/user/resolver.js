const userMocks = [
  { id: 1, name: "Paul bryant", dob: "1978-01-01" },
  { id: 2, name: "Ning yang", dob: "1988-05-01" },
  { id: 3, name: "Rachel Simpson", dob: "1990-08-01" },
];

export const resolver = {
  Query: {
    users(root, { id }, context) {
      const results = id ? userMocks.filter((p) => p.id == id) : userMocks;

      return results.length > 0 ? results : [];
    },
  },
};
