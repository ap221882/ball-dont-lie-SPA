import { useState } from 'react';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState, AppDispatch } from '../store';

/**
 * Selector and Dispatch hook for our RTK store having inherited type from store
 */
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

/**
 *
 * @param initialValue string
 * @returns a useState function having string as its type of state
 */
const useString = (initialValue: string) => useState<string>(initialValue);
export type UseStringValue = ReturnType<typeof useString>[0];
export type UseStringSetValue = ReturnType<typeof useString>[1];
