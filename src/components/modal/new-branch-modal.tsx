import React, { useEffect, useState } from 'react';
import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
} from '@chakra-ui/react';
import { RmgFields, RmgFieldsField } from '@railmapgen/rmg-components';
import { useAppDispatch, useAppSelector } from '../../redux';
import { addStation, getNewBranchAllowedEnds, verifyNewBranchEnds } from '../../redux/param/add-station-action';
import { RmgStyle } from '../../constants/constants';
import { useTranslation } from 'react-i18next';

interface NewBranchModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function NewBranchModal(props: NewBranchModalProps) {
    const { isOpen, onClose } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const [where, setWhere] = useState<'new' | 'ext'>('new');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [position, setPosition] = useState<'upper' | 'lower'>('upper');

    const [fromError, setFromError] = useState('');
    const [toError, setToError] = useState('');

    const { style, stn_list: stationList } = useAppSelector(state => state.param);

    useEffect(() => {
        // reset whenever modal is closed
        if (!isOpen) {
            setWhere('new');
            setFrom('');
            setTo('');
        }
    }, [isOpen]);

    const getStationOptions = (stationIdList: string[]): Record<string, string> => {
        return stationIdList.reduce(
            (acc, cur) => ({
                ...acc,
                [cur]: stationList[cur]?.name.join(' - '),
            }),
            { '': t('NewBranchModal.pleaseSelect') }
        );
    };

    const newBranchEndStationOptions = getStationOptions(dispatch(getNewBranchAllowedEnds()));

    const fields: RmgFieldsField[] = [
        {
            type: 'select',
            label: t('NewBranchModal.where'),
            value: where,
            options: {
                new: t('NewBranchModal.new'),
                ext: t('NewBranchModal.ext'),
            },
            disabledOptions: style === RmgStyle.SHMetro ? [] : ['ext'],
            onChange: value => handleSelectWhere(value as 'new' | 'ext'),
            minW: 'full',
        },
        {
            type: 'select',
            label: t('NewBranchModal.from'),
            value: from,
            options: newBranchEndStationOptions,
            disabledOptions: [''],
            onChange: value => handleSelectFrom(value as string),
            isInvalid: Boolean(fromError),
        },
        {
            type: 'select',
            label: t('NewBranchModal.to'),
            value: to,
            options: newBranchEndStationOptions,
            disabledOptions: [''],
            onChange: value => handleSelectTo(value as string),
            isInvalid: Boolean(toError),
        },
        {
            type: 'select',
            label: t('NewBranchModal.position'),
            value: position,
            options: {
                upper: t('NewBranchModal.upper'),
                lower: t('NewBranchModal.lower'),
            },
            onChange: value => setPosition(value as 'upper' | 'lower'),
            minW: 'full',
            hidden: where !== 'new' || style === RmgStyle.SHMetro,
        },
    ];

    const handleSelectWhere = (value: 'new' | 'ext') => {
        setWhere(value);
        setFrom('');
        setTo('');
        setFromError('');
        setToError('');
    };

    const handleSelectFrom = (value: string) => {
        setFrom(value);
        setFromError('');

        if (value && to) {
            setToError(dispatch(verifyNewBranchEnds(value, to)));
        }
    };

    const handleSelectTo = (value: string) => {
        setTo(value);
        setToError('');

        if (from && value) {
            setFromError(dispatch(verifyNewBranchEnds(from, value)));
        }
    };

    const handleSubmit = () => {
        let result: false | string;
        if (where === 'ext') {
            // SHMetro specific - treat lower branch as external line
            result = dispatch(addStation('new', from, to, 'lower'));
        } else {
            if (style === RmgStyle.SHMetro) {
                result = dispatch(addStation('new', from, to, 'upper'));
            } else {
                result = dispatch(addStation('new', from, to, position));
            }
        }

        if (result) {
            onClose();
        }
    };

    const isSubmitDisabled = Boolean(!from || !to || fromError || toError);

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{t('NewBranchModal.title')}</ModalHeader>
                <ModalCloseButton />

                <ModalBody>
                    <RmgFields fields={fields} />
                </ModalBody>

                <ModalFooter>
                    <Button
                        colorScheme="teal"
                        title={isSubmitDisabled ? fromError || toError : t('NewBranchModal.submit')}
                        onClick={handleSubmit}
                        disabled={isSubmitDisabled}
                    >
                        {t('NewBranchModal.submit')}
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
