import React, { useEffect } from 'react';
import { CanvasType, Events, RmgStyle } from '../constants/constants';
import { useRootSelector } from '../redux';
import { useDispatch } from 'react-redux';
import { setStyle } from '../redux/param/action';
import { useLocation, useNavigate } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';
import useCanvasMap from './use-canvas-map';
import { RmgErrorBoundary, RmgLoader } from '@railmapgen/rmg-components';
import rmgRuntime from '@railmapgen/rmg-runtime';

const style = {
    position: 'relative',
    flexDirection: 'row',
    overflowX: 'auto',
    '&::before, &::after': {
        content: '""',
        margin: 'auto',
    },
    '& > svg': {
        flex: '0 0 auto',
        border: '1px solid black',
    },
};

export default function SvgRouter() {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { canvasToShow, canvasScale } = useRootSelector(state => state.app);
    const { svg_height: svgHeight, style: rmgStyle } = useRootSelector(state => state.param);

    const canvasMap = useCanvasMap(rmgStyle);

    useEffect(() => {
        const pathname = location.pathname;
        console.log(`SvgRouter:: requestedPath=${pathname}`);
        if (pathname !== '/' + rmgStyle) {
            const nextStyle = pathname.split('/').slice(-1)[0] as RmgStyle;
            if (Object.values(RmgStyle).includes(nextStyle)) {
                // set style in param
                console.log(`SvgRouter:: updating param style to ${nextStyle}`);
                dispatch(setStyle(nextStyle));
            } else {
                // push route to match param's style
                console.log(`SvgRouter:: updating path to /${rmgStyle}`);
                navigate(rmgStyle);
            }
        }
    }, []);

    useEffect(() => {
        (document.getElementById('css_share') as HTMLLinkElement).href =
            process.env.PUBLIC_URL + `/styles/share_${rmgStyle}.css`;
        rmgRuntime.event(Events.STYLE_CHANGE, { style: rmgStyle });
    }, [rmgStyle]);

    const filteredCanvas = (Object.keys(canvasMap) as CanvasType[]).filter(canvas => canvasToShow.includes(canvas));
    const scaledHeight = svgHeight * canvasScale;

    return (
        <Flex minH={scaledHeight} sx={style}>
            {Object.keys(canvasMap).length === 0 ? (
                <RmgLoader isIndeterminate={true} />
            ) : (
                filteredCanvas.map(canvas => (
                    <RmgErrorBoundary key={canvas + rmgStyle} sx={{ minWidth: 750, height: scaledHeight }}>
                        {canvasMap[canvas]}
                    </RmgErrorBoundary>
                ))
            )}
        </Flex>
    );
}
