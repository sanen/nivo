import * as React from 'react'
import { Box, Theme, Dimensions, MotionProps, ColorProps, GetColor, SvgDefsAndFill } from '@nivo/core'
import { LegendProps } from '@nivo/legends'

declare module '@nivo/waffle' {
    export type WaffleFillDirection =
        | 'top'
        | 'right'
        | 'bottom'
        | 'left'

    export interface WaffleDatum {
        id: string | number
        value: number
        label: string | number
    }

    export type WaffleTooltipData = WaffleDatum & {
        color: string
        position: number
        row: number
        column: number
        groupIndex: number
        startAt: number
        endAt: number
    }

    export type ValueFormatter = (value: number) => string | number

    export interface WaffleBaseProps {
        total: number
        data: object[]
        rows: number
        columns: number
    }

    export type WaffleCommonProps = ColorProps<WaffleDatum> & Partial<{
        // layout
        margin: Box
        fillDirection: WaffleFillDirection
        padding: number

        // styling
        theme: Theme
        emptyColor: string
        emptyOpacity: number
        borderWidth: number
        borderColor: string | GetColor<WaffleDatum>

        // interactivity
        isInteractive: boolean
        onClick: (datum: WaffleDatum, event: React.MouseEvent<HTMLCanvasElement>) => void
        tooltipFormat: string | ValueFormatter
        tooltip: React.StatelessComponent<WaffleTooltipData>
    }>

    export type WaffleSvgProps = WaffleBaseProps
        & WaffleCommonProps
        & MotionProps
        & SvgDefsAndFill<WaffleDatum>
        & {
            legends: LegendProps[]
        }

    export class Waffle extends React.Component<WaffleSvgProps & Dimensions> {}
    export class ResponsiveWaffle extends React.Component<WaffleSvgProps> {}

    export type WaffleHtmlProps = WaffleBaseProps
        & WaffleCommonProps
        & MotionProps

    export class WaffleHtml extends React.Component<WaffleHtmlProps & Dimensions> {}
    export class ResponsiveWaffleHtml extends React.Component<WaffleHtmlProps> {}

    export type WaffleCanvasProps = WaffleBaseProps
        & WaffleCommonProps
        & Partial<{
            pixelRatio: number
            legends: LegendProps[]
        }>

    export class WaffleCanvas extends React.Component<WaffleCanvasProps & Dimensions> {}
    export class ResponsiveWaffleCanvas extends React.Component<WaffleCanvasProps> {}
}
