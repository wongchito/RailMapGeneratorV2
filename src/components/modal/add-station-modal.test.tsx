import { BranchStyle, RmgStyle, SidePanelMode, StationDict } from '../../constants/constants';
import { getBranches } from '../../redux/helper/graph-theory-util';
import rootReducer from '../../redux';
import { createTestStore } from '../../setupTests';
import AddStationModal from './add-station-modal';
import { render } from '../../test-utils';
import { fireEvent, screen, within } from '@testing-library/react';
import { vi } from 'vitest';

const mockStationList = {
    linestart: {
        localisedName: { en: 'LEFT END' },
        parents: [],
        children: ['stn1', 'stn5'],
        branch: { left: [], right: [BranchStyle.through, 'stn5'] },
    },
    stn1: {
        localisedName: { zh: '車站1', en: 'Station 1' },
        parents: ['linestart'],
        children: ['stn2'],
        branch: { left: [], right: [] },
    },
    stn2: {
        localisedName: { zh: '車站2', en: 'Station 2' },
        parents: ['stn1', 'stn5'],
        children: ['stn3'],
        branch: { left: [BranchStyle.through, 'stn5'], right: [] },
    },
    stn3: {
        localisedName: { zh: '車站3', en: 'Station 3' },
        parents: ['stn2'],
        children: ['stn4'],
        branch: { left: [], right: [] },
    },
    stn4: {
        localisedName: { zh: '車站4', en: 'Station 4' },
        parents: ['stn3'],
        children: ['lineend'],
        branch: { left: [], right: [] },
    },
    stn5: {
        localisedName: { zh: '車站5', en: 'Station 5' },
        parents: ['linestart'],
        children: ['stn2'],
        branch: { left: [], right: [] },
    },
    lineend: {
        localisedName: { en: 'RIGHT END' },
        parents: ['stn4'],
        children: [],
        branch: { left: [], right: [] },
    },
} as any as StationDict;

const branches = getBranches(mockStationList);

const realStore = rootReducer.getState();

describe('AddStationModal', () => {
    /**
     * stn1 - stn2 - stn3 - stn4
     *        /
     *   stn5
     */

    describe('AddStationModal - General', () => {
        const mockStore = createTestStore({
            param: {
                ...realStore.param,
                stn_list: mockStationList,
            },
            helper: {
                ...realStore.helper,
                branches,
            },
        });
        const setup = () => render(<AddStationModal isOpen={true} onClose={vi.fn()} />, { store: mockStore });

        it('Can render where dropdown as expected', () => {
            setup();

            const fields = screen.getAllByRole('group');
            expect(fields.length).toBe(3); // where, prep, pivot

            expect(within(fields[0]).getAllByRole('option')).toHaveLength(2);
            expect(within(fields[0]).getByText(/main/i)).not.toBeNull();
            expect(within(fields[0]).getByText(/branch/i)).not.toBeNull();
        });

        it('Can render from and to dropdowns for main line as expected', () => {
            setup();

            const fields = screen.getAllByRole('group');

            // 4 stations in main line + please select
            expect(within(fields[2]).getAllByRole('option')).toHaveLength(5);
            expect(within(fields[2]).queryByText(/Station 5/)).toBeNull();
        });

        it('Submit button is disabled by default (without selection)', () => {
            setup();

            expect(screen.getByDisplayValue(/Please select/)).not.toBeNull();
            expect(screen.getByText('Confirm')).toBeDisabled();

            fireEvent.change(screen.getAllByRole('combobox')[2], { target: { value: 'stn3' } });

            expect(screen.getByText('Confirm')).not.toBeDisabled();
        });

        it('Can reset pivot selection when where is changed', () => {
            setup();

            fireEvent.change(screen.getAllByRole('combobox')[2], { target: { value: 'stn3' } });
            expect(screen.queryByDisplayValue(/Please select/)).toBeNull();

            fireEvent.change(screen.getAllByRole('combobox')[0], { target: { value: 1 } });
            expect(screen.getByDisplayValue(/Please select/)).not.toBeNull();
        });

        it('Can add station in existing branch as expected', () => {
            setup();
            const prevStations = Object.keys(mockStore.getState().param.stn_list);

            fireEvent.change(screen.getAllByRole('combobox')[2], { target: { value: 'stn3' } });
            fireEvent.click(screen.getByText('Confirm'));

            const addedStations = Object.keys(mockStore.getState().param.stn_list).filter(
                id => !prevStations.includes(id)
            );
            expect(addedStations).toHaveLength(1);

            // open side panel
            expect(mockStore.getState().app.selectedStation).toBe(addedStations[0]);
            expect(mockStore.getState().app.sidePanelMode).toBe(SidePanelMode.STATION);
        });
    });

    describe('AddStationModal - SHMetro', () => {
        const mockStore = createTestStore({
            param: {
                ...realStore.param,
                style: RmgStyle.SHMetro,
                stn_list: mockStationList,
            },
            helper: {
                ...realStore.helper,
                branches,
            },
        });
        const setup = () => render(<AddStationModal isOpen={true} onClose={vi.fn()} />, { store: mockStore });

        it('Can render where dropdown for SHMetro style as expected', () => {
            setup();

            const fields = screen.getAllByRole('group');
            expect(fields.length).toBe(3); // where, prep, pivot

            expect(within(fields[0]).getAllByRole('option')).toHaveLength(2);
            expect(within(fields[0]).getByText(/main/i)).not.toBeNull();
            expect(within(fields[0]).queryByText(/branch/i)).toBeNull();
            expect(within(fields[0]).getByText(/external/i)).not.toBeNull();
        });
    });
});
