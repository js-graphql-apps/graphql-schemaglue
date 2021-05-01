import { users, addressList } from "../../DataModel/MockData";

export const resolver = {
  Query: {
    users(root, { id }, context) {
      const usrs = id ? users.filter((p) => p.id == id) : users;

      return usrs.length > 0 ? usrs : [];
    },
  },
  User: {
    address(root, { id }, ctx) {
      const add = addressList.find((a) => root.addressId == a.id);
      return add;
    },
  },
  Mutation: {
    addUser(root, args, ctx) {
      const addressId = Math.ceil(Math.random() * 1000);

      addressList.push({
        id: addressId,
        ...args.input.address,
      });

      const userId = Math.ceil(Math.random() * 1000);

      users.push({
        id: userId,
        ...args.input,
        addressId,
      });

      return users.find((u) => u.id == userId);
    },
  },
};
