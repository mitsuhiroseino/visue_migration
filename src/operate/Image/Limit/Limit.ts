import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { LimitConfig } from './types';

/**
 * 制限
 *
 * 画像処理に対するリソースの制限を設定することができる。メモリやCPUの使用量、処理速度などを制御する。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-limit
 *
 * @param state gmのインスタンス(ステート)
 * @param config Limitのコンフィグ
 * @returns gmのインスタンス
 */
const Limit: ImageManipulation<LimitConfig> = async (state, config) => {
  const { limitType, val } = config;
  return state.limit(limitType, val);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.LIMIT, Limit);
export default Limit;
