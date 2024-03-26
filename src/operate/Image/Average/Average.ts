import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { AverageConfig } from './types';

/**
 * 平均値算出
 *
 * 複数の画像の平均値を計算することができる。統計情報の取得や複数の画像をブレンドするのに使用できる。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-average
 *
 * @param state gmのインスタンス(ステート)
 * @param config Averageのコンフィグ
 * @returns gmのインスタンス
 */
const Average: ImageManipulation<AverageConfig> = async (state, config) => {
  const {} = config;
  return state.average();
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.AVERAGE, Average);
export default Average;
