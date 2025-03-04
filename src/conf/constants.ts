
export const ZOOM_FACTOR = 0.8;

export const IMG_TOOLBAR_ICONS = [{
    key: 'zoom_in',
    title: "ZOOM_IN",
    class: 'toolbar_zoom_im'
}, {
    key: 'zoom_out',
    title: "ZOOM_OUT",
    class: 'toolbar_zoom_out'
}, {
    key: 'full_screen',
    title: "FULL_SCREEN",
    class: 'toolbar_full_screen'
}, {
    key: 'refresh',
    title: "REFRESH",
    class: 'toolbar_refresh'
}, {
    key: 'rotate_left',
    title: "ROTATE_LEFT",
    class: 'toolbar_rotate_left'
}, {
    key: 'rotate_right',
    title: "ROTATE_RIGHT",
    class: 'toolbar_rotate_right'
}, {
    key: 'scale_x',
    title: "SCALE_X",
    class: 'toolbar_scale_x'
}, {
    key: 'scale_y',
    title: "SCALE_Y",
    class: 'toolbar_scale_y'
}, {
    key: 'invert_color',
    title: "INVERT_COLOR",
    class: 'toolbar_invert_color'
}, {
    key: 'copy',
    title: "COPY",
    class: 'toolbar_copy'
}];

export const CLOSE_ICON = {
    alt: 'close',
    svg: `<svg t="1628406604474" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6292" width="32" height="32"><path d="M0.0512 0.0512m102.4 0l819.0976 0q102.4 0 102.4 102.4l0 819.0976q0 102.4-102.4 102.4l-819.0976 0q-102.4 0-102.4-102.4l0-819.0976q0-102.4 102.4-102.4Z" fill="#000000" opacity=".6" p-id="6293"></path><path d="M692.5312 331.4944a30.592 30.592 0 0 1 0 43.264l-137.2416 137.216 137.216 137.2672a30.592 30.592 0 0 1-43.264 43.264l-137.216-137.216-137.2416 137.216a30.592 30.592 0 1 1-43.264-43.264l137.216-137.2416-137.216-137.216a30.592 30.592 0 1 1 43.264-43.2896l137.216 137.216 137.216-137.216a30.592 30.592 0 0 1 43.2896 0z" fill="#FFFFFF" p-id="6294"></path></svg>`
}

export const IMG_FULL_SCREEN_MODE = {
    FIT: 'FIT',
    FILL: 'FILL',
    STRETCH: 'STRETCH'
}

export const VIEW_IMG_SELECTOR = {
    EDITOR_AREAS: `.workspace-leaf-content[data-type='markdown'] img,.workspace-leaf-content[data-type='image'] img`,
    EDITOR_AREAS_NO_LINK: `.workspace-leaf-content[data-type='markdown'] img:not(a img),.workspace-leaf-content[data-type='image'] img:not(a img)`,
    
    CPB: `.community-plugin-readme img`,
    CPB_NO_LINK: `.community-plugin-readme img:not(a img)`,

    OTHER: `#sr-flashcard-view img`,
    OTHER_NO_LINK: `#sr-flashcard-view img:not(a img)`,
}

export const IMG_BORDER_WIDTH = {
    THIN: 'thin',
    MEDIUM: 'medium',
    THICK: 'thick'
}

export const IMG_BORDER_STYLE = {
    // HIDDEN: 'hidden',
    DOTTED: 'dotted',
    DASHED: 'dashed',
    SOLID: 'solid',
    DOUBLE: 'double',
    GROOVE: 'groove',
    RIDGE: 'ridge',
    INSET: 'inset',
    OUTSET: 'outset'
}

// https://www.runoob.com/cssref/css-colorsfull.html
export const IMG_BORDER_COLOR = {
    BLACK: 'black',
    BLUE: 'blue',
    DARK_GREEN: 'darkgreen',
    GREEN: 'green',
    LIME: 'lime',
    STEEL_BLUE: 'steelblue',
    INDIGO: 'indigo',
    PURPLE: 'purple',
    GRAY: 'gray',
    DARK_RED: 'darkred',
    LIGHT_GREEN: 'lightgreen',
    BROWN: 'brown',
    LIGHT_BLUE: 'lightblue',
    SILVER: 'silver',
    RED: 'red',
    PINK: 'pink',
    ORANGE: 'orange',
    GOLD: 'gold',
    YELLOW: 'yellow'
}
