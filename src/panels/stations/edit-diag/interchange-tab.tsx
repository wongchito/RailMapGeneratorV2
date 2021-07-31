import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import {
    Button,
    Chip,
    createStyles,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Divider,
    Icon,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
    makeStyles,
    Select,
    Switch,
    Tooltip,
} from '@material-ui/core';
import { ParamContext } from '../../../context';
import ColourDialog from '../../colour-diag';
import NameListItems from './name-list-items';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux';
import { InterchangeInfo, MonoColour, Name, RmgStyle, ShortDirection, Theme } from '../../../constants/constants';
import {
    addInterchange,
    removeInterchange,
    updateInterchange,
    updateStationOsiName,
    updateStationPaidArea,
    updateStationTickDirection,
} from '../../../redux/param/action';

const StationEditInterchangeTab = (props: { stnId: string }) => {
    const { stnId } = props;
    const { t } = useTranslation();
    const reduxDispatch = useDispatch();

    const rmgStyle = useSelector((store: RootState) => store.app.rmgStyle);
    const theme = useSelector((store: RootState) => store.param.theme);
    const { transfer } = useSelector((store: RootState) => store.param.stn_list[stnId]);
    const { dispatch } = useContext(ParamContext);

    const [osiNameDialogOpened, setOsiNameDialogOpened] = React.useState(false);

    const addClick = (index: number) => {
        let newInfo: InterchangeInfo = [...theme, '轉綫', 'Line'];
        dispatch({
            type: 'ADD_STATION_INTERCHANGE_INFO',
            stnId,
            setIdx: index,
            info: newInfo,
        });
        reduxDispatch(addInterchange(stnId, index, newInfo));
    };

    const deleteClick = (setIdx: number, intIdx: number) => {
        dispatch({
            type: 'REMOVE_STATION_INTERCHANGE_INFO',
            stnId,
            setIdx,
            intIdx,
        });
        reduxDispatch(removeInterchange(stnId, setIdx, intIdx));
    };

    return (
        <List>
            <ListItem>
                <ListItemText>
                    <h3 style={{ margin: 0 }}>{t('stations.edit.interchange.within')}</h3>
                </ListItemText>
                <ListItemSecondaryAction>
                    <Tooltip title={t('stations.edit.interchange.add')} aria-label="add">
                        <IconButton onClick={() => addClick(0)}>
                            <Icon>add_circle</Icon>
                        </IconButton>
                    </Tooltip>
                </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
                <InterchangeChipSet stnId={stnId} setIndex={0} onDelete={i => deleteClick(0, i)} />
            </ListItem>
            {[RmgStyle.MTR, RmgStyle.SHMetro].includes(rmgStyle || '') && (
                <>
                    <Divider />
                    <ListItem>
                        <ListItemText>
                            <h3 style={{ margin: 0 }}>{t('stations.edit.interchange.osi')}</h3>
                        </ListItemText>
                        <ListItemSecondaryAction>
                            <Button
                                variant="outlined"
                                color="primary"
                                style={{ lineHeight: '1rem', whiteSpace: 'pre', marginRight: 5 }}
                                onClick={() => setOsiNameDialogOpened(true)}
                            >
                                {transfer.osi_names[0] ? transfer.osi_names[0].join('\r\n') : '車站名\r\nStn Name'}
                            </Button>
                            <OSINameDialog
                                open={osiNameDialogOpened}
                                osiName={transfer.osi_names[0] || ['', '']}
                                stnId={stnId}
                                onClose={() => setOsiNameDialogOpened(false)}
                            />
                            <Tooltip title={t('stations.edit.interchange.add')} aria-label="add">
                                <IconButton onClick={() => addClick(1)}>
                                    <Icon>add_circle</Icon>
                                </IconButton>
                            </Tooltip>
                        </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem>
                        <InterchangeChipSet stnId={stnId} setIndex={1} onDelete={i => deleteClick(1, i)} />
                    </ListItem>
                    <ListItem>
                        <span>{t('stations.edit.interchange.note')}</span>
                    </ListItem>
                </>
            )}
            {rmgStyle === RmgStyle.MTR && <InterchangeMore stnId={stnId} />}
        </List>
    );
};

export default StationEditInterchangeTab;

const intChipSetStyles = makeStyles(() =>
    createStyles({
        intChip: {
            borderRadius: 4.5,
            height: 40,
            lineHeight: '1rem',
            margin: 2,
        },
        intChipText: {
            display: 'block',
            textAlign: 'center' as 'center',
        },
        intChipTextZH: {
            fontSize: 18,
            lineHeight: '1.2rem',
        },
        intChipTextEN: {
            fontSize: '.75rem',
            lineHeight: '.9rem',
            whiteSpace: 'pre-wrap' as 'pre-wrap',
        },
        intChipLabel: {
            paddingLeft: 6,
            paddingRight: 6,
        },
        intChipDeleteIcon: {
            marginLeft: -3,
        },
    })
);

interface InterchangeChipSetProps {
    stnId: string;
    setIndex: number;
    onDelete: (i: number) => void;
}

