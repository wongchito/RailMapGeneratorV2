import React from 'react';
import { InterchangeInfo, Name, Services } from '../../constants/constants';
import { useAppSelector } from '../../redux';

export type NameDirection = 'upward' | 'downward' | 'left' | 'right';

interface Props {
    stnId: string;
    nameDirection: NameDirection;
    services: Services[];
}

export const StationSHMetro = (props: Props) => {
    const { stnId, nameDirection, services } = props;
    const param = useAppSelector(store => store.param);
    const stnInfo = param.stn_list[stnId];

    let stationIconStyle = '';
    if (stnInfo.services.length === 3) stationIconStyle = 'direct_indoor_sh';
    else if (stnInfo.services.length === 2) stationIconStyle = 'express_indoor_sh';
    else if ([...stnInfo.transfer.info[0], ...(stnInfo.transfer.info[1] || [])].length > 0)
        stationIconStyle = 'int2_indoor_sh';
    else stationIconStyle = 'stn_indoor_sh';

    const dr = nameDirection === 'left' || nameDirection === 'right' ? 90 : 0;
    return (
        <>
            <StationNameGElement
                name={stnInfo.name}
                infos={stnInfo.transfer.info}
                nameDirection={nameDirection}
                services={services}
            />
            <use xlinkHref={`#${stationIconStyle}`} stroke="var(--rmg-theme-colour)" transform={`rotate(${dr})`} />
            {/* This should be in IntBoxGroupProps, put here because the station icon will cover this */}
            {stnInfo.services.length > 1 && (
                <text className="rmg-name__zh" writingMode="tb" fontSize="60%" dy="-12">
                    {`大站车${stnInfo.services.length > 2 ? ' 直达车' : ''}停靠`}
                </text>
            )}
        </>
    );
};

export default StationSHMetro;

interface StationNameGElementProps {
    name: Name;
    infos: InterchangeInfo[][];
    nameDirection: NameDirection;
    services: Services[];
}

const StationNameGElement = (props: StationNameGElementProps) => {
    const { name, infos, nameDirection, services } = props;
    const dy = { upward: 60, downward: -30, left: 0, right: 0 }[nameDirection];
    const osi_dx = { upward: 0, downward: 0, left: 85, right: -85 }[nameDirection];
    const osi_dy = { upward: -185, downward: 150, left: -30, right: -30 }[nameDirection];
    const osysi_dx = (infos: InterchangeInfo[][]) =>
        ({
            upward: 0,
            downward: 0,
            left: infos[0].length + infos[1].length !== 0 ? 85 : 25,
            right: infos[0].length + infos[1].length !== 0 ? -85 : -25,
        }[nameDirection]);
    const osysi_dy = (infos: InterchangeInfo[][], nameDirection: NameDirection, services: Services[]) =>
        ({
            upward: infos[1]?.length ? -210 : infos[0].length ? -180 : -100,
            downward: (infos[1]?.length ? 190 : infos[0].length ? 160 : 75) + (services.length === 3 ? 40 : 0),
            left: infos[1]?.length ? -60 : infos[0].length ? -30 : 0,
            right: infos[1]?.length ? -60 : infos[0].length ? -30 : 0,
        }[nameDirection]);
    return (
        <g transform={`translate(0,${dy})`}>
            {nameDirection === 'upward' || nameDirection === 'downward' ? (
                <>
                    <line
                        x1={-30}
                        x2={30}
                        y1={nameDirection === 'upward' ? -23 : -10}
                        y2={nameDirection === 'upward' ? -23 : -10}
                        stroke="black"
                    />
                    <line
                        y1={nameDirection === 'upward' ? -23 : -10}
                        y2={nameDirection === 'upward' ? -23 - 25 : 20}
                        stroke="black"
                    />
                </>
            ) : (
                <line
                    x1={nameDirection === 'left' ? -100 : 15}
                    x2={nameDirection === 'left' ? -15 : 100}
                    y1={0}
                    y2={0}
                    stroke="black"
                />
            )}

            {[...infos[0], ...(infos[1] || [])].length > 0 && (
                <IntBoxGroup
                    intInfos={[...infos[0], ...(infos[1] || [])]}
                    arrowDirection={nameDirection}
                    services={services}
                />
            )}

            <StationName stnName={name} nameDirection={nameDirection} fill="black" />

            {infos[1]?.length > 0 && (
                <g transform={`translate(${osi_dx},${osi_dy})`}>
                    <OSIText osiInfos={infos[1]} nameDirection={nameDirection} />
                </g>
            )}

            {infos[2]?.length > 0 && (
                <g transform={`translate(${osysi_dx(infos)},${osysi_dy(infos, nameDirection, services)})`}>
                    <OSysIText osysiInfos={infos[2]} nameDirection={nameDirection} />
                </g>
            )}
        </g>
    );
};

