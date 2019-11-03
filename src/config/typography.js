import Typography from 'typography'
import bootstrapTheme from 'typography-theme-bootstrap'

bootstrapTheme.headerFontFamily = ['Chia', 'serif']
bootstrapTheme.bodyFontFamily = ['Montserrat', 'sans-serif']
bootstrapTheme.baseFontSize = '18px'
bootstrapTheme.baseLineHeight = 1.666
const typography = new Typography(bootstrapTheme)

export default typography
