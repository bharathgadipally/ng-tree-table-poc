import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { TreetableComponent } from './component/treetable.component';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
export { Node, Options} from './models';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    TreetableComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatSelectModule,
    MatOptionModule,
    FormsModule,
    MatCheckboxModule
  ],
  exports: [
    TreetableComponent
  ]
})
export class TreetableModule { }
