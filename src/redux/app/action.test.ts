import { createMockAppStore, createParamInLocalStorage } from '../../setupTests';
import rmgRuntime from '@railmapgen/rmg-runtime';
import rootReducer from '../index';
import { LocalStorageKey } from '../../constants/constants';
import { readParam } from './action';
import { vi } from 'vitest';
import * as paramUpdaterUtils from '../../util/param-updater-utils';

const realStore = rootReducer.getState();
const mockStore = createMockAppStore({ ...realStore });

const updateThemesSpy = vi.spyOn(paramUpdaterUtils, 'updateThemes');

describe('AppAction', () => {
    beforeAll(async () => {
        await rmgRuntime.ready();
    });

    describe('AppAction - readParam', () => {
        afterEach(() => {
            mockStore.clearActions();
            window.localStorage.clear();
        });

        beforeEach(() => {
            updateThemesSpy.mockImplementation(param => Promise.resolve(param));
        });

        it('Can read param from localStorage and save to store', async () => {
            createParamInLocalStorage('test-id');

            const result = await mockStore.dispatch(readParam('test-id'));
            expect(result).toBeTruthy();

            const actions = mockStore.getActions();
            expect(actions).toContainEqual({ type: 'app/setParamConfig', payload: { id: 'test-id' } });
            expect(actions).toContainEqual({
                type: 'param/setFullParam',
                payload: expect.objectContaining({ line_num: 'test-id' }),
            });
        });

        it('Can read param config and param from localStorage and save to store', async () => {
            const now = new Date().getTime();
            createParamInLocalStorage('test-id');
            rmgRuntime.storage.set(
                LocalStorageKey.PARAM_CONFIG_BY_ID + 'test-id',
                JSON.stringify({
                    lastModified: now,
                    name: 'My Masterpiece',
                })
            );

            const result = await mockStore.dispatch(readParam('test-id'));
            expect(result).toBeTruthy();

            const actions = mockStore.getActions();
            expect(actions).toContainEqual({
                type: 'app/setParamConfig',
                payload: { id: 'test-id', lastModified: now, name: 'My Masterpiece' },
            });
            expect(actions).toContainEqual({
                type: 'param/setFullParam',
                payload: expect.objectContaining({ line_num: 'test-id' }),
            });
        });

        it('Can return false if param in localStorage is invalid', async () => {
            rmgRuntime.storage.set(LocalStorageKey.PARAM_BY_ID + 'test-id', 'invalid');

            const result = await mockStore.dispatch(readParam('test-id'));
            expect(result).toBeFalsy();

            const actions = mockStore.getActions();
            expect(actions).toHaveLength(0);
        });

        it('Can return false if param not found in localStorage', async () => {
            const result = await mockStore.dispatch(readParam('test-id'));
            expect(result).toBeFalsy();

            const actions = mockStore.getActions();
            expect(actions).toHaveLength(0);
        });
    });
});
