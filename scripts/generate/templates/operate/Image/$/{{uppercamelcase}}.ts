import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { {{{uppercamelcase}}}Config } from './types';

/**
 * {{{description}}}
 * @param state gmのインスタンス(ステート)
 * @param config {{{uppercamelcase}}}のコンフィグ
 * @returns gmのインスタンス
 */
const {{{uppercamelcase}}}: ImageManipulation<{{{uppercamelcase}}}Config> = async (state, config) => {
  const { {{{args}}} } = config;
  return state.{{{lowercamelcase}}}({{{args}}});
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.{{{snakecase}}}, {{{uppercamelcase}}});
export default {{{uppercamelcase}}};
