import operate, { CONTENT_TYPE, OPERATION_TYPE, OperationParams } from 'src/operate';

describe('operate', () => {
  test('_contentType=text', async () => {
    const content = 'ABCDEFGH';
    const config = { type: OPERATION_TYPE.REPLACE, patterns: 'ABC', replacement: 'abc' };
    const params: OperationParams = { _contentType: CONTENT_TYPE.TEXT };

    const result = await operate(content, config, params);

    expect(result).toEqual({ content: 'abcDEFGH', results: [config] });
  });
});
