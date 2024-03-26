import Factory from '../../utils/Factory';
import { JimpManipulation } from './types';

class JimpManipulationFactory extends Factory<JimpManipulation<any>> {}

export default new JimpManipulationFactory();
