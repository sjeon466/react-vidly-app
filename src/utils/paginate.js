import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  // items 12   pagesNumber 2  pageSize 5
  // start 6    end 10

  // items / pageSize = 2.4  -> round down (Math.floor) 2
  // minus 1 , then multiply by pageSize ( 2-1 ) * 5  = 5
  // add   (start % pageSize)

  //                     (2      -  1)  * 5
  const startIndex = (pageNumber - 1) * pageSize;
  //_.slice(items, startIndex);
  //_.take(items, pageSize);
  return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
}
