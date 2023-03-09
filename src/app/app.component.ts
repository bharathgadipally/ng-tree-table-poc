import { Component } from '@angular/core';
import { TriggerEventsNode } from './treetable/mocks/models';
import { Node, Options } from './treetable/models';
import { Task } from './treetable/mocks/models';
import {
  mockTreeAsArrayOfNodes,
  mockTreeAsArrayOfNodes1,
} from './treetable/mocks/mockTreeAsArrayOfNodes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-tree-table-poc';
  arrayOfNodesTree: Node<TriggerEventsNode>[] = mockTreeAsArrayOfNodes;
  opts: Options<TriggerEventsNode> = {
    customColumnOrder: [
      'startDateTime',
      'recalculatedDate',
      'description',
      'action',
      'calculationSummary',
      'authority',
    ],
    capitalisedHeader: true
  };
}
