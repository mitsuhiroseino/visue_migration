import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { AuthenticateConfig } from './types';

/**
 * 認証
 *
 * 画像の認証を行うことができる。特定の画像が正当であるかどうかを確認できる。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-authenticate
 *
 * @param state gmのインスタンス(ステート)
 * @param config Authenticateのコンフィグ
 * @returns gmのインスタンス
 */
const Authenticate: ImageManipulation<AuthenticateConfig> = async (state, config) => {
  const { password } = config;
  return state.authenticate(password);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.AUTHENTICATE, Authenticate);
export default Authenticate;
