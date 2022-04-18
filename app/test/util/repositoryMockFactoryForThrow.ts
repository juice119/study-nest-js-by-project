export const repositoryMockFactoryForThrow = jest.fn(() => ({
  findOne: jest.fn(() => {
    throw new Error();
  }),
  save: jest.fn(() => {
    throw new Error();
  }),
}));
