/**
 * Copyright 2017 The Mifos Initiative.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {type} from "../../../util";
import {Action} from "@ngrx/store";
import {Catalog} from "../../../../services/catalog/domain/catalog.model";

export const LOAD_ALL = type('[Catalog] Load All');
export const LOAD_ALL_COMPLETE = type('[Catalog] Load All Complete');

export class LoadAllAction implements Action {
  readonly type = LOAD_ALL;

  constructor() { }
}

export class LoadAllCompleteAction implements Action {
  readonly type = LOAD_ALL_COMPLETE;

  constructor(public payload: Catalog[]) { }
}

export type Actions
  = LoadAllAction
  | LoadAllCompleteAction;