const InterchangeChipSet = (props: InterchangeChipSetProps) => {
    const { stnId, setIndex, onDelete } = props;
    const classes = intChipSetStyles();
    const reduxDispatch = useDispatch();

    const { dispatch } = React.useContext(ParamContext);
    const intInfos = useSelector((store: RootState) => store.param.stn_list[stnId].transfer.info[setIndex]);

    const [chipSelected, setChipSelected] = React.useState(-1);
    const [nameDialogOpened, setNameDialogOpened] = React.useState(false);

    const handleClick = (index: number) => {
        setChipSelected(index);
        setNameDialogOpened(true);
    };

    const nameDialogUpdate = (key: string, value: any) => {
        if (key === 'theme') {
            const newInfo = (value as string[]).concat(Array(2)) as InterchangeInfo;
            dispatch({
                type: 'UPDATE_STATION_INTERCHANGE_INFO',
                stnId,
                setIdx: setIndex,
                intIdx: chipSelected,
                info: newInfo,
            });
            reduxDispatch(updateInterchange(stnId, setIndex, chipSelected, newInfo));
        }
        if (key === 'name') {
            const newInfo = Array(4).concat(value) as InterchangeInfo;
            dispatch({
                type: 'UPDATE_STATION_INTERCHANGE_INFO',
                stnId,
                setIdx: setIndex,
                intIdx: chipSelected,
                info: newInfo,
            });
            reduxDispatch(updateInterchange(stnId, setIndex, chipSelected, newInfo));
        }
    };

    const intChips = intInfos?.map((intInfo, i) => {
        let label = (
            <span style={{ color: intInfo[3] }}>
                <span className={`${classes.intChipText} ${classes.intChipTextZH}`}>{intInfo[4]}</span>
                <span className={`${classes.intChipText} ${classes.intChipTextEN}`}>{intInfo[5]}</span>
            </span>
        );
        return (
            <Chip
                key={i}
                label={label}
                className={classes.intChip}
                classes={{
                    label: classes.intChipLabel,
                    deleteIcon: classes.intChipDeleteIcon,
                }}
                style={{ backgroundColor: intInfo[2] }}
                onDelete={() => onDelete(i)}
                onClick={() => handleClick(i)}
            />
        );
    });

    return (
        <div>
            {intChips}

            <ColourDialog
                open={nameDialogOpened}
                theme={
                    intInfos?.[chipSelected] === undefined
                        ? (([] as any) as Theme)
                        : [
                              intInfos[chipSelected][0],
                              intInfos[chipSelected][1],
                              intInfos[chipSelected][2],
                              intInfos[chipSelected][3] as MonoColour,
                          ]
                }
                lineName={
                    intInfos?.[chipSelected] === undefined
                        ? ['', '']
                        : [intInfos[chipSelected][4], intInfos[chipSelected][5]]
                }
                onUpdate={nameDialogUpdate}
                onClose={() => setNameDialogOpened(false)}
            />
        </div>
    );
};

interface OSINameDialogProps {
    open: boolean;
    stnId: string;
    osiName: Name;
    onClose: () => void;
}

const OSINameDialog = React.memo(
    (props: OSINameDialogProps) => {
        const { open, stnId, osiName, onClose } = props;
        const { t } = useTranslation();
        const reduxDispatch = useDispatch();

        const { dispatch } = useContext(ParamContext);

        const handleUpdate =
            (index: number) =>
            ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
                let newOSIName = osiName.map((val, i) => (i === index ? value : val)) as Name;
                dispatch({ type: 'UPDATE_STATION_OSI_NAME', stnId, name: newOSIName });
                reduxDispatch(updateStationOsiName(stnId, newOSIName));
            };

        return (
            <Dialog open={open} onClose={onClose}>
                <DialogTitle>{t('stations.edit.interchange.osiName')}</DialogTitle>
                <DialogContent dividers>
                    <List>
                        <NameListItems onUpdate={handleUpdate} name={osiName} />
                    </List>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} color="primary" autoFocus>
                        {t('dialog.done')}
                    </Button>
                </DialogActions>
            </Dialog>
        );
    },
    (prevProps, nextProps) =>
        prevProps.open === nextProps.open && prevProps.osiName.toString() === nextProps.osiName.toString()
);

const InterchangeMore = (props: { stnId: string }) => {
    const { stnId } = props;
    const { t } = useTranslation();
    const reduxDispatch = useDispatch();

    const { dispatch } = React.useContext(ParamContext);
    const { transfer } = useSelector((store: RootState) => store.param.stn_list[stnId]);

    return React.useMemo(() => {
        const tickDirecChange = ({ target: { value } }: React.ChangeEvent<{ name?: string; value: unknown }>) => {
            let direction = value;
            if (direction === ShortDirection.left || direction === ShortDirection.right) {
                dispatch({ type: 'UPDATE_STATION_TICK_DIREC', stnId, direction });
                reduxDispatch(updateStationTickDirection(stnId, direction as ShortDirection));
            }
        };

        return (
            <>
                <Divider />
                <ListItem>
                    <ListItemText>
                        <h3 style={{ margin: 0 }}>{t('stations.edit.interchange.settings')}</h3>
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <Icon>format_textdirection_l_to_r</Icon>
                    </ListItemIcon>
                    <ListItemText primary={t('stations.edit.interchange.tickDirec.label')} />
                    <ListItemSecondaryAction>
                        <Select native value={transfer.tick_direc} onChange={tickDirecChange}>
                            {Object.values(ShortDirection).map(d => (
                                <option key={d} value={d}>
                                    {t('stations.edit.interchange.tickDirec.' + d)}
                                </option>
                            ))}
                        </Select>
                    </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <Icon>attach_money</Icon>
                    </ListItemIcon>
                    <ListItemText primary={t('stations.edit.interchange.paidArea')} />
                    <ListItemSecondaryAction>
                        <Switch
                            color="primary"
                            edge="end"
                            onChange={(_, checked) => {
                                dispatch({
                                    type: 'UPDATE_STATION_PAID_AREA',
                                    stnId,
                                    isPaid: checked,
                                });
                                reduxDispatch(updateStationPaidArea(stnId, checked));
                            }}
                            checked={transfer.paid_area}
                        />
                    </ListItemSecondaryAction>
                </ListItem>
            </>
        );
    }, [stnId, t, dispatch, reduxDispatch, transfer.paid_area, transfer.tick_direc]);
};
