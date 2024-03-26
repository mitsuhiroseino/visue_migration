import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { NoProfileConfig } from './types';

/**
 * プロファイルなし
 *
 * 画像からプロファイル情報を削除することができる。画像のメタデータからプロファイル情報を除去する。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-noProfile
 *
 * @param state gmのインスタンス(ステート)
 * @param config NoProfileのコンフィグ
 * @returns gmのインスタンス
 */
const NoProfile: ImageManipulation<NoProfileConfig> = async (state, config) => {
  const {} = config;
  return state.noProfile();
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.NO_PROFILE, NoProfile);
export default NoProfile;
