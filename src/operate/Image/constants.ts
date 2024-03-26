/**
 * 出力画像フォーマット
 */
export const IMAGE_OUTPUT_FORMAT = {
  BMP: 'bmp',
  GIF: 'gif',
  JPEG: 'jpeg',
  PNG: 'png',
  TIFF: 'tiff',
} as const;

/**
 * 画像に対する操作
 */
export const IMAGE_MANIPULATION_TYPE = {
  /**
   *
   *
   *
   */
  ADJOIN: 'adjoin',

  /**
   *
   *
   *
   */
  AFFINE: 'affine',

  /**
   *
   *
   *
   */
  ANTIALIAS: 'antialias',

  /**
   *
   *
   *
   */
  APPEND: 'append',

  /**
   *
   *
   *
   */
  AUTHENTICATE: 'authenticate',

  /**
   *
   *
   *
   */
  AUTO_ORIENT: 'autoOrient',

  /**
   *
   *
   *
   */
  AVERAGE: 'average',

  /**
   *
   *
   *
   */
  BACKDROP: 'backdrop',

  /**
   *
   *
   *
   */
  BACKGROUND: 'background',

  /**
   *
   *
   *
   */
  BITDEPTH: 'bitdepth',

  /**
   *
   *
   *
   */
  BLACK_THRESHOLD: 'blackThreshold',

  /**
   *
   *
   *
   */
  BLUE_PRIMARY: 'bluePrimary',

  /**
   *
   *
   *
   */
  BLUR: 'blur',

  /**
   *
   *
   *
   */
  BORDER: 'border',

  /**
   *
   *
   *
   */
  BORDER_COLOR: 'borderColor',

  /**
   *
   *
   *
   */
  BOX: 'box',

  /**
   *
   *
   *
   */
  CHANNEL: 'channel',

  /**
   *
   *
   *
   */
  CHARCOAL: 'charcoal',

  /**
   *
   *
   *
   */
  CHOP: 'chop',

  /**
   *
   *
   *
   */
  CLIP: 'clip',

  /**
   *
   *
   *
   */
  COALESCE: 'coalesce',

  /**
   *
   *
   *
   */
  COLORIZE: 'colorize',

  /**
   *
   *
   *
   */
  COLOR_MAP: 'colorMap',

  /**
   *
   *
   *
   */
  COLORS: 'colors',

  /**
   *
   *
   *
   */
  COLORSPACE: 'colorspace',

  /**
   *
   *
   *
   */
  COMMAND: 'command',

  /**
   *
   *
   *
   */
  COMPOSE: 'compose',

  /**
   *
   *
   *
   */
  COMPOSITE: 'composite',

  /**
   *
   *
   *
   */
  COMPRESS: 'compress',

  /**
   *
   *
   *
   */
  CONTRAST: 'contrast',

  /**
   *
   *
   *
   */
  CONVOLVE: 'convolve',

  /**
   *
   *
   *
   */
  CREATE_DIRECTORIES: 'createDirectories',

  /**
   *
   *
   *
   */
  CROP: 'crop',

  /**
   *
   *
   *
   */
  CYCLE: 'cycle',

  /**
   *
   *
   *
   */
  DECONSTRUCT: 'deconstruct',

  /**
   *
   *
   *
   */
  DEFINE: 'define',

  /**
   *
   *
   *
   */
  DELAY: 'delay',

  /**
   *
   *
   *
   */
  DENSITY: 'density',

  /**
   *
   *
   *
   */
  DESPECKLE: 'despeckle',

  /**
   *
   *
   *
   */
  DISPLACE: 'displace',

  /**
   *
   *
   *
   */
  DISPLAY: 'display',

  /**
   *
   *
   *
   */
  DISPOSE: 'dispose',

  /**
   *
   *
   *
   */
  DISSOLVE: 'dissolve',

  /**
   *
   *
   *
   */
  DITHER: 'dither',

  /**
   *
   *
   *
   */
  EDGE: 'edge',

  /**
   *
   *
   *
   */
  EMBOSS: 'emboss',

  /**
   *
   *
   *
   */
  ENCODING: 'encoding',

  /**
   *
   *
   *
   */
  ENDIAN: 'endian',

  /**
   *
   *
   *
   */
  ENHANCE: 'enhance',

  /**
   *
   *
   *
   */
  EQUALIZE: 'equalize',

  /**
   *
   *
   *
   */
  EXTENT: 'extent',

  /**
   *
   *
   *
   */
  FILE: 'file',

  /**
   *
   *
   *
   */
  FILTER: 'filter',

  /**
   *
   *
   *
   */
  FLATTEN: 'flatten',

  /**
   *
   *
   *
   */
  FLIP: 'flip',

  /**
   *
   *
   *
   */
  FLOP: 'flop',

  /**
   *
   *
   *
   */
  FOREGROUND: 'foreground',

  /**
   *
   *
   *
   */
  FRAME: 'frame',

  /**
   *
   *
   *
   */
  FUZZ: 'fuzz',

  /**
   *
   *
   *
   */
  GAMMA: 'gamma',

  /**
   *
   *
   *
   */
  GAUSSIAN: 'gaussian',

  /**
   *
   *
   *
   */
  GEOMETRY: 'geometry',

  /**
   *
   *
   *
   */
  GREEN_PRIMARY: 'greenPrimary',

  /**
   *
   *
   *
   */
  GRAVITY: 'gravity',

  /**
   *
   *
   *
   */
  HIGHLIGHT_COLOR: 'highlightColor',

  /**
   *
   *
   *
   */
  HIGHLIGHT_STYLE: 'highlightStyle',

  /**
   *
   *
   *
   */
  ICON_GEOMETRY: 'iconGeometry',

  /**
   *
   *
   *
   */
  IMPLODE: 'implode',

  /**
   *
   *
   *
   */
  IN: 'in',

  /**
   *
   *
   *
   */
  INTENT: 'intent',

  /**
   *
   *
   *
   */
  INTERLACE: 'interlace',

  /**
   *
   *
   *
   */
  LABEL: 'label',

  /**
   *
   *
   *
   */
  LAT: 'lat',

  /**
   *
   *
   *
   */
  LEVEL: 'level',

  /**
   *
   *
   *
   */
  LIMIT: 'limit',

  /**
   *
   *
   *
   */
  LIST: 'list',

  /**
   *
   *
   *
   */
  LOG: 'log',

  /**
   *
   *
   *
   */
  LOOP: 'loop',

  /**
   *
   *
   *
   */
  LOWER: 'lower',

  /**
   *
   *
   *
   */
  MAGNIFY: 'magnify',

  /**
   *
   *
   *
   */
  MAP: 'map',

  /**
   *
   *
   *
   */
  MASK: 'mask',

  /**
   *
   *
   *
   */
  MATTE: 'matte',

  /**
   *
   *
   *
   */
  MATTE_COLOR: 'matteColor',

  /**
   *
   *
   *
   */
  MAXIMUM_ERROR: 'maximumError',

  /**
   *
   *
   *
   */
  MEDIAN: 'median',

  /**
   *
   *
   *
   */
  MINIFY: 'minify',

  /**
   *
   *
   *
   */
  MODE: 'mode',

  /**
   *
   *
   *
   */
  MODULATE: 'modulate',

  /**
   *
   *
   *
   */
  MONITOR: 'monitor',

  /**
   *
   *
   *
   */
  MONOCHROME: 'monochrome',

  /**
   *
   *
   *
   */
  MONTAGE: 'montage',

  /**
   *
   *
   *
   */
  MORPH: 'morph',

  /**
   *
   *
   *
   */
  MOSAIC: 'mosaic',

  /**
   *
   *
   *
   */
  MOTION_BLUR: 'motionBlur',

  /**
   *
   *
   *
   */
  NAME: 'name',

  /**
   *
   *
   *
   */
  NEGATIVE: 'negative',

  /**
   *
   *
   *
   */
  NOISE: 'noise',

  /**
   *
   *
   *
   */
  NOOP: 'noop',

  /**
   *
   *
   *
   */
  NORMALIZE: 'normalize',

  /**
   *
   *
   *
   */
  OPAQUE: 'opaque',

  /**
   *
   *
   *
   */
  OPERATOR: 'operator',

  /**
   *
   *
   *
   */
  ORDERED_DITHER: 'orderedDither',

  /**
   *
   *
   *
   */
  OUT: 'out',

  /**
   *
   *
   *
   */
  OUTPUT_DIRECTORY: 'outputDirectory',

  /**
   *
   *
   *
   */
  PAGE: 'page',

  /**
   *
   *
   *
   */
  PAUSE: 'pause',

  /**
   *
   *
   *
   */
  PEN: 'pen',

  /**
   *
   *
   *
   */
  PING: 'ping',

  /**
   *
   *
   *
   */
  POINT_SIZE: 'pointSize',

  /**
   *
   *
   *
   */
  NO_PROFILE: 'noProfile',

  /**
   *
   *
   *
   */
  PREVIEW: 'preview',

  /**
   *
   *
   *
   */
  PAINT: 'paint',

  /**
   *
   *
   *
   */
  PROCESS: 'process',

  /**
   *
   *
   *
   */
  PROFILE: 'profile',

  /**
   *
   *
   *
   */
  PROGRESS: 'progress',

  /**
   *
   *
   *
   */
  RANDOM_THRESHOLD: 'randomThreshold',

  /**
   *
   *
   *
   */
  QUALITY: 'quality',

  /**
   *
   *
   *
   */
  RAISE: 'raise',

  /**
   *
   *
   *
   */
  RECOLOR: 'recolor',

  /**
   *
   *
   *
   */
  RED_PRIMARY: 'redPrimary',

  /**
   *
   *
   *
   */
  REGION: 'region',

  /**
   *
   *
   *
   */
  REMOTE: 'remote',

  /**
   *
   *
   *
   */
  RENDER: 'render',

  /**
   *
   *
   *
   */
  REPAGE: 'repage',

  /**
   *
   *
   *
   */
  SAMPLE: 'sample',

  /**
   *
   *
   *
   */
  SAMPLING_FACTOR: 'samplingFactor',

  /**
   *
   *
   *
   */
  RAW_SIZE: 'rawSize',

  /**
   *
   *
   *
   */
  RESAMPLE: 'resample',

  /**
   *
   *
   *
   */
  RESIZE: 'resize',

  /**
   *
   *
   *
   */
  ROLL: 'roll',

  /**
   *
   *
   *
   */
  ROTATE: 'rotate',

  /**
   *
   *
   *
   */
  SCENE: 'scene',

  /**
   *
   *
   *
   */
  SCENES: 'scenes',

  /**
   *
   *
   *
   */
  SCALE: 'scale',

  /**
   *
   *
   *
   */
  SCREEN: 'screen',

  /**
   *
   *
   *
   */
  SEGMENT: 'segment',

  /**
   *
   *
   *
   */
  SELECT_FRAME: 'selectFrame',

  /**
   *
   *
   *
   */
  SEPIA: 'sepia',

  /**
   *
   *
   *
   */
  SET: 'set',

  /**
   *
   *
   *
   */
  SET_FORMAT: 'setFormat',

  /**
   *
   *
   *
   */
  SHADE: 'shade',

  /**
   *
   *
   *
   */
  SHADOW: 'shadow',

  /**
   *
   *
   *
   */
  SHARED_MEMORY: 'sharedMemory',

  /**
   *
   *
   *
   */
  SHAVE: 'shave',

  /**
   *
   *
   *
   */
  SHARPEN: 'sharpen',

  /**
   *
   *
   *
   */
  SHEAR: 'shear',

  /**
   *
   *
   *
   */
  SILENT: 'silent',

  /**
   *
   *
   *
   */
  SNAPS: 'snaps',

  /**
   *
   *
   *
   */
  SOLARIZE: 'solarize',

  /**
   *
   *
   *
   */
  SPREAD: 'spread',

  /**
   *
   *
   *
   */
  STEGANO: 'stegano',

  /**
   *
   *
   *
   */
  STEREO: 'stereo',

  /**
   *
   *
   *
   */
  STRIP: 'strip',

  /**
   *
   *
   *
   */
  SWIRL: 'swirl',

  /**
   *
   *
   *
   */
  TEXT_FONT: 'textFont',

  /**
   *
   *
   *
   */
  TEXTURE: 'texture',

  /**
   *
   *
   *
   */
  THRESHOLD: 'threshold',

  /**
   *
   *
   *
   */
  THUMB: 'thumb',

  /**
   *
   *
   *
   */
  THUMBNAIL: 'thumbnail',

  /**
   *
   *
   *
   */
  TILE: 'tile',

  /**
   *
   *
   *
   */
  TITLE: 'title',

  /**
   *
   *
   *
   */
  TRANSFORM: 'transform',

  /**
   *
   *
   *
   */
  TRANSPARENT: 'transparent',

  /**
   *
   *
   *
   */
  TREE_DEPTH: 'treeDepth',

  /**
   *
   *
   *
   */
  TRIM: 'trim',

  /**
   *
   *
   *
   */
  TYPE: 'type',

  /**
   *
   *
   *
   */
  UPDATE: 'update',

  /**
   *
   *
   *
   */
  UNITS: 'units',

  /**
   *
   *
   *
   */
  UNSHARP: 'unsharp',

  /**
   *
   *
   *
   */
  USE_PIXMAP: 'usePixmap',

  /**
   *
   *
   *
   */
  VIEW: 'view',

  /**
   *
   *
   *
   */
  VIRTUAL_PIXEL: 'virtualPixel',

  /**
   *
   *
   *
   */
  VISUAL: 'visual',

  /**
   *
   *
   *
   */
  WATERMARK: 'watermark',

  /**
   *
   *
   *
   */
  WAVE: 'wave',

  /**
   *
   *
   *
   */
  WHITE_POINT: 'whitePoint',

  /**
   *
   *
   *
   */
  WHITE_THRESHOLD: 'whiteThreshold',

  /**
   *
   *
   *
   */
  WINDOW: 'window',

  /**
   *
   *
   *
   */
  WINDOW_GROUP: 'windowGroup',
} as const;