const StationName = React.forwardRef(
    (
        props: { stnName: Name; nameDirection: NameDirection } & React.SVGProps<SVGGElement>,
        ref: React.Ref<SVGGElement>
    ) => {
        const { stnName, nameDirection, ...others } = props;
        const name = stnName[0].split('\\');
        const nameENLn = stnName[1].split('\\').length;
        // TODO: set text-anchor on left and right
        const dx = { upward: 0, downward: 0, left: -75, right: 75 }[nameDirection];
        const dy = { upward: -2, downward: -30 - 12 * (nameENLn - 1), left: -15, right: -15 }[nameDirection];

        return (
            <g ref={ref} {...others} textAnchor="middle" transform={`translate(${dx},${dy})`}>
                {React.useMemo(
                    () => (
                        <>
                            {name.map((txt, i, array) => (
                                <text
                                    key={i}
                                    className="rmg-name__zh"
                                    dy={nameDirection === 'upward' ? 16 * i : (array.length - 1 - i) * -16}
                                >
                                    {txt}
                                </text>
                            ))}
                            <g fontSize={9.6}>
                                {stnName[1].split('\\').map((txt, i) => (
                                    <text
                                        key={i}
                                        className="rmg-name__en"
                                        dy={
                                            12 * (i + 1) +
                                            (nameDirection === 'upward' ? (name.length > 1 ? name.length * 7.5 : 0) : 0)
                                        }
                                    >
                                        {txt}
                                    </text>
                                ))}
                            </g>
                        </>
                    ),
                    // eslint-disable-next-line react-hooks/exhaustive-deps
                    [...stnName]
                )}
            </g>
        );
    }
);

interface IntBoxGroupProps {
    intInfos: InterchangeInfo[];
    arrowDirection: NameDirection;
    services: Services[];
}

