import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunctionBasics } from './JsFunctionBasics/router-data';
import { blockRouterMetaData as blockRouterMetaDataHoisting } from './Hoisting/router-data';
import { blockRouterMetaData as blockRouterMetaDataHitTheMoleGame } from './HitTheMoleGame/router-data';
import { blockRouterMetaData as blockRouterMetaDataMemoGame } from './MemoGame/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  blockRouterMetaDataJsFunctionBasics,
  blockRouterMetaDataHoisting,
  blockRouterMetaDataHitTheMoleGame,
  blockRouterMetaDataMemoGame,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
