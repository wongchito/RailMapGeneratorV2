import React from 'react';
import { HStack, Button } from '@chakra-ui/react';
import DownloadActions from './download-actions';
import { MdPalette } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { SidePanelMode } from '../../constants/constants';
import { setSidePanelMode } from '../../redux/app/action';
import { useTranslation } from 'react-i18next';

export default function HeaderActions() {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    return (
        <HStack ml="auto">
            <DownloadActions />
            <Button variant="ghost" size="sm">
                {t('HeaderActions.upload')}
            </Button>
            <Button
                variant="solid"
                size="sm"
                colorScheme="teal"
                leftIcon={<MdPalette />}
                onClick={() => dispatch(setSidePanelMode(SidePanelMode.STYLE))}
            >
                {t('HeaderActions.editStyle')}
            </Button>
        </HStack>
    );
}
