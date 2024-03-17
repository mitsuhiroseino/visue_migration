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
                outputPath: '',
                operations: {
                  type: 'edit',
                  editContent: async (content: string, params: OperationParams) => {
                    throw 'Error!!!';
                  },
                },
              },
            ],
          },
        ],
      });
    expect(fn).toThrow('Error!!!');
  });
});
