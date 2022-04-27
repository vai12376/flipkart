/** @format */

import { Pipe, PipeTransform } from "@angular/core";
import { IProductData } from "../interfaces";

@Pipe({
  name: "filtersearch",
})
export class FiltersearchPipe implements PipeTransform {
  transform(items: Array<IProductData>, searchText: string) {
    if (!items.length) {
      return [];
    }

    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();
    return items.filter((it) => {
      return it.title.toLowerCase().includes(searchText);
    });
  }
}