const IntBoxGroup = (props: IntBoxGroupProps & React.SVGProps<SVGGElement>) => {
    const { intInfos, arrowDirection, services } = props;

    // name each different linearGradient that will fill the arrow
    const intNameId = intInfos.map(intInfo => intInfo[2]).reduce((name, color) => name + color, '');

    // get the interchange line names
    const lineNames = [
        intInfos
            .filter(intInfo => intInfo[4].match(/^\d+.*$/))
            .map(intInfo => intInfo[4].replace(/^(\d+)(.*)$/, '$1'))
            .join('，')
            .concat('号线'),
        intInfos
            .filter(intInfo => !intInfo[4].match(/^\d+.*$/))
            .map(intInfo => intInfo[4])
            .join('，'),
    ]
        .filter(name => name && name !== '号线')
        .join('，');
    const lineNamesEn = [
        'Line '.concat(
            intInfos
                .filter(intInfo => intInfo[5].match(/^L|line$/))
                .map(intInfo => intInfo[5].replace('Line', '').replace('line', '').trim())
                .join(',')
        ),
        intInfos
            .filter(intInfo => !intInfo[5].match(/^L|line$/))
            .map(intInfo => intInfo[5])
            .join('，'),
    ]
        .filter(name => name && name !== 'Line ')
        .join(',');

    // for services contains three level (normal, express, direct)
    // additional length is required on transfer arrow otherwise
    // the station icon will be longer than the arrow itself
    const arrowLength = services.length === 3 ? 80 : 45;
    const transfer_dy = { upward: -145, downward: 125 + (services.length === 3 ? 40 : 0), left: 7, right: 7 }[
        arrowDirection
    ];

    // bunch of constants for all four directions
    const arrow_dx = { upward: 0, downward: 0, left: 20, right: -20 }[arrowDirection];
    const arrow_dy = { upward: -74, downward: 44, left: 0, right: 0 }[arrowDirection];
    const arrow_dr = { upward: 0, downward: 180, left: 90, right: -90 }[arrowDirection];
    const transfer_dx = { upward: 0, downward: 0, left: 85, right: -85 }[arrowDirection];
    const transfer_anchor = { upward: 'middle', downward: 'middle', left: 'start', right: 'end' }[arrowDirection];
    return (
        <g>
            <path
                id="int_indoor_arrow_sh"
                stroke="var(--rmg-black)"
                strokeWidth={1}
                transform={`translate(${arrow_dx},${arrow_dy})rotate(${arrow_dr})`}
                fill={intInfos.length === 1 ? intInfos[0][2] : `url(#grad${intNameId})`}
                d={`M -7.5,0 v -${arrowLength} h -7.5 l 15,-15 l 15,15 h -7.5 v ${arrowLength} Z`}
            />

            {intInfos.length > 1 && (
                <>
                    <linearGradient
                        id={`grad${intNameId}`}
                        y1="0"
                        y2="0"
                        x1={arrowDirection === 'upward' ? '25%' : '75%'}
                        x2={arrowDirection === 'upward' ? '75%' : '25%'}
                    >
                        {intInfos.map((intInfo, i) => (
                            <React.Fragment key={i}>
                                {/* more about React.Fragment on https://stackoverflow.com/a/59390967 */}
                                <stop // start from
                                    offset={`${(100 / intInfos.length) * (i + 0)}%`}
                                    stopColor={intInfo[2]}
                                />
                                <stop // to
                                    offset={`${(100 / intInfos.length) * (i + 1)}%`}
                                    stopColor={intInfo[2]}
                                />
                            </React.Fragment>
                        ))}
                    </linearGradient>

                    {/* a range inplementation [0, 1, 2 ... intInfos.length - 1] */}
                    {/* {[...Array(intInfos.length - 1).keys()].map(i => (<line
                        x1={-7.5 + (15 / intInfos.length) * (i + 1)}
                        x2={-7.5 + (15 / intInfos.length) * (i + 1)}
                        y1="-74"
                        y2={-104 - 7.5 - 7.5 / (intInfos.length - 1) * (i+1)}
                        stroke="black"
                    />))} */}
                </>
            )}

            <g transform={`translate(${transfer_dx},${transfer_dy})`} textAnchor={`${transfer_anchor}`}>
                <text className="rmg-name__zh" dy={-7}>
                    {`换乘${lineNames}`}
                </text>
                <text className="rmg-name__en" dy={5} fontSize={9.6}>
                    {`Interchange ${lineNamesEn}`}
                </text>
            </g>
        </g>
    );
};

const OSIText = (props: { osiInfos: InterchangeInfo[]; nameDirection: NameDirection }) => {
    const anchor = { upward: 'middle', downward: 'middle', left: 'start', right: 'end' }[props.nameDirection];
    return React.useMemo(
        () => (
            <g textAnchor={`${anchor}`} fontSize="50%">
                <text className="rmg-name__zh" dy={-5}>
                    {`换乘${props.osiInfos.map(info => info[4]).join('，')}`}
                </text>
                <text className="rmg-name__zh" dy={5}>
                    仅限公共交通卡
                </text>
                <text className="rmg-name__en" dy={12.5} fontSize="75%">
                    Only for Public Transportation Card
                </text>
            </g>
        ),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [props.osiInfos.toString(), props.nameDirection]
    );
};

const OSysIText = (props: { osysiInfos: InterchangeInfo[]; nameDirection: NameDirection }) => {
    const anchor = { upward: 'middle', downward: 'middle', left: 'start', right: 'end' }[props.nameDirection];
    return React.useMemo(
        () => (
            <g textAnchor={`${anchor}`}>
                <text className="rmg-name__zh" dy={-5}>
                    {`转乘${props.osysiInfos.map(info => info[4]).join('，')}`}
                </text>
                <text className="rmg-name__en" dy={7.5} fontSize={9.6}>
                    {`To ${props.osysiInfos.map(info => info[5]).join(', ')}`}
                </text>
            </g>
        ),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [props.osysiInfos.toString(), props.nameDirection]
    );
};
