import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [MatButtonModule, FlexLayoutModule, FormsModule],
    exports: [MatButtonModule, FlexLayoutModule, FormsModule]

})

export class MaterialModule {
}
