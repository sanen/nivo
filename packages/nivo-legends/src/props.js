/*
 * This file is part of the nivo project.
 *
 * Copyright 2016-present, Raphaël Benitte.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import PropTypes from 'prop-types'
import {
    ANCHOR_BOTTOM,
    ANCHOR_BOTTOM_LEFT,
    ANCHOR_BOTTOM_RIGHT,
    ANCHOR_CENTER,
    ANCHOR_LEFT,
    ANCHOR_RIGHT,
    ANCHOR_TOP,
    ANCHOR_TOP_LEFT,
    ANCHOR_TOP_RIGHT,
    DIRECTION_BOTTOM_TO_TOP,
    DIRECTION_COLUMN,
    DIRECTION_LEFT_TO_RIGHT,
    DIRECTION_RIGHT_TO_LEFT,
    DIRECTION_ROW,
    DIRECTION_TOP_TO_BOTTOM,
} from './constants'

export const legendEffectsProp = PropTypes.arrayOf(
    PropTypes.shape({
        match: PropTypes.oneOfType([PropTypes.oneOf(['hover'])]).isRequired,
        style: PropTypes.shape({
            background: PropTypes.string,
            opacity: PropTypes.number,
            textColor: PropTypes.string,
            symbolSize: PropTypes.number,
            symbolBorderWidth: PropTypes.number,
            symbolBorderColor: PropTypes.string,
        }).isRequired,
    })
)

/**
 * The prop type is exported as a simple object instead of `PropTypes.shape`
 * to be able to add extra properties.
 *
 * @example
 * ```javascript
 * import { LegendPropShape } from '@nivo/legends'
 *
 * const customLegendPropType = PropTypes.shape({
 *     ...LegendPropShape,
 *     extra: PropTypes.any.isRequired,
 * })
 * ```
 */
export const LegendPropShape = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            color: PropTypes.string.isRequired,
            fill: PropTypes.string,
        })
    ),

    // position & layout
    anchor: PropTypes.oneOf([
        ANCHOR_TOP,
        ANCHOR_TOP_RIGHT,
        ANCHOR_RIGHT,
        ANCHOR_BOTTOM_RIGHT,
        ANCHOR_BOTTOM,
        ANCHOR_BOTTOM_LEFT,
        ANCHOR_LEFT,
        ANCHOR_TOP_LEFT,
        ANCHOR_CENTER,
    ]).isRequired,
    translateX: PropTypes.number,
    translateY: PropTypes.number,
    direction: PropTypes.oneOf([DIRECTION_ROW, DIRECTION_COLUMN]).isRequired,

    // items
    itemWidth: PropTypes.number.isRequired,
    itemHeight: PropTypes.number.isRequired,
    itemDirection: PropTypes.oneOf([
        DIRECTION_LEFT_TO_RIGHT,
        DIRECTION_RIGHT_TO_LEFT,
        DIRECTION_TOP_TO_BOTTOM,
        DIRECTION_BOTTOM_TO_TOP,
    ]),
    itemsSpacing: PropTypes.number,
    symbolSize: PropTypes.number,
    symbolSpacing: PropTypes.number,
    symbolShape: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    symbolBorderWidth: PropTypes.number,
    symbolBorderColor: PropTypes.string,
    background: PropTypes.string,
    textColor: PropTypes.string,
    opacity: PropTypes.number,

    // interactivity
    onClick: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,

    effects: legendEffectsProp,
}
