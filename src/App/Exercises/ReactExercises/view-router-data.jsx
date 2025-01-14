import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { Cwiczenie1MetaData } from './Cwiczenie1/router-data';
import { Cwiczenie2MetaData } from './Cwiczenie2/router-data';
import { Cwiczenie3MetaData } from './Cwiczenie3/router-data';
import { MoreOrLessMetaData } from './MoreOrLess/router-data';
import { MoreOrLessAdvancedMetaData } from './MoreOrLessAdvanced/router-data';
import { MaterialUIBasicElementsMetaData } from './MaterialUIBasicElements/router-data';
import { MUITemplateDashboardMetaData } from './MUITemplateDashboard/router-data';
import { ToDoListMetaData } from './ToDoList/router-data';
import { LocalDevAndFetchMetaData } from './LocalDevAndFetch/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  Cwiczenie1MetaData,
  Cwiczenie2MetaData,
  Cwiczenie3MetaData,
  MoreOrLessMetaData,
  MoreOrLessAdvancedMetaData,
  MaterialUIBasicElementsMetaData,
  MUITemplateDashboardMetaData,
  ToDoListMetaData,
  LocalDevAndFetchMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
