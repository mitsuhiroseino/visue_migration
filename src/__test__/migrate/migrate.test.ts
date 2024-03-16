import migrate from 'src/migrate/migrate';

describe('migrate', () => {
  test('error', () => {
    const fn = () =>
      migrate({
        tasks: [
          {
            jobs: [],
          },
        ],
      });
    expect(fn).toThrow('Error!!!');
  });
});
