import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { WaveConfig } from './types';

/**
 * 波
 *
 * 画像に波紋効果を追加することができる。指定した波形や振幅で画像を歪ませる。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-wave
 *
 * @param state gmのインスタンス(ステート)
 * @param config Waveのコンフィグ
 * @returns gmのインスタンス
 */
const Wave: ImageManipulation<WaveConfig> = async (state, config) => {
  const { amplitude, wavelength } = config;
  return state.wave(amplitude, wavelength);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.WAVE, Wave);
export default Wave;
