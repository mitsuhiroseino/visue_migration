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
   * 画像の結合
   *
   * 複数の画像を一つの画像に結合することができる。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-adjoin
   */
  ADJOIN: 'adjoin',

  /**
   * アフィン変換
   *
   * 画像にアフィン変換を適用することができる。平行移動、回転、スケーリング、シアーなどの変換が可能である。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-affine
   */
  AFFINE: 'affine',

  /**
   * アンチエイリアス処理
   *
   * 画像のアンチエイリアス処理を行うことができる。エッジや線を滑らかにすることができる。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-antialias
   */
  ANTIALIAS: 'antialias',

  /**
   * 画像の連結
   *
   * 複数の画像を連結して一つの画像にすることができる。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-append
   */
  APPEND: 'append',

  /**
   * 認証
   *
   * 画像の認証を行うことができる。特定の画像が正当であるかどうかを確認できる。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-authenticate
   */
  AUTHENTICATE: 'authenticate',

  /**
   * 自動方向転換
   *
   * 画像の向きを自動的に修正することができる。例えば、Exif情報に基づいて画像を正しい向きに回転させることができる。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-autoOrient
   */
  AUTO_ORIENT: 'autoOrient',

  /**
   * 平均値算出
   *
   * 複数の画像の平均値を計算することができる。統計情報の取得や複数の画像をブレンドするのに使用できる。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-average
   */
  AVERAGE: 'average',

  /**
   * 背景画像
   *
   * 画像の背景を指定した画像に設定することができる。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-backdrop
   */
  BACKDROP: 'backdrop',

  /**
   * 背景色
   *
   * 背景を設定することができる。画像に背景色を追加する。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-background
   */
  BACKGROUND: 'background',

  /**
   * ビット深度
   *
   * 画像のビット深度を変更することができる。色の表現精度を調整することができる。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-bitdepth
   */
  BITDEPTH: 'bitdepth',

  /**
   * 黒のしきい値
   *
   * 画像の黒色の閾値を設定することができる。指定された閾値より暗いピクセルを黒色として扱うことができる。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-blackThreshold
   */
  BLACK_THRESHOLD: 'blackThreshold',

  /**
   * 青の主要成分
   *
   * 画像の青のプライマリ値を設定することができる。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-bluePrimary
   */
  BLUE_PRIMARY: 'bluePrimary',

  /**
   * ぼかし
   *
   * 画像にぼかしを適用することができる。これにより、画像のエッジが滑らかになり、ノイズが軽減される。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-blur
   */
  BLUR: 'blur',

  /**
   * 境界
   *
   * 画像に境界線を追加することができる。境界線は、画像の周囲にフレームを付けるのに使用される。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-border
   */
  BORDER: 'border',

  /**
   * 境界の色
   *
   * 境界線の色を設定することができる。境界線の色は、画像に追加されるフレームの色を指定するのに使用される。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-borderColor
   */
  BORDER_COLOR: 'borderColor',

  /**
   * ボックス
   *
   * 画像にボックスフィルタを適用することができる。ボックスフィルタは、画像をぼかすのに使用される。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-box
   */
  BOX: 'box',

  /**
   * チャンネル
   *
   * 画像の特定のチャンネルを操作することができる。RGBやCMYKなどのチャンネルに対して、異なる処理を適用することができる。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-channel
   */
  CHANNEL: 'channel',

  /**
   * 木炭
   *
   * 画像に木炭効果を適用することができる。木炭効果は、画像に粗い質感を与えるのに使用される。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-charcoal
   */
  CHARCOAL: 'charcoal',

  /**
   * 切り取り
   *
   * 画像から指定された範囲を切り取ることができる。指定された範囲外の部分が削除される。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-chop
   */
  CHOP: 'chop',

  /**
   * クリップ
   *
   * 画像をクリッピングすることができる。指定された範囲内のピクセルのみが残り、それ以外のピクセルは削除される。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-clip
   */
  CLIP: 'clip',

  /**
   * 連結
   *
   * 複数の画像を連結することができる。複数の画像を連結して一つのアニメーション画像にする。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-coalesce
   */
  COALESCE: 'coalesce',

  /**
   * 着色
   *
   * 画像に色を付けることができる。画像全体または指定された領域に色を塗ることができる。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-colorize
   */
  COLORIZE: 'colorize',

  /**
   * カラーマップ
   *
   * 画像の色をマッピングすることができる。指定されたカラーマップに基づいて、画像の色を変換する。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-colorMap
   */
  COLOR_MAP: 'colorMap',

  /**
   * 色
   *
   * 画像の色数を変更することができる。色数の変更により、画像の色の表現を調整することができる。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-colors
   */
  COLORS: 'colors',

  /**
   * カラースペース
   *
   * 画像のカラースペースを変更することができる。RGB、CMYK、グレースケールなどのカラースペースに変換することができる。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-colorspace
   */
  COLORSPACE: 'colorspace',

  /**
   * コマンド
   *
   * コマンドを実行することができる。外部プログラムを呼び出し、画像処理などを行う。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-command
   */
  COMMAND: 'command',

  /**
   * 合成
   *
   * 複数の画像を合成することができる。合成モードや透明度などのパラメータを指定して、複数の画像を組み合わせることができる。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-compose
   */
  COMPOSE: 'compose',

  /**
   * 合成
   *
   * 画像を合成することができる。複数の画像を組み合わせて1枚の画像を作成する。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-composite
   */
  COMPOSITE: 'composite',

  /**
   * 圧縮
   *
   * 画像を圧縮することができる。圧縮率や圧縮形式を指定して、画像ファイルのサイズを減らすことができる。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-compress
   */
  COMPRESS: 'compress',

  /**
   * コントラスト
   *
   * 画像のコントラストを調整することができる。コントラストの調整により、画像の明るさと暗さの差を強調することができる。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-contrast
   */
  CONTRAST: 'contrast',

  /**
   * 畳み込み
   *
   * 画像に畳み込みフィルタを適用することができる。畳み込みフィルタを使用することで、画像の特徴を強調したり、ノイズを除去したりすることができる。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-convolve
   */
  CONVOLVE: 'convolve',

  /**
   * ディレクトリの作成
   *
   * 指定されたパスにディレクトリを作成することができる。ディレクトリが存在しない場合は、自動的に作成される。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-createDirectories
   */
  CREATE_DIRECTORIES: 'createDirectories',

  /**
   * 切り抜き
   *
   * 画像を指定された範囲で切り取ることができる。指定された範囲外の部分が削除される。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-crop
   */
  CROP: 'crop',

  /**
   * サイクル
   *
   * 画像を指定された回数だけ複製して連結することができる。アニメーションのループなどに使用される。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-cycle
   */
  CYCLE: 'cycle',

  /**
   * 分解
   *
   * 画像の色を成分ごとに分解することができる。RGBやCMYKなどの成分を個別に操作するのに使用される。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-deconstruct
   */
  DECONSTRUCT: 'deconstruct',

  /**
   * 定義
   *
   * 画像処理に関する設定やパラメータを定義することができる。処理の挙動や結果を細かく調整するのに使用される。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-define
   */
  DEFINE: 'define',

  /**
   * 遅延
   *
   * アニメーション画像のフレーム間の遅延を設定することができる。各フレームの表示時間を制御する。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-delay
   */
  DELAY: 'delay',

  /**
   * 密度
   *
   * 画像の解像度や密度を設定することができる。印刷や表示における画像の品質を調整するのに使用される。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-density
   */
  DENSITY: 'density',

  /**
   * 斑点除去
   *
   * 画像からスペックルノイズを除去することができる。画像のクリーンアップや改善に使用される。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-despeckle
   */
  DESPECKLE: 'despeckle',

  /**
   * 変位
   *
   * 画像のピクセルを指定されたマップに基づいて変位させることができる。歪みや効果を与えるのに使用される。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-displace
   */
  DISPLACE: 'displace',

  /**
   * 表示
   *
   * 画像を表示することができる。画像を表示するウィンドウやデバイスを指定して画像を表示する。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-display
   */
  DISPLAY: 'display',

  /**
   * 破棄
   *
   * アニメーション画像の各フレームの後処理方法を設定することができる。フレームの間のトランジションやクリア方法などを指定する。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-dispose
   */
  DISPOSE: 'dispose',

  /**
   * 溶解
   *
   * 画像同士を指定された割合で混合することができる。トランジションやフェードイン/フェードアウトのエフェクトを作成するのに使用される。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-dissolve
   */
  DISSOLVE: 'dissolve',

  /**
   * ディザリング
   *
   * 画像の色を減色することができる。色数を減らすことで画像を効果的に圧縮するのに使用される。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-dither
   */
  DITHER: 'dither',

  /**
   * エッジ
   *
   * 画像のエッジを検出することができる。エッジ検出により、画像の輪郭を強調することができる。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-edge
   */
  EDGE: 'edge',

  /**
   * エンボス
   *
   * 画像に浮き出し効果を与えることができる。画像に立体感や質感を与えるのに使用される。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-emboss
   */
  EMBOSS: 'emboss',

  /**
   * エンコーディング
   *
   * 画像のエンコード方法や形式を指定することができる。画像のファイル形式や圧縮方法を設定するのに使用される。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-encoding
   */
  ENCODING: 'encoding',

  /**
   * エンディアン
   *
   * 画像のバイトオーダーを設定することができる。エンディアンの変更により、画像の解釈や表示が変わることがある。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-endian
   */
  ENDIAN: 'endian',

  /**
   * 強調
   *
   * 画像の品質を向上させることができる。画像の鮮明度、色彩、コントラストなどを調整するのに使用される。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-enhance
   */
  ENHANCE: 'enhance',

  /**
   * 均等化
   *
   * 画像のヒストグラムを均等化することができる。ヒストグラム均等化により、画像のコントラストを向上させることができる。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-equalize
   */
  EQUALIZE: 'equalize',

  /**
   * 範囲
   *
   * 画像のサイズを変更することができる。指定されたサイズにリサイズするか、余白を追加してサイズを変更する。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-extent
   */
  EXTENT: 'extent',

  /**
   * ファイル
   *
   * 画像のファイル情報やメタデータを取得することができる。ファイルの種類やサイズ、作成日時などの情報を取得する。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-file
   */
  FILE: 'file',

  /**
   * フィルタ
   *
   * 画像にフィルター処理を適用することができる。ぼかし、シャープ化、輪郭強調などのさまざまなエフェクトを実現することができる。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-filter
   */
  FILTER: 'filter',

  /**
   * フラット化
   *
   * 画像のレイヤーを平坦化することができる。複数の画像レイヤーを一つの画像に結合する。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-flatten
   */
  FLATTEN: 'flatten',

  /**
   * 反転
   *
   * 画像を上下に反転させることができる。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-flip
   */
  FLIP: 'flip',

  /**
   * 反転
   *
   * 画像を左右に反転させることができる。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-flop
   */
  FLOP: 'flop',

  /**
   * 前景
   *
   * 画像に前景色を指定することができる。文字や形状の描画などに使用される。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-foreground
   */
  FOREGROUND: 'foreground',

  /**
   * フレーム
   *
   * 画像に枠線を追加することができる。指定した色や太さで画像を枠で囲む。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-frame
   */
  FRAME: 'frame',

  /**
   * ぼかし
   *
   * 画像の色の許容範囲を指定することができる。指定した色と近い色を同一視することができる。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-fuzz
   */
  FUZZ: 'fuzz',

  /**
   * ガンマ
   *
   * 画像のガンマ補正を行うことができる。画像の明るさやコントラストを調整するのに使用される。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-gamma
   */
  GAMMA: 'gamma',

  /**
   * ガウシアン
   *
   * 画像にガウシアンぼかしを適用することができる。ガウシアンぼかしは、画像のエッジを滑らかにするのに使用される。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-gaussian
   */
  GAUSSIAN: 'gaussian',

  /**
   * ジオメトリ
   *
   * 画像の幅や高さ、位置を指定することができる。画像のサイズや配置を調整するのに使用される。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-geometry
   */
  GEOMETRY: 'geometry',

  /**
   * 緑の主要成分
   *
   * 画像の緑のプライマリ値を設定することができる。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-greenPrimary
   */
  GREEN_PRIMARY: 'greenPrimary',

  /**
   * 重力
   *
   * 画像の揃える基準点を指定することができる。画像の配置や重心を制御するのに使用される。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-gravity
   */
  GRAVITY: 'gravity',

  /**
   * ハイライトの色
   *
   * 画像のハイライト色を指定することができる。ハイライトの色や強度を調整するのに使用される。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-highlightColor
   */
  HIGHLIGHT_COLOR: 'highlightColor',

  /**
   * ハイライトのスタイル
   *
   * 画像のハイライトのスタイルを指定することができる。ハイライトのスタイルや効果を変更するのに使用される。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-highlightStyle
   */
  HIGHLIGHT_STYLE: 'highlightStyle',

  /**
   * アイコンのジオメトリ
   *
   * アイコンのサイズや配置を指定することができる。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-iconGeometry
   */
  ICON_GEOMETRY: 'iconGeometry',

  /**
   * 内側に収縮
   *
   * 画像を内側に収縮させることができる。画像を中心点を基準に収縮することで、効果的な視覚的効果を得ることができる。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-implode
   */
  IMPLODE: 'implode',

  /**
   * 入力
   *
   * 入力画像を設定することができる。処理の対象となる入力画像を指定する。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-in
   */
  IN: 'in',

  /**
   * 意図
   *
   * 画像の処理目的を指定することができる。色変換やリサイズなどの処理方法を指定する。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-intent
   */
  INTENT: 'intent',

  /**
   * インターレース
   *
   * 画像のインターレース形式を設定することができる。プログレッシブ表示やインターレース表示などの方法を指定する。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-interlace
   */
  INTERLACE: 'interlace',

  /**
   * ラベル
   *
   * 画像にラベルを追加することができる。画像にテキストや注釈を付けるのに使用される。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-label
   */
  LABEL: 'label',

  /**
   * 緯度
   *
   * 画像の色調を調整することができる。色相、彩度、明度を変更することで、画像の色調を調整する。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-lat
   */
  LAT: 'lat',

  /**
   * レベル
   *
   * 画像のレベルを調整することができる。色の範囲を変更することで、コントラストや明るさを調整する。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-level
   */
  LEVEL: 'level',

  /**
   * 制限
   *
   * 画像処理に対するリソースの制限を設定することができる。メモリやCPUの使用量、処理速度などを制御する。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-limit
   */
  LIMIT: 'limit',

  /**
   * リスト
   *
   * 画像ファイルや画像の属性をリストアップすることができる。画像のメタデータやファイル情報を取得するのに使用される。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-list
   */
  LIST: 'list',

  /**
   * ログ
   *
   * 画像処理のログを記録することができる。処理の進捗やエラーなどを記録するのに使用される。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-log
   */
  LOG: 'log',

  /**
   * ループ
   *
   * 画像のアニメーションループを設定することができる。アニメーション画像の再生回数やループの制御を行う。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-loop
   */
  LOOP: 'loop',

  /**
   * 小文字化
   *
   * 画像の色の明るさを調整することができる。画像の全体的な明るさを調整するのに使用される。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-lower
   */
  LOWER: 'lower',

  /**
   * 拡大
   *
   * 画像を拡大することができる。画像のサイズを拡大して、詳細な部分を表示するのに使用される。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-magnify
   */
  MAGNIFY: 'magnify',

  /**
   * マップ
   *
   * 画像のピクセル値をマッピングすることができる。指定されたカラーマップに基づいて、画像の色を変換する。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-map
   */
  MAP: 'map',

  /**
   * マスク
   *
   * 画像にマスクを適用することができる。指定されたマスクに基づいて、画像の一部を表示または非表示にする。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-mask
   */
  MASK: 'mask',

  /**
   * マット
   *
   * 画像にマットを追加することができる。マットを追加することで、画像の透過性や形状を調整することができる。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-matte
   */
  MATTE: 'matte',

  /**
   * マットの色
   *
   * 画像のマットの色を指定することができる。マットの色や透明度を調整するのに使用される。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-matteColor
   */
  MATTE_COLOR: 'matteColor',

  /**
   * 最大誤差
   *
   * 画像処理における最大誤差を設定することができる。処理の精度や品質を調整するのに使用される。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-maximumError
   */
  MAXIMUM_ERROR: 'maximumError',

  /**
   * 中央値
   *
   * 画像の中央値フィルタを適用することができる。中央値フィルタは、画像のノイズを除去するのに使用される。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-median
   */
  MEDIAN: 'median',

  /**
   * 縮小
   *
   * 画像を縮小することができる。画像のサイズを縮小して、ファイルサイズを減らすことができる。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-minify
   */
  MINIFY: 'minify',

  /**
   * モード
   *
   * 画像のモードを設定することができる。カラーモードや画像の表示形式を指定するのに使用される。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-mode
   */
  MODE: 'mode',

  /**
   * 変調
   *
   * 画像の色相、彩度、明度を調整することができる。色のバランスや鮮やかさを調整するのに使用される。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-modulate
   */
  MODULATE: 'modulate',

  /**
   * モニター
   *
   * 画像処理の進行状況を監視することができる。処理の進捗や統計情報などをリアルタイムで表示する。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-monitor
   */
  MONITOR: 'monitor',

  /**
   * モノクロ
   *
   * 画像をモノクロームに変換することができる。白黒や二値化などのモノクローム処理が可能。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-monochrome
   */
  MONOCHROME: 'monochrome',

  /**
   * モンタージュ
   *
   * 画像をモンタージュすることができる。複数の画像をタイル状に並べて1枚の画像にまとめる。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-montage
   */
  MONTAGE: 'montage',

  /**
   * 変形
   *
   * 画像間のモーフィングを行うことができる。複数の画像間で形状や特徴を変化させるのに使用される。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-morph
   */
  MORPH: 'morph',

  /**
   * モザイク
   *
   * 複数の画像をモザイク状に配置して一つの画像に結合することができる。画像のタイル表示などに使用される。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-mosaic
   */
  MOSAIC: 'mosaic',

  /**
   * モーションブラー
   *
   * 画像にモーションブラー効果を追加することができる。画像の移動を模倣し、動きのある効果を与える。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-motionBlur
   */
  MOTION_BLUR: 'motionBlur',

  /**
   * 名前
   *
   * 画像の名前や識別子を設定することができる。画像に名前を付けて識別するのに使用される。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-name
   */
  NAME: 'name',

  /**
   * ネガティブ
   *
   * 画像のネガティブを生成することができる。色の反転を行い、画像の色を反転させる。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-negative
   */
  NEGATIVE: 'negative',

  /**
   * ノイズ
   *
   * 画像にノイズを追加することができる。ランダムなノイズやパターンを画像に適用し、効果を与える。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-noise
   */
  NOISE: 'noise',

  /**
   * 無効
   *
   * 画像処理を行わずに、画像をそのまま返すことができる。何もしない処理を行う。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-noop
   */
  NOOP: 'noop',

  /**
   * 正規化
   *
   * 画像の色や明るさを正規化することができる。色のバランスや明るさを一定の基準に合わせる。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-normalize
   */
  NORMALIZE: 'normalize',

  /**
   * 不透明
   *
   * 画像の透明部分を不透明にすることができる。透明な部分を指定された色やパターンで塗りつぶす。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-opaque
   */
  OPAQUE: 'opaque',

  /**
   * 演算子
   *
   * 画像の演算を行うことができる。画像同士の加算、減算、乗算などの演算を実行する。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-operator
   */
  OPERATOR: 'operator',

  /**
   * 順序付きディザリング
   *
   * 画像にオーダーディザリングを適用することができる。ディザリング効果を画像に適用し、色の表現を改善する。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-orderedDither
   */
  ORDERED_DITHER: 'orderedDither',

  /**
   * 出力
   *
   * 出力先を設定することができる。処理結果の出力先を指定する。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-out
   */
  OUT: 'out',

  /**
   * 出力ディレクトリ
   *
   * 処理した画像を出力するディレクトリを指定することができる。画像の出力先を指定する。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-outputDirectory
   */
  OUTPUT_DIRECTORY: 'outputDirectory',

  /**
   * ページ
   *
   * 画像のページサイズや配置を設定することができる。印刷やレイアウトの際に使用される。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-page
   */
  PAGE: 'page',

  /**
   * 一時停止
   *
   * 画像処理の一時停止を行うことができる。処理を一時停止して後で再開することができる。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-pause
   */
  PAUSE: 'pause',

  /**
   * ペン
   *
   * 画像に線やパスを描画することができる。ペンのスタイルや太さを指定して、画像に線を描く。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-pen
   */
  PEN: 'pen',

  /**
   * ピンク
   *
   * 画像の情報を取得することができる。画像のメタデータやファイル情報を取得する。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-ping
   */
  PING: 'ping',

  /**
   * ポイントサイズ
   *
   * 画像のポイントサイズを設定することができる。文字の大きさや線の太さを指定する。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-pointSize
   */
  POINT_SIZE: 'pointSize',

  /**
   * プロファイルなし
   *
   * 画像からプロファイル情報を削除することができる。画像のメタデータからプロファイル情報を除去する。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-noProfile
   */
  NO_PROFILE: 'noProfile',

  /**
   * プレビュー
   *
   * 画像のプレビューを生成することができる。サムネイルやプレビュー画像を生成する。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-preview
   */
  PREVIEW: 'preview',

  /**
   * ペイント
   *
   * 画像にペイント処理を適用することができる。画像に直接描画や色の塗りつぶしを行う。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-paint
   */
  PAINT: 'paint',

  /**
   * プロセス
   *
   * 画像処理を実行することができる。指定された処理を画像に適用し、変換や加工を行う。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-process
   */
  PROCESS: 'process',

  /**
   * プロファイル
   *
   * 画像にプロファイル情報を適用することができる。画像の色空間や色の表現を定義するプロファイル情報を適用する。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-profile
   */
  PROFILE: 'profile',

  /**
   * 進行状況
   *
   * 画像処理の進行状況を表示することができる。処理の進捗状況や残り時間をリアルタイムで表示する。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-progress
   */
  PROGRESS: 'progress',

  /**
   * ランダムしきい値
   *
   * 画像のランダムしきい値処理を行うことができる。ランダムなしきい値を使用して、画像を二値化する。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-randomThreshold
   */
  RANDOM_THRESHOLD: 'randomThreshold',

  /**
   * 品質
   *
   * 画像の品質を設定することができる。圧縮率や品質レベルを調整することで、画像のファイルサイズと品質のバランスを調整する。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-quality
   */
  QUALITY: 'quality',

  /**
   * 浮き出し
   *
   * 画像に浮き出し効果を追加することができる。指定した方向や程度で、画像の輪郭を浮き出し状にする。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-raise
   */
  RAISE: 'raise',

  /**
   * 再着色
   *
   * 画像の色を再塗装することができる。指定した色やパターンで、画像の色を変更する。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-recolor
   */
  RECOLOR: 'recolor',

  /**
   * 赤の主要成分
   *
   * 画像の赤のプライマリ値を設定することができる。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-redPrimary
   */
  RED_PRIMARY: 'redPrimary',

  /**
   * 領域
   *
   * 画像の特定の領域を指定することができる。指定した範囲内の画像処理を行う。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-region
   */
  REGION: 'region',

  /**
   * リモート
   *
   * 画像のリモート処理を実行することができる。リモートサーバーに画像を送信して処理を実行し、結果を取得する。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-remote
   */
  REMOTE: 'remote',

  /**
   * レンダリング
   *
   * 画像をレンダリングすることができる。画像を生成して表示したり、ファイルに書き出したりする。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-render
   */
  RENDER: 'render',

  /**
   * ページ再設定
   *
   * 画像のページ設定を調整することができる。画像のページ位置やサイズを調整する。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-repage
   */
  REPAGE: 'repage',

  /**
   * サンプル
   *
   * 画像のサンプリングを行うことができる。画像の一部をサンプリングして取得する。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-sample
   */
  SAMPLE: 'sample',

  /**
   * サンプリングファクター
   *
   * 画像のサンプリングファクターを設定することができる。サンプリングの精度や効率を調整する。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-samplingFactor
   */
  SAMPLING_FACTOR: 'samplingFactor',

  /**
   * 生のサイズ
   *
   * 画像の生のサイズを取得することができる。画像ファイルの圧縮や変換前の生のサイズを取得する。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-rawSize
   */
  RAW_SIZE: 'rawSize',

  /**
   * 再サンプリング
   *
   * 画像のリサンプリングを行うことができる。画像の解像度やサイズを変更する際に使用される。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-resample
   */
  RESAMPLE: 'resample',

  /**
   * リサイズ
   *
   * 画像のリサイズを行うことができる。画像のサイズを指定した幅や高さに変更する。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-resize
   */
  RESIZE: 'resize',

  /**
   * ロール
   *
   * 画像を指定した方向にスクロールさせることができる。画像を上下左右にスクロールする。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-roll
   */
  ROLL: 'roll',

  /**
   * 回転
   *
   * 画像を回転させることができる。指定した角度だけ画像を回転させる。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-rotate
   */
  ROTATE: 'rotate',

  /**
   * シーン
   *
   * 画像のシーン番号を設定することができる。複数のシーンが含まれる画像ファイルの特定のシーンを指定する。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-scene
   */
  SCENE: 'scene',

  /**
   * シーン
   *
   * 画像内のシーンの情報を取得することができる。複数のシーンが含まれる画像ファイルのシーン情報を取得する。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-scenes
   */
  SCENES: 'scenes',

  /**
   * スケール
   *
   * 画像のスケーリングを行うことができる。画像のサイズを指定した倍率で拡大縮小する。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-scale
   */
  SCALE: 'scale',

  /**
   * スクリーン
   *
   * 画像のスクリーン合成を行うことができる。画像を別の画像や背景と合成して表示する。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-screen
   */
  SCREEN: 'screen',

  /**
   * セグメント
   *
   * 画像をセグメント化して分割することができる。画像を領域ごとに分割し、個々の領域を処理する。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-segment
   */
  SEGMENT: 'segment',

  /**
   * フレーム選択
   *
   * フレームを選択することができる。動画やGIF画像から特定のフレームを選択する。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-selectFrame
   */
  SELECT_FRAME: 'selectFrame',

  /**
   * セピア
   *
   * 画像にセピア調の効果を追加することができる。古めかしい雰囲気を持つセピア色に変換する。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-sepia
   */
  SEPIA: 'sepia',

  /**
   * 設定
   *
   * 画像の特定の属性を設定することができる。画像のメタデータやプロパティを設定する。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-set
   */
  SET: 'set',

  /**
   * フォーマット設定
   *
   * 画像のフォーマットを設定することができる。画像のファイル形式や拡張子を指定する。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-setFormat
   */
  SET_FORMAT: 'setFormat',

  /**
   * 影
   *
   * 画像に影を追加することができる。指定した方向や強度で影を付けることができる。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-shade
   */
  SHADE: 'shade',

  /**
   * シャドウ
   *
   * 画像に影を付けることができる。指定した方向や強度で影を投影することができる。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-shadow
   */
  SHADOW: 'shadow',

  /**
   * 共有メモリ
   *
   * 画像を共有メモリにロードすることができる。他のプロセスと画像を共有するためのメモリ領域を確保する。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-sharedMemory
   */
  SHARED_MEMORY: 'sharedMemory',

  /**
   * 剃る
   *
   * 画像の余白や枠を削除することができる。指定した幅や高さだけ画像の周囲を削除する。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-shave
   */
  SHAVE: 'shave',

  /**
   * シャープ化
   *
   * 画像をシャープにすることができる。画像の輪郭や細部を強調することで、鮮明さを向上させる。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-sharpen
   */
  SHARPEN: 'sharpen',

  /**
   * せん断
   *
   * 画像をせん断させることができる。指定した方向や角度で画像をせん断する。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-shear
   */
  SHEAR: 'shear',

  /**
   * 静か
   *
   * 画像処理の出力を抑制することができる。処理結果を出力せずに処理を行う。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-silent
   */
  SILENT: 'silent',

  /**
   * スナップショット
   *
   * 画像のスナップショットを取得することができる。画像の状態や属性のスナップショットを取得する。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-snaps
   */
  SNAPS: 'snaps',

  /**
   * ソラライズ
   *
   * 画像をソラリゼーションさせることができる。画像の一部分をネガポジ反転させ、劇的な効果を与える。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-solarize
   */
  SOLARIZE: 'solarize',

  /**
   * 拡散
   *
   * 画像の色やパターンを拡散させることができる。色やパターンの広がりを調整する。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-spread
   */
  SPREAD: 'spread',

  /**
   * ステガノ
   *
   * ステガノグラフィを行うことができる。秘密情報を画像に埋め込んだり、画像から秘密情報を取り出すことができる。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-stegano
   */
  STEGANO: 'stegano',

  /**
   * ステレオ
   *
   * 画像をステレオ視用に処理することができる。左右の画像を立体視効果として合成する。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-stereo
   */
  STEREO: 'stereo',

  /**
   * ストリップ
   *
   * 画像からストリップ情報を取り除くことができる。画像ファイルからメタデータやコメントなどを取り除く。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-strip
   */
  STRIP: 'strip',

  /**
   * 渦巻き
   *
   * 画像を渦巻状に歪ませることができる。指定した中心点を中心に画像を渦巻き状に回転させる。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-swirl
   */
  SWIRL: 'swirl',

  /**
   * テキストフォント
   *
   * 画像にテキストを追加する際のフォントを指定することができる。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-textFont
   */
  TEXT_FONT: 'textFont',

  /**
   * テクスチャ
   *
   * 画像にテクスチャを適用することができる。別の画像やパターンを用いて、画像にテクスチャを施す。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-texture
   */
  TEXTURE: 'texture',

  /**
   * しきい値
   *
   * 画像のしきい値処理を行うことができる。指定した閾値を超えるピクセルを二値化し、画像を分類する。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-threshold
   */
  THRESHOLD: 'threshold',

  /**
   * サムネイル
   *
   * 画像のサムネイルを生成することができる。指定したサイズに縮小して画像を生成する。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-thumb
   */
  THUMB: 'thumb',

  /**
   * サムネイル
   *
   * サムネイルを作成することができる。元の画像から縮小されたサムネイル画像を生成する。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-thumbnail
   */
  THUMBNAIL: 'thumbnail',

  /**
   * タイル
   *
   * 画像をタイル状に並べることができる。指定したパターンや配置で画像をタイル表示する。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-tile
   */
  TILE: 'tile',

  /**
   * タイトル
   *
   * タイトルを設定することができる。画像や動画にタイトルを追加する。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-title
   */
  TITLE: 'title',

  /**
   * 変形
   *
   * 画像の変形処理を行うことができる。回転や反転、歪みなどの変形を施す。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-transform
   */
  TRANSFORM: 'transform',

  /**
   * 透明
   *
   * 画像の透明度を設定することができる。指定した色を透明化し、画像の一部を透明にする。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-transparent
   */
  TRANSPARENT: 'transparent',

  /**
   * ツリーの深さ
   *
   * 画像のツリーの深さを取得することができる。画像ファイルの階層構造の深さを調べる。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-treeDepth
   */
  TREE_DEPTH: 'treeDepth',

  /**
   * トリミング
   *
   * 画像から余白を自動的にトリミングすることができる。画像の周囲の余白を削除して、本来の内容を切り出す。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-trim
   */
  TRIM: 'trim',

  /**
   * タイプ
   *
   * 画像のタイプや形式を取得することができる。画像のファイル形式や MIME タイプを調べる。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-type
   */
  TYPE: 'type',

  /**
   * 更新
   *
   * 画像の属性を更新することができる。画像のメタデータやプロパティを更新する。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-update
   */
  UPDATE: 'update',

  /**
   * 単位
   *
   * 画像の単位を取得することができる。画像の単位をピクセル、インチ、センチなどで取得する。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-units
   */
  UNITS: 'units',

  /**
   * アンシャープ
   *
   * 画像にアンシャープマスクを適用することができる。画像の鮮明度を向上させるためのフィルタリングを行う。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-unsharp
   */
  UNSHARP: 'unsharp',

  /**
   * ピクスマップの使用
   *
   * 画像の表示にピクスマップを使用するかどうかを設定することができる。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-usePixmap
   */
  USE_PIXMAP: 'usePixmap',

  /**
   * ビュー
   *
   * 画像のビュー情報を取得することができる。画像のビューのサイズや位置などの情報を取得する。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-view
   */
  VIEW: 'view',

  /**
   * 仮想ピクセル
   *
   * 仮想ピクセルの設定を行うことができる。画像の範囲外のピクセルをどのように扱うかを指定する。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-virtualPixel
   */
  VIRTUAL_PIXEL: 'virtualPixel',

  /**
   * ビジュアル
   *
   * 画像のビジュアル情報を取得することができる。画像の色空間やビジュアル特性を取得する。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-visual
   */
  VISUAL: 'visual',

  /**
   * ウォーターマーク
   *
   * 画像にウォーターマークを追加することができる。透明なロゴやテキストを画像に重ねて表示する。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-watermark
   */
  WATERMARK: 'watermark',

  /**
   * 波
   *
   * 画像に波紋効果を追加することができる。指定した波形や振幅で画像を歪ませる。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-wave
   */
  WAVE: 'wave',

  /**
   * ホワイトポイント
   *
   * 画像のホワイトポイントを設定することができる。画像のホワイトポイントを調整する。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-whitePoint
   */
  WHITE_POINT: 'whitePoint',

  /**
   * ホワイトのしきい値
   *
   * 画像のホワイトのしきい値を設定することができる。白色のピクセルとして扱うしきい値を設定する。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-whiteThreshold
   */
  WHITE_THRESHOLD: 'whiteThreshold',

  /**
   * ウィンドウ
   *
   * 画像のウィンドウ情報を取得することができる。画像のウィンドウ位置やサイズなどを取得する。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-window
   */
  WINDOW: 'window',

  /**
   * ウィンドウグループ
   *
   * 画像のウィンドウグループ情報を取得することができる。画像のウィンドウをグループ化する情報を取得する。
   *
   * http://www.graphicsmagick.org/GraphicsMagick.html#details-windowGroup
   */
  WINDOW_GROUP: 'windowGroup',
} as const;
