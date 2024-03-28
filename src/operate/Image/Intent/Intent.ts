import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { IntentConfig } from './types';

/**
 * カラー管理操作
 *
 * 画像の処理目的を指定することができる。色変換やリサイズなどの処理方法を指定する。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-intent
 *
 * @param state gmのインスタンス(ステート)
 * @param config Intentのコンフィグ
 * @returns gmのインスタンス
 */
const Intent: ImageManipulation<IntentConfig> = (state, config) => {
  const { intentType } = config;
  return state.intent(intentType);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.INTENT, Intent);
export default Intent;
