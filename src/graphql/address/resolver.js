import { addressList } from '../../DataModel/MockData'

export const resolver = {
  Query: {
    addresses(root, { id }, context) {
      const results = id
        ? addressList.filter((p) => p.id == id)
        : addressList;

      return results.length > 0 ? results : [];
    },
  },
};
