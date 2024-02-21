import { List, Map } from 'immutable';

export default function concatElements(page1, page2) {
    // Concatenate the two arrays and convert them into a List
    return List(page1.concat(page2));
}

export default function mergeElements(page1, page2) {
    // Merge the two objects and convert them into a Map
    const mergedMap = Map(page1).merge(Map(page2));
    // Convert the Map values into a List
    return List(mergedMap.toList());
}
