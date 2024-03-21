import migrate from 'src/migrate/migrate';
import { OperationParams } from 'src/operate';

describe('migrate', () => {
  test('error', () => {
    const fn = () =>
      migrate({
        tasks: [
          {
            jobs: [
              {
                template: 'abc',
                outputPath: 'ABC.txt',
              },
            ],
          },
        ],
      });
    expect(fn).toThrow('Error!!!');
  });
});
