import { List, Map } from 'immutable';

export const concatElements = (page1, page2) => List([...page1, ...page2]);

export const mergeElements = (page1, page2) => {
    const mergedMap = Map({...page1, ...page2});
    return List(mergedMap.toList());
};
