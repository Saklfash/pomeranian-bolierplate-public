import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
import { blockRouterMetaTextFundaments } from './TextFundaments/router-data';
import { blockRouterMetaData as Selectors } from './SelectorsAndCascade/router-data';
import { blockRouterMetaData as GoogleFonts } from './GoogleFonts/router-data';
import { blockRouterMetaData as CssAnimations } from './CssAnimations/router-data';
import { blockRouterMetaData as FloatsAndPositioning } from './FloatsAndPositioning/router-data';
import { blockRouterMetaData as FloatsAndPositioningExercise } from './FloatsAndPositioningExercise/router-data';
import { blockRouterMetaData as Colors } from './Colors/router-data';
import { blockRouterMetaData as Images } from './ImageFiles/router-data';
import { blockRouterMetaData as Backgrounds } from './Backgrounds/router-data';
import { blockRouterMetaData as CssFilters } from './CssFilter/router-data';
import { blockRouterMetaData as MediaFiles } from './MediaFiles/router-data';
import { blockRouterMetaData as BoxModel } from './BoxModel/router-data';
import { blockRouterMetaData as HTMLTables } from './HTMLTables/router-data';
import { blockRouterMetaData as TablesTennis } from './TablesTennis/router-data';
import { blockRouterMetaData as ArrayRendering } from './ArrayRendering/router-data';

export const blockRouterMetaData = [
  blockRouterMetaData121220231,
  Selectors,
  GoogleFonts,
  CssAnimations,
  FloatsAndPositioning,
  FloatsAndPositioningExercise,
  blockRouterMetaTextFundaments,
  Colors,
  Images,
  Backgrounds,
  CssFilters,
  MediaFiles,
  BoxModel,
  HTMLTables,
  TablesTennis,
  ArrayRendering,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
