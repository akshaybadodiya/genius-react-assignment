import { Breakpoint } from '../../styles/styles';

export type GridItemsAlignment = 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
export const gridItemsAlignmentOptions: GridItemsAlignment[] = ['flex-start', 'center',
    'flex-end', 'stretch', 'baseline']

export type GridContentAlignment =
    | 'stretch'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around';
export const gridContentAlignmentOptions: GridContentAlignment[] = ['stretch', 'center', 'flex-start',
    'flex-end', 'space-between', 'space-around']

export type GridDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';
export const gridDirectionOptions: GridDirection[] = ['row', 'row-reverse', 'column', 'column-reverse']

export type GridSpacing = 0 | 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 |
    18 | 20 | 22 | 24 | 26 | 28 | 30 | 32 | 34 | 36 | 38 | 40;
export const gridSpacingOptions: GridSpacing[] = [0, 2, 4, 6, 8, 10, 12, 14, 16,
    18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40]

export type GridJustification =
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
export const gridJustificationOptions: GridJustification[] = ['flex-start', 'center',
    'flex-end', 'space-between', 'space-around', 'space-evenly']


export type GridWrap = 'nowrap' | 'wrap' | 'wrap-reverse';
export const gridWrapOptions: GridWrap[] = ['nowrap', 'wrap', 'wrap-reverse']

export type GridSize = 'auto' | true | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export const GRID_SIZES: GridSize[] = ['auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

export interface GridProps
    extends React.HTMLAttributes<HTMLElement>, Partial<Record<Breakpoint, boolean | GridSize>> {
    innerRef?: React.Ref<any> | React.RefObject<any>;
    gridRef?: (r: HTMLDivElement | null) => void
    alignContent?: GridContentAlignment;
    alignItems?: GridItemsAlignment;
    container?: boolean;
    direction?: GridDirection;
    item?: boolean;
    justify?: GridJustification;
    spacing?: GridSpacing;
    wrap?: GridWrap;
    zeroMinWidth?: boolean;
}

export type GridClassKey =
    | 'container'
    | 'item'
    | 'direction-xs-column'
    | 'direction-xs-column-reverse'
    | 'direction-xs-row-reverse'
    | 'wrap-xs-nowrap'
    | 'wrap-xs-wrap-reverse'
    | 'align-items-xs-center'
    | 'align-items-xs-flex-start'
    | 'align-items-xs-flex-end'
    | 'align-items-xs-baseline'
    | 'align-content-xs-center'
    | 'align-content-xs-flex-start'
    | 'align-content-xs-flex-end'
    | 'align-content-xs-space-between'
    | 'align-content-xs-space-around'
    | 'justify-xs-center'
    | 'justify-xs-flex-end'
    | 'justify-xs-space-between'
    | 'justify-xs-space-around'
    | 'spacing-xs-8'
    | 'spacing-xs-16'
    | 'spacing-xs-24'
    | 'spacing-xs-40'
    | 'grid-xs-auto'
    | 'grid-xs-true'
    | 'grid-xs-1'
    | 'grid-xs-2'
    | 'grid-xs-3'
    | 'grid-xs-4'
    | 'grid-xs-5'
    | 'grid-xs-6'
    | 'grid-xs-7'
    | 'grid-xs-8'
    | 'grid-xs-9'
    | 'grid-xs-10'
    | 'grid-xs-11'
    | 'grid-xs-12';